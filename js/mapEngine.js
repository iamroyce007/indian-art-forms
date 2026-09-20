/**
 * Map Engine: Interactive Leaflet Map Controller for Indian Art Forms
 * Handles custom heritage map pins, diffusion route overlays, and camera transitions.
 */

class ArtMapEngine {
  constructor(mapContainerId, onMarkerClickCallback) {
    this.containerId = mapContainerId;
    this.onMarkerClick = onMarkerClickCallback;
    this.map = null;
    this.markers = new Map();
    this.routeLayers = [];
    this.activeFilter = {
      category: "all",
      territoryType: "all", // "all" | "states" | "uts"
      era: "all",
      searchQuery: ""
    };

    // Category icon symbols (SVG paths)
    this.categoryIcons = {
      "Folk & Tribal": `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
      "Miniature & Panel Painting": `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.28 19.59 10.59 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-3.5 9c-.83 0-1.5-.67-1.5-1.5S7.67 9 8.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5-3c-.83 0-1.5-.67-1.5-1.5S11.17 6 12 6s1.5.67 1.5 1.5S12.83 9 12 9zm3.5 3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
      "Cave Murals & Frescoes": `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V8h14v10zM7 10h5v5H7z"/></svg>`,
      "Sacred Textile & Fiber Art": `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2l-5.5 9h11z M6.5 13l5.5 9 5.5-9z M2 12l9-5.5v11z M22 12l-9-5.5v11z"/></svg>`,
      "Metal, Stone & Sculpture": `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>`,
      "Ritual Sacred Art": `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/></svg>`
    };
  }

  init() {
    // Center of India coordinates and default zoom
    const indiaCenter = [22.8, 80.5];
    const defaultZoom = window.innerWidth < 768 ? 4 : 5;

    // Initialize Leaflet map with smooth scroll and limits
    this.map = L.map(this.containerId, {
      center: indiaCenter,
      zoom: defaultZoom,
      minZoom: 4,
      maxZoom: 12,
      zoomControl: false,
      attributionControl: false
    });

    // Custom repositioned Zoom control
    L.control.zoom({ position: "bottomright" }).addTo(this.map);

    // Warm carto style tiles with high clarity and contrast
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      maxZoom: 19,
      subdomains: "abcd"
    }).addTo(this.map);

    // Render Markers for all 36 States & UTs
    this.renderMarkers(ALL_INDIAN_ART_DATA);

    // Render Cultural Diffusion Routes
    this.renderDiffusionRoutes();
  }

  createPinIcon(artItem) {
    const iconSvg = this.categoryIcons[artItem.category] || this.categoryIcons["Folk & Tribal"];
    const isUTBadge = artItem.isUT ? `<span class="pin-ut-tag">UT</span>` : "";

    return L.divIcon({
      className: "custom-art-pin-wrapper",
      html: `
        <div class="custom-art-pin" style="--pin-color: ${artItem.badgeColor}" data-id="${artItem.id}">
          <div class="pin-pulse"></div>
          <div class="pin-body">
            ${iconSvg}
          </div>
          ${isUTBadge}
        </div>
      `,
      iconSize: [36, 46],
      iconAnchor: [18, 42],
      popupAnchor: [0, -42]
    });
  }

  renderMarkers(data) {
    // Clear existing markers
    this.markers.forEach((marker) => this.map.removeLayer(marker));
    this.markers.clear();

    data.forEach((art) => {
      const pinIcon = this.createPinIcon(art);
      const marker = L.marker(art.coordinates, { icon: pinIcon });

      // Interactive hover tooltip
      const tooltipContent = `
        <div class="art-map-tooltip">
          <div class="tooltip-state">${art.state} ${art.isUT ? "(Union Territory)" : ""}</div>
          <div class="tooltip-title">${art.title}</div>
          <div class="tooltip-category" style="color: ${art.badgeColor}">● ${art.category}</div>
        </div>
      `;
      marker.bindTooltip(tooltipContent, {
        direction: "top",
        offset: [0, -32],
        className: "heritage-tooltip",
        opacity: 0.95
      });

      // Click handler
      marker.on("click", () => {
        this.selectArtForm(art.id);
      });

      marker.addTo(this.map);
      this.markers.set(art.id, { marker, data: art });
    });
  }

  renderDiffusionRoutes() {
    this.routeLayers.forEach((layer) => this.map.removeLayer(layer));
    this.routeLayers = [];

    ART_DIFFUSION_ROUTES.forEach((route) => {
      const latlngs = [route.from, route.to];
      
      // Curved animated polyline
      const polyline = L.polyline(latlngs, {
        color: route.color,
        weight: 3,
        opacity: 0.8,
        dashArray: "6, 10",
        lineCap: "round"
      });

      polyline.bindTooltip(`
        <div class="route-tooltip">
          <strong>${route.title}</strong>
          <p>${route.description}</p>
        </div>
      `, { sticky: true, className: "heritage-route-tooltip" });

      polyline.addTo(this.map);
      this.routeLayers.push(polyline);
    });
  }

  toggleRoutes(visible) {
    this.routeLayers.forEach((layer) => {
      if (visible) {
        if (!this.map.hasLayer(layer)) this.map.addLayer(layer);
      } else {
        if (this.map.hasLayer(layer)) this.map.removeLayer(layer);
      }
    });
  }

  selectArtForm(artId, shouldFly = true) {
    const entry = this.markers.get(artId);
    if (!entry) return;

    // Reset previous active marker styles
    document.querySelectorAll(".custom-art-pin.active").forEach((el) => {
      el.classList.remove("active");
    });

    // Highlight current marker
    const pinEl = document.querySelector(`.custom-art-pin[data-id="${artId}"]`);
    if (pinEl) pinEl.classList.add("active");

    if (shouldFly) {
      this.map.flyTo(entry.data.coordinates, 7, {
        animate: true,
        duration: 1.2
      });
    }

    if (this.onMarkerClick) {
      this.onMarkerClick(entry.data);
    }
  }

  filterMarkers(filterCriteria) {
    this.activeFilter = { ...this.activeFilter, ...filterCriteria };
    const { category, territoryType, era, searchQuery } = this.activeFilter;
    const query = searchQuery ? searchQuery.toLowerCase().trim() : "";

    let visibleCount = 0;

    this.markers.forEach(({ marker, data }) => {
      let isVisible = true;

      // Territory Filter (All vs 28 States vs 8 UTs)
      if (territoryType === "states" && data.isUT) isVisible = false;
      if (territoryType === "uts" && !data.isUT) isVisible = false;

      // Category Filter
      if (category !== "all" && data.category !== category) isVisible = false;

      // Era Filter
      if (era !== "all" && data.era !== era) isVisible = false;

      // Search Query Filter (name, state, motif, artist)
      if (query) {
        const matchesName = data.title.toLowerCase().includes(query);
        const matchesState = data.state.toLowerCase().includes(query);
        const matchesNative = data.nativeName && data.nativeName.toLowerCase().includes(query);
        const matchesRegion = data.region && data.region.toLowerCase().includes(query);
        const matchesMotifs = data.keyMotifs && data.keyMotifs.some(m => m.toLowerCase().includes(query));
        const matchesArtists = data.masterArtists && data.masterArtists.some(a => a.toLowerCase().includes(query));

        if (!matchesName && !matchesState && !matchesNative && !matchesRegion && !matchesMotifs && !matchesArtists) {
          isVisible = false;
        }
      }

      if (isVisible) {
        if (!this.map.hasLayer(marker)) this.map.addLayer(marker);
        visibleCount++;
      } else {
        if (this.map.hasLayer(marker)) this.map.removeLayer(marker);
      }
    });

    return visibleCount;
  }

  resetView() {
    this.map.flyTo([22.8, 80.5], window.innerWidth < 768 ? 4 : 5, {
      duration: 1
    });
  }
}
