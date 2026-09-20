# India Art Forms Interactive Map

> **Interactive digital map exploring key locations significant to Indian art history across all 28 States and 8 Union Territories.**  
> Course Outcome CO1 &bull; 10 Marks  
> **Author:** Anirudh Ramakrishnan  
> **Registration Number:** `RA2411003012138`

---

## 🌟 Live Demo (GitHub Pages)
🔗 **[Click here to view the live web application](https://iamroyce007.github.io/indian-art-forms/)**

---

## 🎯 Project Objective
To explore the geographic spread, historical context, key artworks, and mutual artistic influence of regional art styles across the Indian subcontinent.

---

## 🎨 Key Features

1. **Subcontinental Cartography Across All 36 States & Union Territories**:
   - 28 Indian States + 8 Union Territories completely documented.
   - Dynamic custom heritage map pins with glowing pulse effects and category icons.
   - Subcontinental bounding with responsive pan, zoom, and reset controls.

2. **Artistic Diffusion & Cultural Spread Routes**:
   - Visualized historical trade routes, monastic migrations, and cultural transmission paths (e.g. Mughal Court to Kangra Pahari foothills, Ajanta fresco spread to South India, Chola maritime bronze casting, and Eastern scroll painting transitions).
   - Toggle paths on/off via header control.

3. **Multi-Picture Visual Gallery with Lightbox**:
   - Every state and union territory features multiple curated high-resolution pictures of artworks, masters at work, and historic architecture.
   - Click any artwork thumbnail to open the full-resolution Lightbox viewer with descriptive captions.

4. **Deep Context & Educational Documentation**:
   - **Historical Era & Movement**: Dynasty patronage, historical roots, and formalization eras.
   - **Key Visual Motifs**: Visual iconography breakdown (e.g., Warli Tarpa dance circle, Madhubani Kohbar motifs, Chola Nataraja cosmic dance).
   - **Cultural & Ritual Significance**: Sacred roles in festivals, domestic rites, temple architecture, and community identity.
   - **Step-by-Step Creation Process**: 4-stage breakdown from raw material harvesting (clays, natural pigments, handwoven canvases) to outline, painting, and burnishing.
   - **Master Artists & Lineages**: Celebrated national masters, Padma Shri / Shilp Guru awardees, and hereditary artisan communities.

5. **Multi-Facet Filtering & Instant Search**:
   - **Territory Filter**: Filter by All (36), 28 States, or 8 Union Territories.
   - **Category Filter**: Folk & Tribal, Miniature & Panel Painting, Cave Murals & Frescoes, Sacred Textile & Fiber Art, Metal/Stone/Sculpture, and Ritual Sacred Art.
   - **Historical Era Filter**: Prehistoric & Ancient, Classical & Medieval, Royal & Courtly, Colonial & Modern Transition, Living Folk Tradition.
   - **Alphabetical Jump-to-State Dropdown**: Quick navigation directly to any state or union territory.
   - **Instant Search Engine**: Real-time fuzzy query across art titles, states, native scripts, motifs, and master artists.

6. **Interactive Knowledge Quiz**:
   - 6-question quiz testing student knowledge of geographic spread, natural pigments, historical dynasties, and signature techniques with immediate feedback and scoring.

7. **Curated Guided Art Trails**:
   - Thematic guided journeys ("Grand Pan-Indian Heritage Odyssey", "Living Folk & Tribal Canvases", "Imperial Miniatures", "Northeast Wonders").

---

## 🛠️ Architecture & Tech Stack

- **Core**: Pure Vanilla HTML5, CSS3, JavaScript (ES6+).
- **Cartography**: Leaflet.js with CartoDB Voyager tiles.
- **Design System**: Heritage Indian aesthetic with custom CSS properties, Google Fonts (*Cinzel* & *Plus Jakarta Sans*), glassmorphic drawers, and responsive UI.
- **Completely Self-Contained**: 100% client-side data (`js/artData.js`), zero server/API dependencies, static hosting on GitHub Pages.

---

## 📂 Repository Structure

```
├── index.html              # Main HTML5 entrypoint with semantic layout
├── css/
│   └── styles.css          # Design system, responsive layout, animations
├── js/
│   ├── artData.js          # Complete dataset for 36 States & UTs with galleries
│   ├── mapEngine.js        # Leaflet map setup, custom pins, route overlays
│   └── app.js              # Application controller, drawer, filters, quiz, lightbox
└── README.md               # Project documentation and submission details
```

---

*Submitted for Academic Evaluation &bull; Course Outcome CO1 &bull; 10 Marks*
