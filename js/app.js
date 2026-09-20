/**
 * Main Application Controller for Interactive Indian Art Map
 * Integrates Leaflet map engine, drawer transitions, multi-facet filtering,
 * guided art trails, and interactive educational quiz.
 */

document.addEventListener("DOMContentLoaded", () => {
  // App State
  let currentArtList = [...ALL_INDIAN_ART_DATA];
  let currentArtIndex = 0;
  let activeTour = null;
  let tourCurrentStep = 0;
  let quizCurrentIndex = 0;
  let quizScore = 0;
  let routesVisible = true;

  // Initialize Map Engine
  const mapEngine = new ArtMapEngine("leaflet-map", (selectedArt) => {
    openArtDrawer(selectedArt);
  });
  mapEngine.init();

  // Populate State Select Dropdown
  const stateSelect = document.getElementById("state-select");
  if (stateSelect) {
    // Sort states alphabetically
    const sortedArt = [...ALL_INDIAN_ART_DATA].sort((a, b) => a.state.localeCompare(b.state));
    sortedArt.forEach((art) => {
      const opt = document.createElement("option");
      opt.value = art.id;
      opt.textContent = `${art.state} ${art.isUT ? "(UT)" : ""} — ${art.title}`;
      stateSelect.appendChild(opt);
    });

    stateSelect.addEventListener("change", (e) => {
      const selectedId = e.target.value;
      if (selectedId) {
        mapEngine.selectArtForm(selectedId, true);
      }
    });
  }

  // =========================================================================
  // Art Detail Drawer Controls
  // =========================================================================
  const drawer = document.getElementById("detail-drawer");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");
  const prevArtBtn = document.getElementById("prev-art-btn");
  const nextArtBtn = document.getElementById("next-art-btn");

  function openArtDrawer(art) {
    currentArtIndex = currentArtList.findIndex((item) => item.id === art.id);
    if (currentArtIndex === -1) currentArtIndex = 0;

    // Header content
    const heroImg = document.getElementById("drawer-hero-img");
    heroImg.src = art.heroImage;
    heroImg.alt = art.title;
    heroImg.onerror = () => {
      heroImg.src = "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80";
    };

    document.getElementById("drawer-state-badge").textContent = `${art.state} ${art.isUT ? "• Union Territory" : "• State"}`;
    document.getElementById("drawer-title").textContent = art.title;
    document.getElementById("drawer-native-name").textContent = art.nativeName || "";

    // Meta box values
    document.getElementById("drawer-meta-category").textContent = art.category;
    document.getElementById("drawer-meta-era").textContent = art.era;
    document.getElementById("drawer-meta-region").textContent = art.region;
    document.getElementById("drawer-meta-movement").textContent = art.artMovement;

    // Summary & Context
    document.getElementById("drawer-summary").textContent = art.summary;
    document.getElementById("drawer-history").textContent = art.historicalContext;
    
    // Cultural Significance
    const culturalEl = document.getElementById("drawer-cultural");
    if (culturalEl) {
      culturalEl.textContent = art.culturalSignificance || art.historicalContext;
    }

    // Multi-Picture Visual Gallery
    const galleryContainer = document.getElementById("drawer-gallery");
    if (galleryContainer) {
      galleryContainer.innerHTML = "";
      const imagesToShow = art.gallery && art.gallery.length > 0 ? art.gallery : [
        { url: art.heroImage, caption: art.title }
      ];

      imagesToShow.forEach((imgObj) => {
        const card = document.createElement("div");
        card.className = "gallery-thumb-card";
        card.innerHTML = `
          <img class="gallery-thumb-img" src="${imgObj.url}" alt="${imgObj.caption}" onerror="this.src='https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80'">
          <div class="gallery-thumb-caption">${imgObj.caption}</div>
        `;
        card.addEventListener("click", () => {
          openLightbox(imgObj.url, imgObj.caption);
        });
        galleryContainer.appendChild(card);
      });
    }

    // Step-by-Step Creation Process Timeline
    const processContainer = document.getElementById("drawer-process");
    if (processContainer) {
      processContainer.innerHTML = "";
      if (art.creationProcess && art.creationProcess.length > 0) {
        art.creationProcess.forEach((stepItem) => {
          const stepCard = document.createElement("div");
          stepCard.className = "process-step-card";
          stepCard.innerHTML = `
            <div class="process-step-num">${stepItem.step}</div>
            <div class="process-step-content">
              <div class="process-step-title">${stepItem.title}</div>
              <div class="process-step-desc">${stepItem.desc}</div>
            </div>
          `;
          processContainer.appendChild(stepCard);
        });
      }
    }

    document.getElementById("drawer-spread").textContent = art.geographicSpread;
    document.getElementById("drawer-technique").textContent = art.techniquesAndPigments;

    // Motifs
    const motifsContainer = document.getElementById("drawer-motifs");
    motifsContainer.innerHTML = "";
    if (art.keyMotifs && art.keyMotifs.length > 0) {
      art.keyMotifs.forEach((motif) => {
        const tag = document.createElement("span");
        tag.className = "motif-tag";
        tag.textContent = motif;
        motifsContainer.appendChild(tag);
      });
    }

    // Master Artists
    const artistsList = document.getElementById("drawer-artists");
    artistsList.innerHTML = "";
    if (art.masterArtists && art.masterArtists.length > 0) {
      art.masterArtists.forEach((artist) => {
        const li = document.createElement("li");
        li.className = "artist-item";
        li.innerHTML = `
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
          <span>${artist}</span>
        `;
        artistsList.appendChild(li);
      });
    }

    // Open drawer
    drawer.classList.add("open");

    // Sync select dropdown if applicable
    if (stateSelect) {
      stateSelect.value = art.id;
    }
  }

  function closeArtDrawer() {
    drawer.classList.remove("open");
  }

  drawerCloseBtn.addEventListener("click", closeArtDrawer);

  // Previous / Next Art Form navigation
  prevArtBtn.addEventListener("click", () => {
    if (currentArtList.length === 0) return;
    currentArtIndex = (currentArtIndex - 1 + currentArtList.length) % currentArtList.length;
    const nextArt = currentArtList[currentArtIndex];
    mapEngine.selectArtForm(nextArt.id, true);
  });

  nextArtBtn.addEventListener("click", () => {
    if (currentArtList.length === 0) return;
    currentArtIndex = (currentArtIndex + 1) % currentArtList.length;
    const nextArt = currentArtList[currentArtIndex];
    mapEngine.selectArtForm(nextArt.id, true);
  });

  // =========================================================================
  // Filtering System
  // =========================================================================
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const eraFilter = document.getElementById("era-filter");
  const resultsCount = document.getElementById("results-count");
  const territoryPills = document.querySelectorAll(".filter-pill[data-territory]");

  let currentCriteria = {
    territoryType: "all",
    category: "all",
    era: "all",
    searchQuery: ""
  };

  function applyFilters() {
    const visibleCount = mapEngine.filterMarkers(currentCriteria);
    resultsCount.textContent = `${visibleCount} Art Forms Displayed`;

    // Filter current art list for drawer pagination
    currentArtList = ALL_INDIAN_ART_DATA.filter((art) => {
      if (currentCriteria.territoryType === "states" && art.isUT) return false;
      if (currentCriteria.territoryType === "uts" && !art.isUT) return false;
      if (currentCriteria.category !== "all" && art.category !== currentCriteria.category) return false;
      if (currentCriteria.era !== "all" && art.era !== currentCriteria.era) return false;

      const q = currentCriteria.searchQuery.toLowerCase().trim();
      if (q) {
        return (
          art.title.toLowerCase().includes(q) ||
          art.state.toLowerCase().includes(q) ||
          (art.region && art.region.toLowerCase().includes(q)) ||
          (art.keyMotifs && art.keyMotifs.some(m => m.toLowerCase().includes(q)))
        );
      }
      return true;
    });
  }

  // Territory Pills (All, 28 States, 8 UTs)
  territoryPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      territoryPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCriteria.territoryType = pill.dataset.territory;
      applyFilters();
    });
  });

  // Category & Era Dropdowns
  categoryFilter.addEventListener("change", (e) => {
    currentCriteria.category = e.target.value;
    applyFilters();
  });

  eraFilter.addEventListener("change", (e) => {
    currentCriteria.era = e.target.value;
    applyFilters();
  });

  // Search input
  searchInput.addEventListener("input", (e) => {
    currentCriteria.searchQuery = e.target.value;
    applyFilters();
  });

  // Reset Map View Button
  const resetViewBtn = document.getElementById("reset-view-btn");
  if (resetViewBtn) {
    resetViewBtn.addEventListener("click", () => {
      mapEngine.resetView();
    });
  }

  // Toggle Migration Routes Button
  const toggleRoutesBtn = document.getElementById("toggle-routes-btn");
  if (toggleRoutesBtn) {
    toggleRoutesBtn.addEventListener("click", () => {
      routesVisible = !routesVisible;
      mapEngine.toggleRoutes(routesVisible);
      toggleRoutesBtn.classList.toggle("active", routesVisible);
    });
  }

  // =========================================================================
  // Guided Art Trails Modal & Engine
  // =========================================================================
  const trailsModal = document.getElementById("trails-modal");
  const openTrailsBtn = document.getElementById("open-trails-btn");
  const closeTrailsBtn = document.getElementById("close-trails-btn");
  const trailsContainer = document.getElementById("trails-container");
  const tourControlBar = document.getElementById("tour-control-bar");
  const tourTitle = document.getElementById("tour-title");
  const tourStepCounter = document.getElementById("tour-step-counter");
  const tourPrevBtn = document.getElementById("tour-prev-btn");
  const tourNextBtn = document.getElementById("tour-next-btn");
  const tourExitBtn = document.getElementById("tour-exit-btn");

  // Render Trails in Modal
  GUIDED_TRAILS.forEach((trail) => {
    const card = document.createElement("div");
    card.className = "trail-card";
    card.innerHTML = `
      <div class="trail-title">${trail.title}</div>
      <div class="trail-subtitle">${trail.subtitle}</div>
      <div class="trail-desc">${trail.description}</div>
    `;
    card.addEventListener("click", () => {
      startGuidedTour(trail);
      trailsModal.classList.remove("active");
    });
    trailsContainer.appendChild(card);
  });

  openTrailsBtn.addEventListener("click", () => trailsModal.classList.add("active"));
  closeTrailsBtn.addEventListener("click", () => trailsModal.classList.remove("active"));

  function startGuidedTour(trail) {
    activeTour = trail;
    tourCurrentStep = 0;
    tourControlBar.classList.add("active");
    updateTourView();
  }

  function updateTourView() {
    if (!activeTour) return;
    const stopId = activeTour.stops[tourCurrentStep];
    const art = ALL_INDIAN_ART_DATA.find((item) => item.id === stopId);

    tourTitle.textContent = activeTour.title;
    tourStepCounter.textContent = `Stop ${tourCurrentStep + 1} of ${activeTour.stops.length}: ${art ? art.title : ""}`;

    if (art) {
      mapEngine.selectArtForm(art.id, true);
    }
  }

  tourPrevBtn.addEventListener("click", () => {
    if (!activeTour) return;
    if (tourCurrentStep > 0) {
      tourCurrentStep--;
      updateTourView();
    }
  });

  tourNextBtn.addEventListener("click", () => {
    if (!activeTour) return;
    if (tourCurrentStep < activeTour.stops.length - 1) {
      tourCurrentStep++;
      updateTourView();
    }
  });

  tourExitBtn.addEventListener("click", () => {
    activeTour = null;
    tourControlBar.classList.remove("active");
  });

  // =========================================================================
  // Interactive Knowledge Quiz Modal
  // =========================================================================
  const quizModal = document.getElementById("quiz-modal");
  const openQuizBtn = document.getElementById("open-quiz-btn");
  const closeQuizBtn = document.getElementById("close-quiz-btn");
  const quizQuestionEl = document.getElementById("quiz-question");
  const quizOptionsEl = document.getElementById("quiz-options");
  const quizProgressFill = document.getElementById("quiz-progress-fill");
  const quizFeedbackBox = document.getElementById("quiz-feedback-box");
  const quizActionBtn = document.getElementById("quiz-action-btn");

  openQuizBtn.addEventListener("click", () => {
    quizCurrentIndex = 0;
    quizScore = 0;
    quizModal.classList.add("active");
    renderQuizQuestion();
  });

  closeQuizBtn.addEventListener("click", () => quizModal.classList.remove("active"));

  function renderQuizQuestion() {
    quizFeedbackBox.style.display = "none";
    quizActionBtn.style.display = "none";

    if (quizCurrentIndex >= QUIZ_QUESTIONS.length) {
      // Quiz Complete
      quizProgressFill.style.width = "100%";
      quizQuestionEl.innerHTML = `🎉 Quiz Completed! You scored <strong>${quizScore} / ${QUIZ_QUESTIONS.length}</strong>`;
      quizOptionsEl.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
          <p style="font-size: 0.95rem; color: #475569; margin-bottom: 16px;">
            ${quizScore >= 5 ? "Splendid! You have mastered the geographic diversity of Indian art." : "Great effort! Explore more art forms on the map to deepen your understanding."}
          </p>
          <button id="quiz-restart-btn" class="action-btn primary" style="margin: 0 auto;">Restart Quiz</button>
        </div>
      `;
      document.getElementById("quiz-restart-btn").addEventListener("click", () => {
        quizCurrentIndex = 0;
        quizScore = 0;
        renderQuizQuestion();
      });
      return;
    }

    const q = QUIZ_QUESTIONS[quizCurrentIndex];
    quizProgressFill.style.width = `${(quizCurrentIndex / QUIZ_QUESTIONS.length) * 100}%`;
    quizQuestionEl.textContent = `${quizCurrentIndex + 1}. ${q.question}`;

    quizOptionsEl.innerHTML = "";
    q.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-opt-btn";
      btn.textContent = optText;
      btn.addEventListener("click", () => checkQuizAnswer(idx, q.correct, q.explanation));
      quizOptionsEl.appendChild(btn);
    });
  }

  function checkQuizAnswer(selectedIdx, correctIdx, explanation) {
    const buttons = quizOptionsEl.querySelectorAll(".quiz-opt-btn");
    buttons.forEach((b) => (b.disabled = true));

    if (selectedIdx === correctIdx) {
      buttons[selectedIdx].classList.add("correct");
      quizScore++;
      quizFeedbackBox.innerHTML = `<strong>✓ Correct!</strong> ${explanation}`;
      quizFeedbackBox.style.borderLeftColor = "#22c55e";
    } else {
      buttons[selectedIdx].classList.add("incorrect");
      buttons[correctIdx].classList.add("correct");
      quizFeedbackBox.innerHTML = `<strong>✗ Incorrect.</strong> ${explanation}`;
      quizFeedbackBox.style.borderLeftColor = "#ef4444";
    }

    quizFeedbackBox.style.display = "block";
    quizActionBtn.textContent = quizCurrentIndex < QUIZ_QUESTIONS.length - 1 ? "Next Question →" : "See Final Score";
    quizActionBtn.style.display = "block";
  }

  quizActionBtn.addEventListener("click", () => {
    quizCurrentIndex++;
    renderQuizQuestion();
  });

  // Lightbox Modal Controls
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxCloseBtn = document.getElementById("lightbox-close-btn");

  function openLightbox(url, caption) {
    lightboxImg.src = url;
    lightboxCaption.textContent = caption || "";
    lightboxModal.classList.add("active");
  }

  function closeLightbox() {
    lightboxModal.classList.remove("active");
  }

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener("click", closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // Modal Backdrop click to close
  [trailsModal, quizModal, lightboxModal].forEach((modal) => {
    if (!modal) return;
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });

  // Initial setup: open Madhubani or first item on desktop
  if (window.innerWidth > 1024 && ALL_INDIAN_ART_DATA.length > 0) {
    setTimeout(() => {
      openArtDrawer(ALL_INDIAN_ART_DATA[3]); // Madhubani (Bihar)
    }, 600);
  }
});
