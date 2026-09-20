/**
 * Comprehensive Dataset: Indian Art Forms across ALL 28 States & 8 Union Territories
 * Every entity includes historical era, movement, master artists, techniques, key motifs,
 * geographic coordinates, and authentic web photography.
 */

const ALL_INDIAN_ART_DATA = [
  // ==================== 28 STATES ====================
  {
    id: "andhra_pradesh",
    title: "Kalamkari Textile Art",
    nativeName: "కలంకారీ కళారூపం",
    state: "Andhra Pradesh",
    isUT: false,
    region: "Srikalahasti & Machilipatnam",
    coordinates: [13.7498, 79.7036],
    category: "Sacred Textile & Fiber Art",
    era: "Classical & Medieval",
    periodDetail: "Flourished under Golconda Sultanate & Vijayanagara Empire (15th–17th Century)",
    artMovement: "Temple Backdrop Narrative & Golconda Chintz",
    badgeColor: "#0284C7",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Kalamkari_painting.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kalamkari_painting.jpg?width=1000",
            "caption": "Hand-painted Kalamkari cloth with natural dyes"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kalamkari_painting_in_progress.jpg?width=800",
            "caption": "Artisan hand-painting Kalamkari with a bamboo kalam pen"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kalamkari_Painting.JPG?width=800",
            "caption": "Detail of a Kalamkari narrative panel"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Dashavatara_de_kalamkari%2C_British_Museum.jpg?width=800",
            "caption": "Dashavatara Kalamkari hanging, British Museum collection"
      }
],
    culturalSignificance: "Historically served as sacred temple portico hangings and mobile scripture backdrops. In Srikalahasti, it is deeply theological and spiritual, while Machilipatnam represents ancient Indian Ocean maritime trade links with Persia and Southeast Asia.",
    creationProcess: [
      {
            "step": 1,
            "title": "Bleaching & Milk Buffering",
            "desc": "Raw cotton cloth is bleached in river water with cow dung and soaked in buffalo milk blended with myrobalan nut powder (karakkaya) to prevent pigment bleeding."
      },
      {
            "step": 2,
            "title": "Charcoal Sketch & Kalam Inking",
            "desc": "Contour outlines are drawn using burnt tamarind twigs, then inked with a sharpened bamboo reed pen holding fermented iron acetate."
      },
      {
            "step": 3,
            "title": "Alum Mordanting & Madder Boiling",
            "desc": "Alum solution is painted on areas destined for red tones, followed by boiling in copper cauldrons with madder roots (surulpattai) to release radiant crimson."
      },
      {
            "step": 4,
            "title": "Indigo Dyeing & Sun Curing",
            "desc": "The fabric is immersed in organic indigo vats for deep blues and painted with pomegranate rind extract for turmeric yellow, followed by river washing and sun drying."
      }
],
    summary: "Ancient hand-painted (Srikalahasti) and block-printed (Machilipatnam) cotton using a bamboo pen ('kalam') dipped in fermented vegetable dyes and alum mordants.",
    historicalContext: "Temple bards used Kalamkari hangings to narrate Mahabharata and Ramayana scenes to village gatherings. Later, Golconda and European trade turned it into the prized 'Chintz' textile exported across the globe.",
    geographicSpread: "Centered in Srikalahasti (Chittoor) and coastal Machilipatnam (Krishna), historic trade routes spread its influence across Southeast Asia and Europe.",
    techniquesAndPigments: "Involves 23 steps: washing in buffalo milk, sketching with charcoal from tamarind twigs, applying alum mordant, and boiling with madder root for deep crimson and indigo for deep blues.",
    keyMotifs: ["Tree of Life (Kalpavriksha)", "Peacocks & mythical Simha lions", "Ramayana episode panels with Telugu text", "Persian boteh paisley borders"],
    masterArtists: ["Jonnalagadda Gurappa Chetty (Padma Shri & Shilp Guru)", "J. Niranjan", "K. Lakshmaiah"]
  },
  {
    id: "arunachal_pradesh",
    title: "Monpa Thangka & Buddhist Woodcraft",
    nativeName: "མོན་པའི་ཐང་ཀ",
    state: "Arunachal Pradesh",
    isUT: false,
    region: "Tawang & West Kameng",
    coordinates: [27.5861, 91.8594],
    category: "Ritual Sacred Art",
    era: "Living Folk Tradition",
    periodDetail: "Flourished alongside Tawang Monastery (founded 1681 CE by Merak Lama)",
    artMovement: "Himalayan Mahayana Buddhist Sacred Iconography",
    badgeColor: "#B45309",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Thangka_Painting_depicting_the_Buddhist_parable_of_the_Four_Harmonious_Friends_at_Tawang_Monastery%2C_Tawang%2C_Arunachal_Pradesh%2C_India.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Thangka_Painting_depicting_the_Buddhist_parable_of_the_Four_Harmonious_Friends_at_Tawang_Monastery%2C_Tawang%2C_Arunachal_Pradesh%2C_India.jpg?width=1000",
            "caption": "Thangka at Tawang Monastery, Arunachal Pradesh"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Palden_Lhamo%2C_Tawang_Monastery.jpg?width=800",
            "caption": "Palden Lhamo thangka, Tawang Monastery"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Tawang_Monastery_Doorway_Mandala.jpg?width=800",
            "caption": "Painted mandala doorway, Tawang Monastery"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Animal_Head_Mask_from_Monpa%2C_Arunachal_Pradesh.jpg?width=800",
            "caption": "Monpa animal-head ritual mask"
      }
],
    culturalSignificance: "Thangkas serve as visual meditation supports (yantras) that channel cosmic enlightenment. The accompanying Monpa Cham masks channel spiritual guardian deities during Torgya and Losar new year rituals to banish negative energies from the community.",
    creationProcess: [
      {
            "step": 1,
            "title": "Canvas Priming & Burnishing",
            "desc": "Cotton cloth is stitched onto a wooden frame, treated with gesso made of chalk and yak-hide glue, and rubbed smooth with a conch shell."
      },
      {
            "step": 2,
            "title": "Sacred Grid Drawing",
            "desc": "Proportions of deities are laid out using charcoal strings according to canonical iconometric manuals (Tigse)."
      },
      {
            "step": 3,
            "title": "Mineral Pigment Application",
            "desc": "Crushed malachite (green), lapis lazuli (blue), and vermilion (red) are painted in delicate gradient glazes."
      },
      {
            "step": 4,
            "title": "Pure Gold Illumination & Mounting",
            "desc": "24K liquid gold is applied for divine robes and halos, burnished with an agate stone, and framed inside opulent Chinese silk brocade."
      }
],
    summary: "Sacred Buddhist scroll paintings on silk or cotton depicting Buddhas and Mandalas, paired with vivid carved wooden animal masks used in Tawang's monastic Cham dances.",
    historicalContext: "Tawang Monastery is India's largest Buddhist monastery. Monpa monks and craft guilds paint intricate sacred geometries according to strict iconometric proportions outlined in ancient Tibetan sutras.",
    geographicSpread: "Stretching along the Eastern Himalayan borderlands of Tawang, Dirang, and Bomdila into Bhutan and Tibet.",
    techniquesAndPigments: "Cotton stretched on wooden frames, primed with chalk and yak-skin glue. Pigments extracted from crushed malachite, lapis lazuli, cinnabar, and burnished pure gold leaf.",
    keyMotifs: ["Padmasambhava (Guru Rinpoche)", "Cosmic Kalachakra Mandalas", "Masks of Wrathful Mahakala & Snow Lion", "Eight Auspicious Symbols (Ashtamangala)"],
    masterArtists: ["Tawang Monastic Artisanal Guilds", "Dorjee Khandu Monpa", "Wangshu Wanchoo"]
  },
  {
    id: "assam",
    title: "Majuli Mask Making (Mukha Shilpa)",
    nativeName: "মাজুলীৰ মুখা শিল্প",
    state: "Assam",
    isUT: false,
    region: "Majuli River Island & Satras",
    coordinates: [26.9500, 94.2167],
    category: "Folk & Tribal",
    era: "Classical & Medieval",
    periodDetail: "Initiated in the 15th–16th century by Saint Srimanta Sankardeva",
    artMovement: "Neo-Vaishnavite Satthriya Theatrical Craft",
    badgeColor: "#EA580C",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/A_mask_at_Majuli%2C_Assam.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/A_mask_at_Majuli%2C_Assam.jpg?width=1000",
            "caption": "Traditional mukha mask, Majuli Island"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Majuli_mask_making_culture.jpg?width=800",
            "caption": "Artisan crafting a Majuli mukha mask"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Mask_in_the_making%2C_Majuli%2C_Assam.jpg?width=800",
            "caption": "Bamboo-and-clay mask under construction, Majuli"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/The_Mask_of_Majuli_-_Hanuman-Monkey.jpg?width=800",
            "caption": "Finished Hanuman mukha mask, Majuli"
      }
],
    culturalSignificance: "The masks embody the core aesthetic of Satthriya culture, where spirituality merges with performance. The actors inhabit the divine or demonic personas, moving flexible jaws and eyes during community temple theater.",
    creationProcess: [
      {
            "step": 1,
            "title": "Bamboo Frame Weaving",
            "desc": "Flexible local bamboo strips (jatibaah) are woven into a hollow 3D skeletal framework of the character."
      },
      {
            "step": 2,
            "title": "River Clay & Cow Dung Plastering",
            "desc": "Fine silt from the Brahmaputra river mixed with cow dung and cotton rag strips is layered over the frame to sculpt muscles and facial features."
      },
      {
            "step": 3,
            "title": "Natural Sun Curing",
            "desc": "The sculpted masks are dried slowly in the shade and sun to prevent cracks in the organic clay."
      },
      {
            "step": 4,
            "title": "Hengul-Haital Painting",
            "desc": "Painted with organic minerals: Hengul (red cinnabar), Haital (yellow orpiment), Indigo (blue), and soot lampblack."
      }
],
    summary: "Traditional organic masks made of bamboo, clay from the Brahmaputra, cow dung, and vegetable dyes for the sacred Bhaona dance-dramas on Majuli, the world's largest river island.",
    historicalContext: "Srimanta Sankardeva conceptualized Majuli masks to make spiritual epics visually accessible to everyone. The Chamaguri Satra monastery in Majuli has preserved this unbroken lineage for over 500 years.",
    geographicSpread: "Cultivated across the Brahmaputra Valley of Assam; now recognized with a Geographical Indication (GI) tag and exhibited worldwide.",
    techniquesAndPigments: "Pliant local bamboo splits form the 3D armature; covered with cloth dipped in alluvial clay and cow dung, then painted with natural dyes like Hengul (red vermilion) and Haital (yellow arsenic).",
    keyMotifs: ["Ravana (with ten movable heads)", "Garuda the divine eagle", "Narasimha the half-man half-lion avatar", "Demons (Surpanakha, Kumbhakarna)"],
    masterArtists: ["Dhiren Goswami (Padma Shri 2024)", "Hem Chandra Goswami (Sangeet Natak Akademi Awardee)", "Prabin Goswami"]
  },
  {
    id: "bihar",
    title: "Madhubani / Mithila Painting",
    nativeName: "मिथिला चित्रकला",
    state: "Bihar",
    isUT: false,
    region: "Madhubani, Darbhanga & Ranti",
    coordinates: [26.3541, 86.0718],
    category: "Folk & Tribal",
    era: "Living Folk Tradition",
    periodDetail: "Roots in ancient Mithila; documented in Ramayana; formalized 14th–20th Century",
    artMovement: "Mithila Ritualistic Wall & Floor Art (Kohbar & Aripan)",
    badgeColor: "#DC2626",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Madhubani_painting_by_Bhuvana_Meenakshi.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Madhubani_painting_by_Bhuvana_Meenakshi.jpg?width=1000",
            "caption": "Madhubani painting with traditional motifs"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Dilli_Haat_Madhubani_Mithila_Painting_Artist.jpg?width=800",
            "caption": "Mithila artist painting at Dilli Haat"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Madhubani_Painting_Exhibition.jpg?width=800",
            "caption": "Madhubani paintings on display"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Madhubani_paintings_or_Milithila_Painting-IMG_0103.jpg?width=800",
            "caption": "Mithila-style painting detail"
      }
],
    culturalSignificance: "Madhubani is inherently matrimonial, matriarchal, and sacred. The Kohbar ghar painting is blessed by the family women to invoke fertility, protection, and eternal cosmic harmony for newlywed couples.",
    creationProcess: [
      {
            "step": 1,
            "title": "Mud & Cowdung Wall Treatment",
            "desc": "Traditionally walls were smeared with mud and cowdung paste; on paper, handmade sheets are treated with cowdung wash for an antique texture."
      },
      {
            "step": 2,
            "title": "Double-Line Outline",
            "desc": "The artist paints parallel contour lines without prior pencil sketching using a dipped bamboo twig or metal nib."
      },
      {
            "step": 3,
            "title": "Hatching & Shading (Kachni & Bharni)",
            "desc": "The inner zones are either filled with dense cross-hatching (Kachni) or saturated flat colors (Bharni)."
      },
      {
            "step": 4,
            "title": "Organic Pigment Application",
            "desc": "Colors from lamp soot, turmeric, indigo, crushed marigolds, and kusum flowers are carefully laid down."
      }
],
    summary: "World-renowned folk idiom practiced by women of Mithila, marked by two-dimensional figures, intricate geometric hatching, and double-line contours filled with vivid plant dyes.",
    historicalContext: "Traditionally painted on mud walls during marriages, births, and festivals. Discovered globally after the 1934 Bihar earthquake revealed stunning interior chamber frescoes.",
    geographicSpread: "Covers Northern Bihar and extends into the southern Terai of Nepal; now globally exhibited in premier modern art museums.",
    techniquesAndPigments: "Prepared using twigs, fingers, and nib-pens. Natural colors from soot (black), turmeric (yellow), indigo (blue), kusum flowers (red), and wood apple leaves (green).",
    keyMotifs: ["Kohbar (nuptial chamber bamboo and lotus)", "Radha-Krishna in Kadamba groves", "Fish (fertility) and Peacocks (grace)", "Sun and Moon cosmic deities"],
    masterArtists: ["Sita Devi (Padma Shri)", "Ganga Devi (Padma Shri)", "Mahasundari Devi (Padma Shri)", "Bauwa Devi (Padma Shri)", "Dulari Devi (Padma Shri)"]
  },
  {
    id: "chhattisgarh",
    title: "Bastar Dhokra Lost-Wax Metalcraft",
    nativeName: "बस्तर डोकरा धातु शिल्प",
    state: "Chhattisgarh",
    isUT: false,
    region: "Bastar, Jagdalpur & Kondagaon",
    coordinates: [19.0748, 82.0305],
    category: "Metal, Stone & Sculpture",
    era: "Prehistoric & Ancient",
    periodDetail: "4,000-year continuous metallurgy lineage dating back to the Indus Valley Civilisation",
    artMovement: "Indigenous Tribal Lost-Wax Metallurgy (Cire Perdue)",
    badgeColor: "#D97706",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Dokra_from_tribes_of_Bastar_DSCN1172_01.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Dokra_from_tribes_of_Bastar_DSCN1172_01.jpg?width=1000",
            "caption": "Bastar Dhokra lost-wax bronze figures"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Dokra_from_tribes_of_Bastar_DSCN1172_02.jpg?width=800",
            "caption": "Dhokra metalcraft detail, Bastar"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Dokra_from_tribes_of_Bastar_DSCN1172_03.jpg?width=800",
            "caption": "Traditional Dhokra tribal figurines"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/DHURWA_TRIBE_OF_BASTAR-INDIA.jpg?width=800",
            "caption": "Dhurwa tribal community of Bastar, Chhattisgarh"
      }
],
    culturalSignificance: "Dhokra artifacts serve as ancestral clan deities (Danteshwari Devi, Budha Dev) and ceremonial wedding measuring bowls. Each bronze piece is unique because its individual clay-and-wax mold must be broken to retrieve the cast.",
    creationProcess: [
      {
            "step": 1,
            "title": "Clay Core Sculpting",
            "desc": "A rough clay core mixed with termite mound earth and rice husk is molded by hand into the basic silhouette."
      },
      {
            "step": 2,
            "title": "Beeswax Thread Wrapping",
            "desc": "Pure beeswax kneaded with resin is extruded into thin noodles and wound meticulously around the core to create intricate filigree details."
      },
      {
            "step": 3,
            "title": "Mantle Encasing & Furnace Baking",
            "desc": "The wax model is coated in multiple layers of fine alluvial mud and fitted with pouring channels, then placed in an open-pit kiln."
      },
      {
            "step": 4,
            "title": "Molten Metal Pour & Mold Breaking",
            "desc": "Molten brass alloy is poured into the funnel, melting away the wax. After cooling, the mud mold is cracked open to unveil the bronze sculpture."
      }
],
    summary: "Ancient non-ferrous bell metal casting by tribal Ghadwa artisans, producing rustic elongated human and animal figurines of gods, village dancers, and wildlife.",
    historicalContext: "The Ghadwas ('potters of bronze') craft ritual deities for the Maria and Muria tribes. This method is identical to the technology used for the famous 2500 BCE 'Dancing Girl of Mohenjo-daro'.",
    geographicSpread: "Dense sal forest valleys of Bastar and Kondagaon in Chhattisgarh, with offshoots in neighbouring Odisha and Jharkhand.",
    techniquesAndPigments: "Clay core covered with beeswax threads to form intricate patterns, encased in alluvial mud and baked in open-hearth kilns as molten brass replaces the melted wax.",
    keyMotifs: ["Danteshwari Devi & tribal deities", "Elongated elephants with decorative howdahs", "Tribal musicians playing dhol and tutari horns", "Antelope and deer herds with spiral horns"],
    masterArtists: ["Jaidev Baghel (National Award & Shilp Guru)", "Sukhchand Ghadwa", "Rajendra Baghel"]
  },
  {
    id: "goa",
    title: "Kaavi Kale (Red-Ochre Sgraffito Murals)",
    nativeName: "कावी काळे",
    state: "Goa",
    isUT: false,
    region: "Ponda, Marcel & South Goa",
    coordinates: [15.4026, 74.0152],
    category: "Cave Murals & Frescoes",
    era: "Classical & Medieval",
    periodDetail: "16th Century CE onwards during Konkan Temple and Indo-Portuguese Architecture",
    artMovement: "Konkan Red Laterite Sgraffito Architectural Art",
    badgeColor: "#991B1B",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Kaavi_Art_in_the_Convent_of_Santa_Monica%2C_Old_Goa%2C_India..jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kaavi_Art_in_the_Convent_of_Santa_Monica%2C_Old_Goa%2C_India..jpg?width=1000",
            "caption": "Kaavi red-ochre sgraffito mural, Convent of Santa Monica"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Christian_art_on_an_arch%2C_with_Indo-Portuguese_-_Goan_influences_at_Convent_of_Santa_Monica%2C_Old_Goa.jpg?width=800",
            "caption": "Indo-Portuguese Kaavi arch mural, Old Goa"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Basilica_of_Bom_Jesus_25_Nov_2025.jpg?width=800",
            "caption": "Baroque Portuguese-Goan church architecture"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Church_of_St.Augustine.jpg?width=800",
            "caption": "Laterite stone church ruins, Old Goa"
      }
],
    culturalSignificance: "Kaavi is a synthesis of indigenous Konkan Shaivite/Vaishnavite traditions and Portuguese architectural geometry. It protected external masonry from torrential coastal rains while turning shrines into visual mythological bibles.",
    creationProcess: [
      {
            "step": 1,
            "title": "Seashell Lime Plastering",
            "desc": "Snow-white plaster prepared from burnt seashells, sand, and jaggery water is applied to the masonry wall."
      },
      {
            "step": 2,
            "title": "Urav Laterite Coating",
            "desc": "A top coat of fine red laterite stone powder (urav) is smeared evenly while the base plaster is still damp."
      },
      {
            "step": 3,
            "title": "Steel Stylus Etching (Sgraffito)",
            "desc": "Master craftsmen use sharp steel knives (kanthas) to freehand etch contours, peeling away the red layer to reveal gleaming white lines."
      },
      {
            "step": 4,
            "title": "Water Curing & Buffing",
            "desc": "The etched wall is gently sprayed with water for two weeks to cure the lime, creating a glass-smooth weatherproof surface."
      }
],
    summary: "An endangered architectural mural art of coastal Konkan where intricate mythological scenes are etched into wet lime plaster stained with reddish-brown laterite clay.",
    historicalContext: "Found on the interior and exterior walls of ancient temples, ancestral homes, and Roman Catholic shrines in Goa. Developed to withstand heavy coastal monsoon humidity without fading.",
    geographicSpread: "Spans coastal Goa, northern Karnataka (Karwar, Kumta), and southern Maharashtra (Sindhudurg).",
    techniquesAndPigments: "Snow-white lime plaster made from burnt seashells is coated with urav (red laterite clay). Artisans swiftly carve incisions using steel styluses while wet, revealing white line contours.",
    keyMotifs: ["Kaliya Dalan (Lord Krishna subduing serpent Kaliya)", "Garuda and Hanuman dvarapalas (guardians)", "Geometric flower rosettes and wave arabesques", "Saraswati playing veena under scalloped arches"],
    masterArtists: ["Dr. Krishnanand Kamat (Historian & Reviver)", "Heta Pandit (Heritage conservationist)", "Goan Temple Guild Artisans"]
  },
  {
    id: "gujarat",
    title: "Rogan Art & Pithora Paintings",
    nativeName: "રોગન કળા અને પીઠોરા",
    state: "Gujarat",
    isUT: false,
    region: "Nirona (Kutch) & Chhota Udaipur",
    stateDisplay: "Gujarat",
    coordinates: [23.3667, 69.4167],
    category: "Sacred Textile & Fiber Art",
    era: "Living Folk Tradition",
    periodDetail: "Centuries-old Persian-origin craft; preserved exclusively in Kutch for over 300 years",
    artMovement: "Castor-Oil Thread Painting & Rathwa Tribal Murals",
    badgeColor: "#C026D3",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Rogan-art-Tree-of-Life-Abdul-Gafur-Khatri-29-12-2013.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Rogan-art-Tree-of-Life-Abdul-Gafur-Khatri-29-12-2013.jpg?width=1000",
            "caption": "Rogan Art Tree of Life by Abdul Gafur Khatri"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Rogan_painting.jpg?width=800",
            "caption": "Rogan painting detail, Kutch"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Ashish_shantilal_kansara_rogan_art_2.jpg?width=800",
            "caption": "Rogan art in progress"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Nirmika_Rogan_Art.jpg?width=800",
            "caption": "Rogan art fabric painting"
      }
],
    culturalSignificance: "Historically used for bridal ghagras (skirts) and odhanis among pastoral Maldhari women. Pithora paintings in eastern Gujarat are animist thanksgiving rituals performed by the Rathwa community to honor the celestial wedding of Baba Pithora.",
    creationProcess: [
      {
            "step": 1,
            "title": "Castor Oil Boiling",
            "desc": "Locally pressed castor oil is boiled outdoors in iron pots for over 48 hours until it turns into a thick elastic resinous gel."
      },
      {
            "step": 2,
            "title": "Pigment Mixing & Palm Kneading",
            "desc": "Small chunks of the boiled oil are kneaded in the artist's palm with powdered stone colors and binding oils."
      },
      {
            "step": 3,
            "title": "Thread Drawing in Mid-Air",
            "desc": "Using a blunt 6-inch iron stylus, the artisan stretches the paste into thin threads, guiding them onto the fabric without touching the cloth."
      },
      {
            "step": 4,
            "title": "Mirror Symmetry Folding",
            "desc": "The fabric is folded in half while the paint is wet to press an exact mirror image onto the opposite side."
      }
],
    summary: "A rare textile art where boiled castor oil is transformed into a viscous paste, mixed with mineral pigments, and spun into delicate trailing threads with a metal stylus to adorn fabric.",
    historicalContext: "Practiced exclusively by the Khatri Muslim family in the village of Nirona in Kutch. It gained international prominence when Indian Prime Minister Narendra Modi presented a Rogan Tree of Life to US President Barack Obama in 2014.",
    geographicSpread: "Preserved in the arid Rann of Kutch; related Pithora tribal ritual murals flourish across the Rathwa tribal belt of Chhota Udaipur.",
    techniquesAndPigments: "Castor oil is boiled outdoors for two continuous days into gelatinous rogan, kneaded on palms with earth pigments, and drawn freehand on cloth using a 6-inch iron rod.",
    keyMotifs: ["Tree of Life with swirling branches and peacocks", "Phool (floral medallions) and geometric border friezes", "Sacred horses of Baba Pithora (in Rathwa art)", "Dancing village maidens with earthen pots"],
    masterArtists: ["Abdul Gafur Khatri (Padma Shri 2019)", "Sumar Daud Khatri", "Paresh Rathwa (Padma Shri 2023 for Pithora)"]
  },
  {
    id: "haryana",
    title: "Sanjhi Folk Wall & Stencil Art",
    nativeName: "सांझी लोक कला",
    state: "Haryana",
    isUT: false,
    region: "Rohtak, Kurukshetra & Jhajjar",
    coordinates: [29.9695, 76.8783],
    category: "Folk & Tribal",
    era: "Living Folk Tradition",
    periodDetail: "Ancient agrarian harvest tradition; celebrated during autumn Navratri",
    artMovement: "Agrarian Folk Clay Sculpture & Paper-Cut Stencil Art",
    badgeColor: "#F59E0B",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/%E0%A4%AE%E0%A5%8D%E0%A4%B9%E0%A4%BE%E0%A4%B0%E0%A5%80_%E0%A4%B8%E0%A4%BE%E0%A4%82%E0%A4%9D%E0%A5%80_%E0%A4%AE%E0%A4%BE%E0%A4%A4%E0%A4%BE.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E0%A4%AE%E0%A5%8D%E0%A4%B9%E0%A4%BE%E0%A4%B0%E0%A5%80_%E0%A4%B8%E0%A4%BE%E0%A4%82%E0%A4%9D%E0%A5%80_%E0%A4%AE%E0%A4%BE%E0%A4%A4%E0%A4%BE.jpg?width=1000",
            "caption": "Sanjhi Mata folk stencil art"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Rain_Dance_A_performer_at_%27Surajkund_Crafts_Mela_2011%27%2C_Faridabad.jpg?width=800",
            "caption": "Surajkund Crafts Mela, Haryana"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Surajkund_mela.jpg?width=800",
            "caption": "Folk artisans at Surajkund Crafts Mela"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/The_Vice_President%2C_Shri_Mohd._Hamid_Ansari_at_the_24th_Surajkund_Crafts_Mela%2C_in_Surajkund%2C_Haryana_on_February_01%2C_2010.jpg?width=800",
            "caption": "Surajkund International Crafts Mela, Haryana"
      }
],
    culturalSignificance: "Celebrates maternal benevolence, harvest prosperity, and the protection of young unmarried girls. Every evening of Navratri, village girls gather before the wall with oil lamps to sing songs asking Sanjhi Mata for blessings.",
    creationProcess: [
      {
            "step": 1,
            "title": "Cow Dung Base Layer",
            "desc": "The mud wall outside the home is plastered with a fresh coat of cow dung and yellow clay to form a sanctified canvas."
      },
      {
            "step": 2,
            "title": "Clay Figurine Sculpting",
            "desc": "Small pellets of pliant clay are shaped by hand into the face, torso, arms, crown, and jewelry of Goddess Sanjhi."
      },
      {
            "step": 3,
            "title": "Mirror & Star Inlay",
            "desc": "Pieces of reflective mirrors (tiklis), glass bangles, and star shapes are pressed into the soft clay ornaments."
      },
      {
            "step": 4,
            "title": "Chalk Painting & Immersion",
            "desc": "Painted with lime white and vermilion. On Dussehra, the clay image is carefully removed and immersed in local village ponds."
      }
],
    summary: "Ritual folk art crafted on outer walls during the nine days of Dussehra/Navratri using hand-molded clay figurines and paper cut-work representing Mother Goddess Sanjhi.",
    historicalContext: "Rural women and young girls create images of Goddess Sanjhi on village walls using clay lumps pressed with shells, mirrors, and star ornaments, singing devotional folk hymns every evening.",
    geographicSpread: "Cultivated across rural Haryana, western Uttar Pradesh, and the Braj cultural region.",
    techniquesAndPigments: "Clay molded into geometric discs and human features, dried, and coated with chalk white and geru (red ochre). In urban Braj regions, it evolved into delicate paper stencil patterns for flower petals on water.",
    keyMotifs: ["Goddess Sanjhi with crowned head and star jewelry", "Sun, Moon, and celestial stars in clay relief", "Peacocks, parrots, and sacred cows", "Floral temple gateways"],
    masterArtists: ["Rural Women's Folk Collectives of Rohtak", "Sumitra Devi of Kurukshetra"]
  },
  {
    id: "himachal_pradesh",
    title: "Kangra & Pahari Miniature Painting",
    nativeName: "कांगड़ा चित्रकला",
    state: "Himachal Pradesh",
    isUT: false,
    region: "Kangra Valley, Dharamshala & Haripur-Guler",
    coordinates: [32.0998, 76.2691],
    category: "Miniature & Panel Painting",
    era: "Royal & Courtly",
    periodDetail: "Late 18th – Early 19th Century (Golden Age of Raja Sansar Chand)",
    artMovement: "Pahari Romantic Devotional Miniature School",
    badgeColor: "#9333EA",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Radha_Krishna%2C_19th_century_CE%2C_Kangra_School_of_Art%2C_Museum_of_Kangra_Art%2C_Dharamshala.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Radha_Krishna%2C_19th_century_CE%2C_Kangra_School_of_Art%2C_Museum_of_Kangra_Art%2C_Dharamshala.jpg?width=1000",
            "caption": "Radha-Krishna, Kangra School miniature, 19th century"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kangra_painting_of_a_darbar_%28court%29_scene_with_Sansar_Chand_of_Kangra_and_Jai_Singh_Kanhaiya%2C_circa_18th_or_19th_century.webp?width=800",
            "caption": "Kangra court/darbar scene miniature"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Painting_of_Raja_Govardhan_Chand_of_Guler%2C_Kangra._He_ruled_Guler_state_from_1730%E2%80%931741.jpg?width=800",
            "caption": "Pahari miniature of Raja Govardhan Chand, Guler-Kangra"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Painting_of_Ranbir_Chand_and_Pramod_Chand%2C_grandsons_of_Sansar_Chand._Kangra%2C_ca.1838.jpg?width=800",
            "caption": "Kangra miniature portrait, circa 1838"
      }
],
    culturalSignificance: "Kangra art is visual Vaishnavite poetry. It visualizes the Sanskrit poetry of Jayadeva's Gita Govinda and Bihari's Satsai, elevating human romantic longing into a metaphor for the soul's divine yearning for God.",
    creationProcess: [
      {
            "step": 1,
            "title": "Wasli Paper Preparation",
            "desc": "Sheets of handmade Sialkoti paper are laminated together with starch paste and burnished with a smooth agate stone until glossy."
      },
      {
            "step": 2,
            "title": "Red Inking & White Priming",
            "desc": "The initial drawing is made with light red ink, then covered with a translucent white coat (khadiya) to seal the underdrawing."
      },
      {
            "step": 3,
            "title": "Pigment Layering & Squirrel Brushes",
            "desc": "Natural colors ground from lapis lazuli, cinnabar, and malachite are applied using brushes fashioned from squirrel tail hairs."
      },
      {
            "step": 4,
            "title": "Gold Highlighting & Stone Burnishing",
            "desc": "Pure gold leaf wash is painted onto jewels and royal brocades, then burnished on the reverse to lock the colors."
      }
],
    summary: "The pinnacle of lyrical romanticism in Indian miniature art, characterized by tender poetic depictions of Radha and Krishna amidst lush green Himalayan landscapes.",
    historicalContext: "Fleeing the 1739 sack of Delhi by Nadir Shah, Mughal court artists brought refined draftsmanship into the hills, where royal patronage in Guler and Kangra birthed an intensely devotional school.",
    geographicSpread: "Encompassed Kangra, Guler, Basohli, Chamba, and Mandi, influencing classical aesthetics across northern India.",
    techniquesAndPigments: "Drawn on burnished handmade Sialkoti paper (wasli) using single-hair squirrel brushes. Colors from crushed stones (lapis lazuli, malachite), vermilion, and pure gold wash.",
    keyMotifs: ["Gita Govinda and Bhagavata Purana pastoral scenes", "Ashta-Nayika (The Eight Emotional Heroines of love)", "Radha and Krishna under blossoming flowering creepers", "Soft, rhythmic feminine profiles with long almond eyes"],
    masterArtists: ["Nainsukh of Guler (Master genius of Pahari art)", "Manaku (Elder brother of Nainsukh)", "Fattu and Khushala", "Vijay Sharma (Padma Shri 2012)"]
  },
  {
    id: "jharkhand",
    title: "Sohrai & Khovar Tribal Murals",
    nativeName: "सोहराई एवं कोहबर चित्रकला",
    state: "Jharkhand",
    isUT: false,
    region: "Hazaribagh & Chotanagpur Plateau",
    coordinates: [23.9925, 85.3637],
    category: "Folk & Tribal",
    era: "Prehistoric & Ancient",
    periodDetail: "Traced to Meso-Chalcolithic rock art (10,000 BCE); GI tagged in 2020",
    artMovement: "Indigenous Tribal Matriarchal Wall Art",
    badgeColor: "#15803D",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Sohrai_painting%2C_Jharkhand.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sohrai_painting%2C_Jharkhand.jpg?width=1000",
            "caption": "Sohrai mural painting, Jharkhand"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Basic_shapes_in_Sohrai_Painting.jpg?width=800",
            "caption": "Sohrai painting motifs and shapes"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Flowery_design_2_in_Sohrai_Painting.jpg?width=800",
            "caption": "Floral Sohrai design detail"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sohrai_Flowery_Design_1.jpg?width=800",
            "caption": "Sohrai wall art floral pattern"
      }
],
    culturalSignificance: "Represents an unbroken continuity of Paleolithic rock art traditions. Khovar is an intimate bridal chamber blessing invoking ancestral fertility, while Sohrai honors cattle, forest ecology, and wild animal spirits after the paddy harvest.",
    creationProcess: [
      {
            "step": 1,
            "title": "Black Manganese Wall Base",
            "desc": "Mud walls are first coated with an underlayer of wet dark manganese-rich black clay (kali matti)."
      },
      {
            "step": 2,
            "title": "White Kaolin Mud Application",
            "desc": "While wet, a smooth layer of creamy white kaolin earth (dudhi matti) is smeared over the dark base."
      },
      {
            "step": 3,
            "title": "Comb-Cutting Sgraffito",
            "desc": "Women use broken plastic or horn combs and four fingers to swiftly scrape through the white layer, exposing the black background."
      },
      {
            "step": 4,
            "title": "Chewed Twig Detailing",
            "desc": "Chewed neem or datun twigs are used to paint yellow ochre (nagri matti) accents on horns, eyes, and birds."
      }
],
    summary: "Sacred earthen wall art created by Santhal, Munda, and Oraon women; Khovar celebrates marriage chambers with comb-cutting sgraffito, while Sohrai celebrates harvest with painted wildlife.",
    historicalContext: "Practiced on the mud walls of forest cottages during winter harvest festivals. Researched and brought to global acclaim by conservationist Bulu Imam through the Sanskriti Centre.",
    geographicSpread: "The dense forested hills and tribal villages of Hazaribagh in the Chotanagpur plateau.",
    techniquesAndPigments: "Mud walls coated with dark manganese clay, topped with creamy white kaolin earth (dudhi matti). While wet, broken combs and fingers scrape away the white to reveal dark silhouettes underneath.",
    keyMotifs: ["Pashupati (Horned Lord of Animals on an elephant)", "Pregnant deer, peacocks, tigers, and flying cranes", "Lotus buds and sacred banyan trees", "Stylized geometric chevron and wave lines"],
    masterArtists: ["Putli Devi", "Parvati Devi", "Maloti Devi", "Bulu Imam (Padma Shri 2019 - Reviver)"]
  },
  {
    id: "karnataka",
    title: "Chittara Murals & Mysore Gesso Art",
    nativeName: "ಚಿತ್ತಾರ ಕಲೆ ಮತ್ತು ಮೈಸೂರು ಸಾಂಪ್ರದಾಯಿಕ ಚಿತ್ರಕಲೆ",
    state: "Karnataka",
    isUT: false,
    region: "Shimoga, Sagara & Mysore",
    coordinates: [14.1670, 75.0333],
    category: "Folk & Tribal",
    era: "Classical & Medieval",
    periodDetail: "Chittara has ancient tribal roots; Mysore painting flourished under Wodeyars (1799–1868)",
    artMovement: "Deewaru Agrarian Folk Art & Mysore Royal Sacred Iconography",
    badgeColor: "#0891B2",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_Painting.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_Painting.jpg?width=1000",
            "caption": "Traditional Mysore gesso-gold painting"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_painting.jpg?width=800",
            "caption": "Mysore school painting with gold leaf relief"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Ganjifa_in_making.jpg?width=800",
            "caption": "Ganjifa hand-painted playing cards craft, Mysore"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kamadhenu_and_a_Brahmin_%286125146576%29.jpg?width=800",
            "caption": "Traditional Mysore-style religious painting"
      }
],
    culturalSignificance: "Chittara folk murals celebrate the life cycle, agrarian blessings, and maternal lineage of the Deewaru community. Mysore traditional gesso paintings adorned royal assembly halls (durbar) and household puja sanctuaries.",
    creationProcess: [
      {
            "step": 1,
            "title": "Wood Base & Fabric Mounting",
            "desc": "Seasoned teakwood or jackfruit planks are wrapped with cotton cloth treated with tamarind paste and zinc oxide primer."
      },
      {
            "step": 2,
            "title": "Gesso Relief Sculpting",
            "desc": "A paste of chalk powder, zinc white, and pure Arabic gum is piped onto jewelry and architectural arches to create subtle low relief."
      },
      {
            "step": 3,
            "title": "Gold Foil Burnishing",
            "desc": "Genuine 24K gold foil is gently laid over the embossed relief and pressed into place with an agate stone."
      },
      {
            "step": 4,
            "title": "Water Color Finishing",
            "desc": "The divine figures are delicately painted with soft watercolors and outlined in rich lampblack."
      }
],
    summary: "Features two distinct treasures: Chittara geometric folk murals created with chewed jute brushes by Deewaru women, and royal Mysore paintings noted for subtle gesso relief and 24K gold foil.",
    historicalContext: "Chittara paintings celebrate rural domestic rituals, weddings, and harvest in the Malnad region. Mysore painting was heavily patronized by Raja Wodeyar and Mummadi Krishnaraja Wodeyar in royal courts.",
    geographicSpread: "Malnad forest belt (Sagara, Soraba) for Chittara; Mysore palace ateliers for classical sacred panels.",
    techniquesAndPigments: "Chittara uses red mud, rice paste white, gurigi seed yellow, and soot black applied with coconut fiber. Mysore art uses teak planks, zinc oxide gesso relief, and genuine gold leaf.",
    keyMotifs: ["Chittara: Sacred marriage mandapa, birds, farming scenes", "Mysore: Chamundeshwari, Rama Pattabhisheka, Ambari procession", "Delicate gesso borders with embossed pearl work"],
    masterArtists: ["Radha Sullur (Chittara master)", "G. Subramanyam (Mysore traditional artist)", "M. Ramanarasaiah"]
  },
  {
    id: "kerala",
    title: "Kerala Temple Murals (Panchavarna)",
    nativeName: "കേരള ചുമർചിത്രങ്ങൾ",
    state: "Kerala",
    isUT: false,
    region: "Thrissur, Padmanabhapuram & Mattancherry",
    coordinates: [10.5276, 76.2144],
    category: "Cave Murals & Frescoes",
    era: "Classical & Medieval",
    periodDetail: "9th – 18th Century CE (Golden era under Venad and Cochin royalty)",
    artMovement: "Panchavarna Sacred Temple Mural Tradition",
    badgeColor: "#16A34A",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Kerala_Mural.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kerala_Mural.jpg?width=1000",
            "caption": "Kerala Panchavarna temple mural"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kerala_Mural_Painting_on_Set_Mundu.jpg?width=800",
            "caption": "Kerala mural painting applied to textile"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kalyana_bhavanam_mural_painting.jpg?width=800",
            "caption": "Kalyana Bhavanam mural, Kerala temple art"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Description_of_Gajendra_Moksham_mural_-_Krishnapuram_Palace%2C_Kayamkulam%2C_Alappuzha_District%2C_Kerala_State%2C_India.jpg?width=800",
            "caption": "Gajendra Moksham mural, Krishnapuram Palace"
      }
],
    culturalSignificance: "Adorns the walls of royal palaces and temple sanctums, synthesizing Shaivite and Vaishnavite devotion with the expressive facial dynamics of Kathakali and Theyyam ritual theater.",
    creationProcess: [
      {
            "step": 1,
            "title": "Lime & Coconut Water Plaster",
            "desc": "Walls are prepared with three coats of lime plaster mixed with sand and fermented tender coconut water, aged for months."
      },
      {
            "step": 2,
            "title": "Yellow Ochre Underdrawing",
            "desc": "Figures are sketched with yellow dungi stone according to the strict proportional guidelines of Dhyana Slokas."
      },
      {
            "step": 3,
            "title": "Panchavarna Pigment Filling",
            "desc": "Only five sacred colors are applied: yellow, red, green, black, and white, derived from minerals and leaves."
      },
      {
            "step": 4,
            "title": "Pine Resin Glazing",
            "desc": "The completed mural is sealed with a light coat of pine resin (marachekan) to protect it from humid tropical monsoons."
      }
],
    summary: "Monumental, dynamic tempera frescoes covering the inner sanctum walls of Kerala temples and palaces, painted using strictly five sacred natural colors with sinuous curves and rich emotional expressions.",
    historicalContext: "Adorning world-renowned monuments like the Padmanabhapuram Palace and Mattancherry Palace. Guided by the classical Sanskrit treatise 'Chitrasutra', artists portray divine episodes with dramatic energy akin to Kathakali dance.",
    geographicSpread: "Throughout temple sanctums across Kerala from Trichur and Kottayam down to Kanyakumari.",
    techniquesAndPigments: "Plaster made of lime and tender coconut water. Only five natural pigments (Panchavarna) are used: red (laterite), yellow (orpiment), green (glauconite leaves), black (lamp oil soot), and white (lime).",
    keyMotifs: ["Ananthashayanam (Lord Vishnu reclining on serpent Shesha)", "Rudra Shiva in fierce cosmic dance", "Gajendra Moksham (Liberation of the Elephant King)", "Dramatic three-dimensional facial expressions with wide eyes"],
    masterArtists: ["Mammiyoor Krishnankutty Nair (Revivalist & Founder of Guruvayur Mural Institute)", "K. K. Warrier", "Prince Rama Varma"]
  },
  {
    id: "madhya_pradesh",
    title: "Gond Art (Pardhan Gond Tradition)",
    nativeName: "गोंड चित्रकला",
    state: "Madhya Pradesh",
    isUT: false,
    region: "Dindori, Patangarh & Mandla",
    coordinates: [22.9467, 81.0805],
    category: "Folk & Tribal",
    era: "Living Folk Tradition",
    periodDetail: "Ancient animist roots; revolutionized in the 1980s into a global contemporary art form",
    artMovement: "Jangarh Kalam (Contemporary Indigenous Visionary Art)",
    badgeColor: "#10B981",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/2015.2.24_Durga_Bai_Gond.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/2015.2.24_Durga_Bai_Gond.jpg?width=1000",
            "caption": "Gond painting by master artist Durga Bai"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Gond_Painting.JPG?width=800",
            "caption": "Traditional Gond tribal painting"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Gond_Painting_of_MP1.JPG?width=800",
            "caption": "Gond art from Madhya Pradesh"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Gond_Dance_-Traditional_Tribal_Dance_of_India_014.jpg?width=800",
            "caption": "Gond community traditional dance, Madhya Pradesh"
      }
],
    culturalSignificance: "Gonds believe that viewing and creating beautiful sacred art brings good fortune. Each artist's unique dot-and-line signature is like their artistic fingerprint, representing their individual connection to Bada Dev and forest spirits.",
    creationProcess: [
      {
            "step": 1,
            "title": "Silhouette Inking",
            "desc": "The artist visualizes the mythical beast or tree and draws a bold flowing outline directly onto paper or canvas."
      },
      {
            "step": 2,
            "title": "Flat Color Undercoat",
            "desc": "The inner zone of the creature is painted with a luminous base color using acrylic or organic vegetable wash."
      },
      {
            "step": 3,
            "title": "Signature Texture Infilling",
            "desc": "Using fine 0.1 nib pens, the artist's personal pattern (dots, droplets, herringbone, or scales) is repeated rhythmically."
      },
      {
            "step": 4,
            "title": "Cosmic Spirit Eyes",
            "desc": "Expressive eyes and spirit horns are inked last, symbolically giving life and breath to the creature."
      }
],
    summary: "Vibrant tribal art created by the Pardhan Gonds, distinguished by each artist's unique signature textural pattern of dots, dashes, and scales that breathes life into sacred forest myths.",
    historicalContext: "The Pardhan Gonds were traditional bards who sang genealogies. In 1981, artist J. Swaminathan discovered young Jangarh Singh Shyam painting on village mud walls, launching the famous 'Jangarh Kalam' movement.",
    geographicSpread: "The Narmada valley forests of eastern Madhya Pradesh, now globally recognized in premier art galleries from Tokyo to Paris.",
    techniquesAndPigments: "Drawn with fine ink pens and bright pigments on paper and canvas. Patterns of intricate dots, dashes, fish scales, and droplets fill the silhouettes of animals and spirits.",
    keyMotifs: ["Sacred Mahua Tree and Saja Tree of Bada Dev", "Flying peacocks, multi-horned deer, and river creatures", "The Bana (three-stringed tribal violin)", "Cosmic creation legends of Mother Earth on a giant turtle"],
    masterArtists: ["Jangarh Singh Shyam (Visionary pioneer)", "Bhajju Shyam (Padma Shri 2018)", "Venkat Raman Singh Shyam", "Durga Bai Vyam (Padma Shri 2022)"]
  },
  {
    id: "maharashtra",
    title: "Warli Tribal Wall Painting",
    nativeName: "वारली चित्रकला",
    state: "Maharashtra",
    isUT: false,
    region: "Palghar, Dahanu & Thane Sahyadri Ranges",
    coordinates: [19.6967, 72.7699],
    category: "Folk & Tribal",
    era: "Prehistoric & Ancient",
    periodDetail: "Rooted in Neolithic traditions (2500–3000 BCE); living continuity",
    artMovement: "Indigenous Tribal Animism & Harvest Ritual Murals",
    badgeColor: "#E11D48",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Warli_art_on_a_house_wall_at_Sanjay_Gandhi_National_Park.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Warli_art_on_a_house_wall_at_Sanjay_Gandhi_National_Park.jpg?width=1000",
            "caption": "Warli mural on a village house wall"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Warli_art_at_Borivali_Stn_01.jpg?width=800",
            "caption": "Warli tribal wall painting"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Warli_art_at_Borivali_Stn_02.jpg?width=800",
            "caption": "Warli figures depicting daily rural life"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Warli_art_at_Borivali_Stn_03.jpg?width=800",
            "caption": "Warli geometric ritual art"
      }
],
    culturalSignificance: "Celebrates the cosmic circle of life and harmonious coexistence with nature. The Tarpa circle dance reflects the non-hierarchical, egalitarian communal bonds of the Warli tribe, moving together in rhythm with nature.",
    creationProcess: [
      {
            "step": 1,
            "title": "Mud & Geru Wall Coating",
            "desc": "Bamboo hut walls are coated with red laterite clay (geru) mixed with cow dung to create a warm rustic background."
      },
      {
            "step": 2,
            "title": "Rice Paste Preparation",
            "desc": "White rice is soaked in water, ground on stone into a fine smooth slurry, and bound with natural acacia gum."
      },
      {
            "step": 3,
            "title": "Chewed Bamboo Twig Pen",
            "desc": "A fresh bamboo twig is cut and chewed at the tip to soften its fibers into a natural resilient brush."
      },
      {
            "step": 4,
            "title": "Geometric Figure Drawing",
            "desc": "Two triangles joined at the tips form human torsos, animated into dancing lines without any preliminary sketching."
      }
],
    summary: "A pure, rhythmic tribal idiom that uses elementary geometric vocabulary—circle, triangle, and square—derived from direct observation of the cosmos to celebrate community harmony and mother nature.",
    historicalContext: "Created on the reddish-brown mud walls of village huts during weddings and harvest festivals. The legend Jivya Soma Mashe brought Warli from domestic mud walls to international art galleries.",
    geographicSpread: "Northern Sahyadri ranges in Palghar and Thane, extending into southern Gujarat.",
    techniquesAndPigments: "Walls smeared with cow dung and red clay (geru). Paint made of pounded rice paste mixed with water and binding gum, applied using chewed bamboo sticks.",
    keyMotifs: ["Tarpa Dance: Spiral circle of dancers holding hands around the wind trumpeter", "Palaghata (Fertility Goddess inside a sacred square)", "Opposed triangles meeting at the apex symbolizing cosmic balance", "Scenes of farming, hunting, and birds perched on trees"],
    masterArtists: ["Jivya Soma Mashe (Padma Shri 2011 - Global Father of Warli)", "Balu Mashe", "Sadashiv Mashe", "Amit Dombhare"]
  },
  {
    id: "manipur",
    title: "Subika Manuscript Painting & Meitei Art",
    nativeName: "ꯁꯨꯕꯤꯀꯥ ꯂꯥꯏꯔꯤꯛ ꯃꯤꯇꯩ ꯀꯂꯥ",
    state: "Manipur",
    isUT: false,
    region: "Imphal Valley & Andro",
    coordinates: [24.8170, 93.9368],
    category: "Miniature & Panel Painting",
    era: "Classical & Medieval",
    periodDetail: "15th–18th Century CE (During the reigns of Meitei Kings)",
    artMovement: "Meitei Illuminated Manuscript & Astrological Scroll Art",
    badgeColor: "#7C3AED",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Classical_Meitei_illuminated_manuscript_painting_%E2%80%94_depicting_a_%E2%80%9CPaphal%E2%80%9D_of_Khaba_serpentine_dragon_%E2%80%94_from_the_%E2%80%9CPakhangba_Lambuba%E2%80%9D%2C_an_Ancient_Meetei_language_text_%28engraved_in_traditional_Meetei_Mayek_writing_system%29.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Classical_Meitei_illuminated_manuscript_painting_%E2%80%94_depicting_a_%E2%80%9CPaphal%E2%80%9D_of_Khaba_serpentine_dragon_%E2%80%94_from_the_%E2%80%9CPakhangba_Lambuba%E2%80%9D%2C_an_Ancient_Meetei_language_text_%28engraved_in_traditional_Meetei_Mayek_writing_system%29.jpg?width=1000",
            "caption": "Classical Meitei manuscript painting, Pakhangba Lambuba"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Classical_Meitei_illuminated_manuscript_painting_%E2%80%94_depicting_a_%E2%80%9CPaphal%E2%80%9D_of_Khuman_serpentine_dragon_%E2%80%94_from_the_%E2%80%9CPakhangba_Lambuba%E2%80%9D%2C_an_Ancient_Meetei_language_text_%28engraved_in_traditional_Meetei_Mayek_writing_system%29.jpg?width=800",
            "caption": "Meitei illuminated manuscript, serpentine dragon motif"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Classical_Meitei_illuminated_manuscript_painting_%E2%80%94_depicting_a_%E2%80%9CPaphal%E2%80%9D_of_Luwang_dragon_%E2%80%94_from_the_%E2%80%9CPakhangba_Lambuba%E2%80%9D%2C_an_Ancient_Meetei_language_text_%28engraved_in_traditional_Meetei_Mayek_writing_system%29.jpg?width=800",
            "caption": "Meitei manuscript painting, Luwang dragon"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Classical_Meitei_illuminated_manuscript_painting_%E2%80%94_depicting_a_%E2%80%9CPaphal%E2%80%9D_of_Ningthouja_Pakhangba_dragon_%E2%80%94_from_the_%E2%80%9CPakhangba_Lambuba%E2%80%9D%2C_an_Ancient_Meetei_language_text_%28engraved_in_traditional_Meetei_Mayek_writing_system%29.jpg?width=800",
            "caption": "Meitei manuscript art, Pakhangba dragon motif"
      }
],
    culturalSignificance: "Subika manuscripts and Meitei art encode ancient cosmological lore, genealogy, and royal astrology. The sacred dragon Pakhangba is worshipped as the divine progenitor of the royal Ningthouja dynasty.",
    creationProcess: [
      {
            "step": 1,
            "title": "Agarwood Bark Harvesting",
            "desc": "Bark of the sacred Sahi tree is harvested, soaked, boiled, and smoothed with stones into durable parchment (Puyas)."
      },
      {
            "step": 2,
            "title": "Charcoal Astrological Grid",
            "desc": "Astrologer-scribes draw precise cosmological geometric grids to balance celestial houses and planetary alignments."
      },
      {
            "step": 3,
            "title": "Mineral Inking",
            "desc": "Outlines are painted using bird quill pens with inks made from lampblack, crushed river stones, and vermilion."
      },
      {
            "step": 4,
            "title": "Botanical Varnish Seal",
            "desc": "The manuscript leaves are coated with a protective orchid juice extract that resists insects and high humidity."
      }
],
    summary: "Rare and sacred illuminated manuscripts painted on indigenous handmade agarwood bark paper (Puyas), depicting Meitei cosmological spirits, astrology, and mythical dragon beasts.",
    historicalContext: "Practiced by royal scribes and astrologers (Maibas) in Manipur courts. The Subika painting style illustrates the six vital manuscripts (Subika, Subika Achouba, Subika Laishaba) representing human destiny.",
    geographicSpread: "Centered in the Imphal Valley among hereditary Meitei craft communities.",
    techniquesAndPigments: "Painted on treated bark of the Sahi tree (Aquilaria agallocha), using inks made from lampblack, crushed river minerals, and orchid juices.",
    keyMotifs: ["Pakhangba (The Primordial Horned Dragon deity of Manipur)", "Astrological cosmic grids and planetary spirits", "Meitei warriors performing Thang-Ta martial poses", "Sacred flora of the Loktak Lake and floating phumdis"],
    masterArtists: ["Oinam Ibochouba Meitei", "Khangembam Yaima", "M. Gourachandra"]
  },
  {
    id: "meghalaya",
    title: "Khasi & Garo Bamboo Craft & Cane Art",
    nativeName: "Khasi & Garo Indigenous Crafts",
    state: "Meghalaya",
    isUT: false,
    region: "Shillong, Cherrapunji & Garo Hills",
    coordinates: [25.5788, 91.8933],
    category: "Folk & Tribal",
    era: "Living Folk Tradition",
    periodDetail: "Indigenous tribal ancestral traditions spanning centuries",
    artMovement: "Living Organic Cane Architecture & Eri Silk Fiber Art",
    badgeColor: "#059669",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Kasi_handicrafts.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kasi_handicrafts.jpg?width=1000",
            "caption": "Khasi bamboo and cane handicrafts"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Living_root_bridge%2C_Maghalaya%2C_India1.jpg?width=800",
            "caption": "Living root bridge, traditional Khasi engineering craft"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Living_root_bridge%2C_Maghalaya%2C_India2.jpg?width=800",
            "caption": "Khasi living root bridge, Meghalaya"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Living_root_bridge%2C_Maghalaya%2C_India3.jpg?width=800",
            "caption": "Cane and root craftsmanship, Meghalaya"
      }
],
    culturalSignificance: "Showcases the profound ecological harmony of the matrilineal Khasi, Jaintia, and Garo clans. Crafting items from bamboo and Ahimsa eri silk is an ancestral expression of respect for sacred groves (Law Kyntang).",
    creationProcess: [
      {
            "step": 1,
            "title": "Bamboo Curing in Water & Smoke",
            "desc": "Fresh bamboo is submerged in running streams for three weeks to remove sugars, then smoke-cured above hearths."
      },
      {
            "step": 2,
            "title": "Micro-Splitting (Slivers)",
            "desc": "Artisans use sharp machetes (dao) to shave bamboo into paper-thin, flexible strands of uniform width."
      },
      {
            "step": 3,
            "title": "Hexagonal & Twill Weaving",
            "desc": "Strands are woven into interlocking geometric grids, waterproofed by sandwiching broad forest leaves between layers."
      },
      {
            "step": 4,
            "title": "Natural Wood Oil Polish",
            "desc": "Finished baskets and musical instruments are rubbed with wild walnut oil for a lustrous natural patina."
      }
],
    summary: "Exceptional organic artistry spanning intricate cane and bamboo weaves (Knup rain shields), tribal wooden carvings, and Ahimsa Ryndia (Eri) silk dyed with forest plants.",
    historicalContext: "The matrilineal Khasi, Jaintia, and Garo communities live in one of the wettest regions on earth. Their artistic genius is evident in functional rain shields, musical Duitara lutes, and Living Root Bridges.",
    geographicSpread: "Spans the Khasi, Jaintia, and Garo hill ranges of Meghalaya.",
    techniquesAndPigments: "Fine bamboo splints cured in water and smoke; textiles woven on traditional waist-looms and colored with natural madder, wild turmeric, and iron-rich river mud.",
    keyMotifs: ["Knup (Leaf and bamboo hexagonal rain shield)", "Duitara (Four-stringed fretted wooden folk lute)", "Geometric diamond weaving on Ryndia shawls", "Carved wooden hornbill motifs on Garo Nokmong council houses"],
    masterArtists: ["Bah Rolang Kharkongor", "Smti Silbi Passah", "Kong Trisila Syiem"]
  },
  {
    id: "mizoram",
    title: "Mizo Puan Weaving & Bamboo Craft",
    nativeName: "Mizo Puan Zai",
    state: "Mizoram",
    isUT: false,
    region: "Aizawl & Thenzawl",
    coordinates: [23.7271, 92.7176],
    category: "Sacred Textile & Fiber Art",
    era: "Living Folk Tradition",
    periodDetail: "Unbroken ancestral textile tradition; multiple GI tags granted in 2019",
    artMovement: "Indigenous Geometric Ceremonial Loom Weaving",
    badgeColor: "#DB2777",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/The_President%2C_Smt._Pratibha_Devisingh_Patil_visited_the_Handloom_%26_Handicrafts_exhibition_at_Aizawl%2C_Mizoram_on_September_23%2C_2010.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/The_President%2C_Smt._Pratibha_Devisingh_Patil_visited_the_Handloom_%26_Handicrafts_exhibition_at_Aizawl%2C_Mizoram_on_September_23%2C_2010.jpg?width=1000",
            "caption": "Mizo handloom and handicrafts exhibition, Aizawl"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/The_President%2C_Smt._Pratibha_Devisingh_Patil_visited_the_Handloom_%26_Handicrafts_exhibition_at_Aizawl%2C_Mizoram_on_September_23%2C_2010_%281%29.jpg?width=800",
            "caption": "Mizoram handloom weaving display"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/The_President%2C_Smt._Pratibha_Devisingh_Patil_visiting_the_Handloom_%26_Handicrafts_exhibition_at_Aizawl%2C_Mizoram_on_September_23%2C_2010.jpg?width=800",
            "caption": "Mizoram handicrafts and handloom exhibits"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/The_artists_performing_a_dance_%E2%80%98Cheraw_Kanpui%E2%80%99_during_the_inauguration_of_the_Chapchar_Kut_-2010_festivals_celebration%2C_in_Aizawl%2C_Mizoram_on_March_11%2C_2010.jpg?width=800",
            "caption": "Cheraw bamboo dance, Chapchar Kut festival"
      }
],
    culturalSignificance: "Puan handloom textiles are the visual identity of Mizo society. Historically, distinct patterns indicated bravery, clan standing, and marital honor, and remain central to all major festivals such as Chapchar Kut.",
    creationProcess: [
      {
            "step": 1,
            "title": "Loin-Loom Warping",
            "desc": "Cotton yarn is dyed with wild madder roots and forest indigo, then stretched on backstrap loin looms."
      },
      {
            "step": 2,
            "title": "Tension Control via Weaver's Body",
            "desc": "The weaver secures the backstrap around her waist, using her body weight to maintain precise warp tension."
      },
      {
            "step": 3,
            "title": "Extra-Weft Insertion",
            "desc": "Geometric diamond and chevron motifs are woven by manually inserting dyed silk threads between warp sheds."
      },
      {
            "step": 4,
            "title": "Fringe Braiding & Steam Pressing",
            "desc": "Woven panels are matched along central seams and finished with hand-twisted fringes."
      }
],
    summary: "Vibrant traditional handloom textiles featuring crisp geometric patterns in black, white, and red; each Puan design carries profound ceremonial and societal prestige.",
    historicalContext: "Woven by women on traditional loin and frame looms. Masterpieces like the Puanchei (worn during the Cheraw bamboo dance) and Ngotekherh were historically reserved for brave chiefs.",
    geographicSpread: "Centered in Thenzawl (the handloom capital of Mizoram) and throughout the Mizo hills.",
    techniquesAndPigments: "Extra weft insertion technique on loin looms using dyed cotton and silk yarns, yielding intricate raised geometric embroidery-like motifs.",
    keyMotifs: ["Puanchei (vibrant horizontal stripes with diamond embroidery)", "Ngotekherh (black and white geometric checkerboard borders)", "Hmaram (small human figurines and mountain motifs)", "Bamboo hats (Khumbeu) woven with waterproof leaves"],
    masterArtists: ["Lalbiakthangi (Thenzawl Guild Master)", "Zothanpuii", "Pi Ropiangi"]
  },
  {
    id: "nagaland",
    title: "Naga Woodcarving & Warrior Shawls",
    nativeName: "Naga Morung Crafts",
    state: "Nagaland",
    isUT: false,
    region: "Kohima, Mon & Mokokchung",
    coordinates: [25.6751, 94.1086],
    category: "Metal, Stone & Sculpture",
    era: "Living Folk Tradition",
    periodDetail: "Centuries-old warrior clan traditions of 16 major tribes",
    artMovement: "Tribal Warrior Morung Architecture & Symbolist Weaving",
    badgeColor: "#B91C1C",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Naga_handicraft.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Naga_handicraft.jpg?width=1000",
            "caption": "Naga tribal handicraft"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Red_Nagas_woodcarving.JPG?width=800",
            "caption": "Naga warrior woodcarving"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/021_Naga_Wood_Carving%2C_Pura_Sakenan%2C_Serangan%2C_Bali%2C_photograph_by_Anandajoti_Bhikkhu.jpg?width=800",
            "caption": "Naga-influenced wood carving craftsmanship"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Naga_Tribe_Traditional_Shawl.jpg?width=800",
            "caption": "Traditional Naga warrior shawl"
      }
],
    culturalSignificance: "Naga carvings on Morungs (youth dormitories) and warrior shawls celebrated clan defense, agricultural fertility, and ancestral courage. The mithun head symbolizes wealth, while hornbill feathers honor high social status.",
    creationProcess: [
      {
            "step": 1,
            "title": "Hardwood Log Selection",
            "desc": "Single mature logs of local teak or mahogany are chosen and sanctified by clan elders before felling."
      },
      {
            "step": 2,
            "title": "Rough Adze Heaving",
            "desc": "Craftsmen use curved hand adzes (dao) to quickly shape the primary anatomical contours of warriors and animals."
      },
      {
            "step": 3,
            "title": "Chisel Detailing",
            "desc": "Intricate horns, facial markings, and hornbill eyes are carved with narrow gouge chisels."
      },
      {
            "step": 4,
            "title": "Soot & Clay Pigment Buffing",
            "desc": "Surfaces are stained with lampblack, soot, and red clay, then smoked over hearths for permanence."
      }
],
    summary: "Bold, monumental wood sculpture carved on village youth dormitory pillars (Morung) and ceremonial warrior shawls (Tsungkotepsu) adorned with tiger and hornbill motifs.",
    historicalContext: "Every Naga tribe (Konyak, Ao, Angami, Sumi) has unique symbolic art. Sculptures honored clan valor and fertility; Konyak masters carved wooden headgear, masks, and gun butts with immense skill.",
    geographicSpread: "The high mountains of Nagaland, particularly Mon district (home to Konyaks) and Mokokchung (Ao tribe).",
    techniquesAndPigments: "Single tree trunks carved with adzes and chisels; textiles woven from wild nettle and cotton on backstrap looms and painted with natural dyes.",
    keyMotifs: ["Mithun head with curving horns (emblem of prosperity)", "Great Indian Hornbill feathers", "Tsungkotepsu warrior shawls painted with roosters, stars, and spears", "Human face masks with tattooed cheeks"],
    masterArtists: ["Chingwang Konyak (Master Woodcarver)", "Imtimangyang Ao", "Neituo Angami"]
  },
  {
    id: "odisha",
    title: "Pattachitra & Palm Leaf Engraving",
    nativeName: "ଓଡ଼ିଶା ପଟ୍ଟଚିତ୍ର",
    state: "Odisha",
    isUT: false,
    region: "Raghurajpur Heritage Crafts Village, Puri",
    coordinates: [19.8135, 85.8312],
    category: "Folk & Tribal",
    era: "Classical & Medieval",
    periodDetail: "12th Century CE onwards (Tied to the sacred Jagannath Temple at Puri)",
    artMovement: "Odishan Vaishnavite Temple Scroll Painting & Tala Pattachitra",
    badgeColor: "#059669",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Pattachitra_Painting_%2816419912954%29.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Pattachitra_Painting_%2816419912954%29.jpg?width=1000",
            "caption": "Odisha Pattachitra scroll painting"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Pattachitra_Painting_%2816419923734%29.jpg?width=800",
            "caption": "Traditional Pattachitra on cloth"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Pattachitra_Painting_%2817041543331%29.jpg?width=800",
            "caption": "Pattachitra mythological narrative panel"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Pattachitra_Painting_%2817042344385%29.jpg?width=800",
            "caption": "Pattachitra painting detail, Odisha"
      }
],
    culturalSignificance: "Pattachitra is deeply sacred to Lord Jagannath of Puri. The Chitrakara community has maintained this continuous ritual service for nearly a millennium, also preserving ancient palm-leaf engraving (Tala Pattachitra).",
    creationProcess: [
      {
            "step": 1,
            "title": "Canvas Gluing & Shell Burnishing",
            "desc": "Two layers of cotton cloth are pasted together with tamarind seed glue, coated with chalk powder, and polished with conch shells."
      },
      {
            "step": 2,
            "title": "Red Boundary Sketching",
            "desc": "Geometric border bands and deity figures are sketched directly in light red mineral ink without pencils."
      },
      {
            "step": 3,
            "title": "Stone Pigment Infilling",
            "desc": "Colors ground from conch shells (white), hingula stone (red), haritala (yellow), and lampblack are applied."
      },
      {
            "step": 4,
            "title": "Kala Lekha & Tree Lacquer Glaze",
            "desc": "Razor-sharp black outlines (Kala Lekha) are drawn with fine brushes, sealed under warm wild tree lacquer."
      }
],
    summary: "One of India's oldest living cloth scroll art traditions, famed for razor-sharp calligraphic borders, mythological Vaishnava iconography, and palm-leaf etchings (Talapatra).",
    historicalContext: "Created as temporary painted replacements ('Anasar Patti') when the sacred Jagannath idols are secluded for 15 days before the annual Ratha Yatra.",
    geographicSpread: "Raghurajpur (India's premier heritage crafts village) near Puri and throughout coastal Odisha.",
    techniquesAndPigments: "Canvas prepared with tamarind seed paste and white chalk, then burnished with sea shells. Pigments from conch shells (white), lamp soot (black), and hingula stone (red).",
    keyMotifs: ["Lord Jagannath, Balabhadra, and Subhadra triad", "Kaliya Dalan (Krishna defeating serpent Kaliya)", "Kanchi Abhijana expedition", "Tala Pattachitra: Etched palm leaves tied with silk threads"],
    masterArtists: ["Jagannath Mahapatra (President's Award)", "Gokul Bihari Pattanaik", "Rabindra Nath Sahu", "Niranjan Mohapatra"]
  },
  {
    id: "punjab",
    title: "Phulkari Embroidery & Sikh Murals",
    nativeName: "ਫੁਲਕਾਰੀ ਅਤੇ ਸਿੱਖ ਭਿੱਤੀ ਚਿੱਤਰਕਾਰੀ",
    state: "Punjab",
    isUT: false,
    region: "Patiala, Amritsar & Bathinda",
    coordinates: [30.3398, 76.3869],
    category: "Sacred Textile & Fiber Art",
    era: "Living Folk Tradition",
    periodDetail: "Documented since the 15th-century Heer Ranjha; murals flourished under Maharaja Ranjit Singh",
    artMovement: "Folk Geometrical Silk Embroidery & Lahore-Amritsar Sikh School",
    badgeColor: "#E11D48",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Embroidery_on_a_shawl_from_Punjab_01.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Embroidery_on_a_shawl_from_Punjab_01.jpg?width=1000",
            "caption": "Phulkari embroidery on a Punjabi shawl"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Embroidery_on_a_shawl_from_Punjab_05.jpg?width=800",
            "caption": "Detail of Phulkari floral embroidery"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Embroidery_on_a_shawl_from_Punjab_06.jpg?width=800",
            "caption": "Phulkari geometric embroidery pattern"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Embroidery_on_a_shawl_from_Punjab_07.jpg?width=800",
            "caption": "Traditional Punjabi Phulkari textile"
      }
],
    culturalSignificance: "Phulkari embodies familial love and generational blessing. When a baby girl is born, her grandmother begins embroidering a golden silk 'Bagh' (garden) that takes years to complete, presented as her wedding dowry heirloom.",
    creationProcess: [
      {
            "step": 1,
            "title": "Khaddar Fabric Sizing",
            "desc": "Coarse cotton khaddar is handspun on village charkhas and dyed in deep indigo, madder red, or ochre."
      },
      {
            "step": 2,
            "title": "Untwisted Silk Floss (Pat)",
            "desc": "Glossy unspun raw silk threads in vibrant yellows, oranges, and pinks are prepared."
      },
      {
            "step": 3,
            "title": "Counting Threads on Reverse",
            "desc": "Embroiderers work exclusively from the back of the cloth, counting threads by eye to create geometric patterns without drawing lines."
      },
      {
            "step": 4,
            "title": "Nazar Buti Ingot",
            "desc": "A tiny deliberate irregularity or contrasting stitch is left at one corner to ward off the evil eye."
      }
],
    summary: "Dazzling geometric silk needlework ('flower work') embroidered on coarse cotton khaddar by rural women, accompanied by historic gold-leaf frescoes seen in Sikh shrines and palaces.",
    historicalContext: "Historically, Punjabi grandmothers began embroidering a 'Bagh' (garden) when a granddaughter was born, gifting it on her wedding day. Sikh murals flourished across Qila Mubarak and Golden Temple pavilions.",
    geographicSpread: "Throughout the Malwa and Majha plains of Punjab, especially Patiala, Hoshiarpur, and Amritsar.",
    techniquesAndPigments: "Darning stitch executed entirely from the reverse of coarse indigo-dyed or madder-red khaddar using glossy untwisted silk floss (pat).",
    keyMotifs: ["Bagh (entire surface covered with golden silk)", "Chope & Subher (nuptial red phulkaris)", "Rolling waves, rolling dice, and marigold flower gardens", "Peacocks, horses, and village spinning wheels (Charkha)"],
    masterArtists: ["Lajwanti (Padma Shri 2023 for Phulkari revival)", "Bibi Parkash Kaur", "Gopinder Singh"]
  },
  {
    id: "rajasthan",
    title: "Pichwai & Phad Scroll Paintings",
    nativeName: "पिछवाई एवं फड़ चित्रकला",
    state: "Rajasthan",
    isUT: false,
    region: "Nathdwara & Bhilwara",
    coordinates: [24.9333, 73.8222],
    category: "Sacred Textile & Fiber Art",
    era: "Royal & Courtly",
    periodDetail: "17th Century CE onwards (Pushtimarg Vallabhacharya and nomadic Bhopa bards)",
    artMovement: "Nathdwara Temple Haveli Art & Rajasthani Bardic Mobile Scrolls",
    badgeColor: "#F59E0B",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Pichwai_by_unknown_Rajasthani_artist.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Pichwai_by_unknown_Rajasthani_artist.jpg?width=1000",
            "caption": "Pichwai painting, Rajasthan"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Pichwai_painting%2C_made_in_net%2C_National_Museum%2C_New_Delhi.jpg?width=800",
            "caption": "Net Pichwai painting, National Museum"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Stamp_of_India_-_1992_-_Colnect_164323_-_Phad_Scroll_Paintings_from_Rajasthan.jpeg?width=800",
            "caption": "Phad scroll painting, commemorative stamp"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Playful_Gifts_and_other_Gopi_Scenes%2C_%27pichwai%27_from_Golconda%2C_India%2C_late_17th_century%2C_dyed_cotton_with_polychrome_and_gold%2C_Honolulu_Academy_of_Arts.jpg?width=800",
            "caption": "17th-century Pichwai textile, Gopi scenes"
      }
],
    culturalSignificance: "Pichwais transform temple sanctums into heavenly Vrindavan for Shrinathji. Phad scrolls serve as traveling shrines for nomadic Bhopa bards who sing folklore through the night under desert stars.",
    creationProcess: [
      {
            "step": 1,
            "title": "Khadi Starching with Wheat Flour",
            "desc": "Woven khadi cloth is starched with wheat flour paste and burnished with a heavy mohra stone until smooth as paper."
      },
      {
            "step": 2,
            "title": "Charcoal Outline & Yellow Base",
            "desc": "Figures of deities and dancing gopis are sketched in charcoal and washed in light yellow stone pigment."
      },
      {
            "step": 3,
            "title": "Color Sequence Application",
            "desc": "Colors are applied in strict hierarchy: orange for bodies, yellow for clothing, green for nature, and red for architectural borders."
      },
      {
            "step": 4,
            "title": "Opening the Eyes (Aankh Kholna)",
            "desc": "The master artist paints the pupils of the deity's eyes last in a sacred ritual ceremony that awakens the painting."
      }
],
    summary: "Intricate devotional cloth hangings (Pichwai) celebrating Shrinathji amidst lotus ponds, paired with 30-foot portable mobile temple scrolls (Phad) sung at night by bardic singers.",
    historicalContext: "Pichwais adorn the sacred sanctum at Nathdwara, changing daily with seasons and festivals. Phad scrolls are worshipped as mobile temples by the nomadic pastoral Bhopa and Bhopi bards.",
    geographicSpread: "Mewar and Marwar regions of southern Rajasthan, centered in Nathdwara and Bhilwara/Shahpura.",
    techniquesAndPigments: "Khadi cotton cloth starched with wheat flour and burnished with agate stones. Natural pigments from crushed minerals and pure gold leaf embellishments.",
    keyMotifs: ["Shrinathji holding Mount Govardhan on his little finger", "Kamadhenu cows with sacred handprints", "Lotus ponds under full-moon skies (Sharad Purnima)", "Epic battles of folk deity Pabuji Rathore in Phad"],
    masterArtists: ["Shrilal Joshi (Padma Shri 2006 for Phad)", "Kalyan Joshi", "Dwarka Prasad Sharma", "Kalyanmal Sahu (Pichwai Master)"]
  },
  {
    id: "sikkim",
    title: "Sikkimese Buddhist Thangka Art",
    nativeName: "ཐང་ཀ།",
    state: "Sikkim",
    isUT: false,
    region: "Gangtok, Rumtek & Enchey",
    coordinates: [27.3389, 88.6065],
    category: "Ritual Sacred Art",
    era: "Classical & Medieval",
    periodDetail: "Flourished with the establishment of Namgyal Dynasty monasteries (1642 CE)",
    artMovement: "Tibetan-Sikkimese Mahayana Sacred Thangka Painting",
    badgeColor: "#D97706",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Thangka_at_Ralang_Monastery_sikkim.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Thangka_at_Ralang_Monastery_sikkim.jpg?width=1000",
            "caption": "Thangka at Ralang Monastery, Sikkim"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Thangkas_at_Ralang_Monastery.jpg?width=800",
            "caption": "Buddhist thangkas, Ralang Monastery"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Thanka_painting.jpg?width=800",
            "caption": "Sikkimese Buddhist thangka painting"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Trungkar_Tsechu_festival.jpg?width=800",
            "caption": "Tsechu festival, Sikkim monastery"
      }
],
    culturalSignificance: "Thangkas serve as sacred visual manuals for meditation inside Tibetan Buddhist monasteries (Gumpas). They embody the sacred geometry of enlightenment, guiding spiritual practitioners toward inner peace.",
    creationProcess: [
      {
            "step": 1,
            "title": "Silk Mounting & Chalk Gesso",
            "desc": "Linen canvas is stretched on a wooden frame, sized with yak-hide glue and white chalk, and polished with cowrie shells."
      },
      {
            "step": 2,
            "title": "Iconometric Grid Calculation",
            "desc": "Sacred mathematical proportions of the Buddha's face, hands, and lotus seat are drawn according to classical Tibetan texts."
      },
      {
            "step": 3,
            "title": "Precious Mineral Pigment Layering",
            "desc": "Pigments ground from lapis lazuli, cinnabar, malachite, and turquoise are layered in transparent washes."
      },
      {
            "step": 4,
            "title": "Pure Gold Detailing & Silk Brocade",
            "desc": "24K liquid gold is used for radiant robe rays, burnished with cat's-eye stone, and sewn into silk brocade frames."
      }
],
    summary: "Sacred scrolls portraying the Buddha, Medicine Buddhas, and Wheel of Life (Bhavachakra) painted with crushed precious stones and gold dust on silk brocades.",
    historicalContext: "Created as visual aids for meditation and teaching inside major monasteries like Rumtek and Pemayangtse. Every line conforms to sacred iconographic geometry defined in classical treatises.",
    geographicSpread: "Preserved across monasteries in East and West Sikkim, centered at the Directorate of Handicrafts and Handlooms in Gangtok.",
    techniquesAndPigments: "Linen or silk mounted on wooden frames, primed with lime and glue, polished smooth with conch shells. Colors from cinnabar, lapis lazuli, malachite, and 24K pure gold powder.",
    keyMotifs: ["Bhavachakra (Wheel of Cyclic Existence held by Yama)", "Green Tara and White Tara (Compassionate deities)", "Guru Padmasambhava with trident and skull cup", "Intricate gold filigree flame auras (Prabhavali)"],
    masterArtists: ["Khandu Wangchuk Bhutia (Padma Shri)", "Pemba Tshering Lepcha", "Tashi Bhutia"]
  },
  {
    id: "tamil_nadu",
    title: "Thanjavur (Tanjore) Painting & Chola Bronzes",
    nativeName: "தஞ்சாவூர் ஓவியம் மற்றும் சோழர் வெண்கலங்கள்",
    state: "Tamil Nadu",
    isUT: false,
    region: "Thanjavur, Kumbakonam & Swamimalai",
    coordinates: [10.7870, 79.1378],
    category: "Miniature & Panel Painting",
    era: "Royal & Courtly",
    periodDetail: "Bronzes: 9th–13th c. (Imperial Cholas); Paintings: 16th–18th c. (Nayakas & Maratha King Serfoji II)",
    artMovement: "Dravidian Lost-Wax Bronze Casting & Gesso Gold Leaf Panel Painting",
    badgeColor: "#B45309",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Natarajar_Tanjore_painting.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Natarajar_Tanjore_painting.jpg?width=1000",
            "caption": "Nataraja Tanjore painting with gold relief"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Gajalakshmi_in_Tanjore_Painting.png?width=800",
            "caption": "Gajalakshmi Tanjore painting"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Tanjore_Painting_Vinayaka_2.jpg?width=800",
            "caption": "Ganesha Tanjore painting"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Tanjore_Painting_Vinyaka.jpg?width=800",
            "caption": "Thanjavur painting with gemstone and gold foil work"
      }
],
    culturalSignificance: "Thanjavur paintings and Chola bronzes represent the zenith of South Indian temple arts. They brought the divine into visual reality, capturing cosmic philosophical concepts such as Shiva's cosmic dance (Ananda Tandava).",
    creationProcess: [
      {
            "step": 1,
            "title": "Teak Board & Cloth Laminate",
            "desc": "Seasoned teakwood planks are covered with cotton fabric glued with tamarind seed paste and chalk powder."
      },
      {
            "step": 2,
            "title": "Gesso Relief (Sukku)",
            "desc": "Chalk powder mixed with Arabic gum is sculpted into 3D high relief on pillars, jewelry, and ornate arches."
      },
      {
            "step": 3,
            "title": "Gold Leaf & Jaipur Stones",
            "desc": "Precious semi-precious gems and Jaipur cut-glass stones are placed into gesso, then overlaid with 22K genuine gold foil."
      },
      {
            "step": 4,
            "title": "Facial Inpainting & Framing",
            "desc": "Plump cherubic facial features are painted with soft tempera colors, sealed inside heavy teakwood glass frames."
      }
],
    summary: "Distinguished by sculptural 3D gesso relief overlaid with genuine 22K gold foil and embedded gems, accompanied by world-famous lost-wax Chola temple bronzes such as Shiva Nataraja.",
    historicalContext: "Flourished in the fertile Kaveri Delta under the Cholas, Vijayanagara Nayakas, and Maratha kings. Processional bronzes and golden wooden panels illuminated dark sanctums with divine radiance.",
    geographicSpread: "Centered in the heritage towns of Thanjavur, Swamimalai, and Kumbakonam in the Kaveri Delta.",
    techniquesAndPigments: "Paintings use teak boards, tamarind paste, Arabic gum gesso relief, 22K gold foil, and Jaipur glass stones. Bronzes use Panchaloha (five-metal alloy) in lost-wax clay molds.",
    keyMotifs: ["Bala Krishna (Navaneetha Krishna with butter pot)", "Gajalakshmi seated on lotus flanked by white elephants", "Shiva Nataraja dancing within an aura of flames", "Carved arches (Prabhavali) and scalloped curtain drapery"],
    masterArtists: ["Radhakrishna Sthapathi (Lost-Wax Bronze Master)", "Raju and Naidu Painter Guilds", "Master C. Rajagopal"]
  },
  {
    id: "telangana",
    title: "Cheriyal Scroll Painting & Nakashi Masks",
    nativeName: "చేర్యాల స్క్రోల్ పెయింటింగ్",
    state: "Telangana",
    isUT: false,
    region: "Cheriyal Village, Siddipet",
    coordinates: [17.9257, 78.9669],
    category: "Folk & Tribal",
    era: "Classical & Medieval",
    periodDetail: "15th Century CE onwards (Kakatiya and Qutb Shahi Periods; GI tagged)",
    artMovement: "Telangana Village Bardic Narrative (Nakashi Tradition)",
    badgeColor: "#7C3AED",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Cherial_1.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Cherial_1.jpg?width=1000",
            "caption": "Cheriyal scroll painting, Telangana"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Cherial_2.jpg?width=800",
            "caption": "Cheriyal Nakashi narrative scroll"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Cherial_4.jpg?width=800",
            "caption": "Cheriyal scroll painting detail"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Cherial_5.jpg?width=800",
            "caption": "Traditional Cheriyal art panel"
      }
],
    culturalSignificance: "Cheriyal scrolls and masks are the heart of Telangana's traditional village theater. Traveling bards recited folklore customized for various artisan castes, creating social harmony and moral education.",
    creationProcess: [
      {
            "step": 1,
            "title": "Khadi Canvas Sizing",
            "desc": "Khadi cloth is treated with a paste of tamarind seeds, white clay (shuddha matti), and tree gum, then dried."
      },
      {
            "step": 2,
            "title": "Scarlet Red Ground Wash",
            "desc": "The signature bright crimson background is painted across registers to highlight characters."
      },
      {
            "step": 3,
            "title": "Deity & Narrative Inking",
            "desc": "Figures of kings, farmers, demons, and gods are drawn in sharp three-quarter profile with natural stone pigments."
      },
      {
            "step": 4,
            "title": "Floral Creeper Framing",
            "desc": "Intricate continuous floral scroll borders frame each episode, which are rolled onto cylindrical wooden rollers."
      }
],
    summary: "Vibrant narrative scrolls on khadi cloth with glowing crimson backgrounds, accompanied by lightweight theatrical masks crafted from sawdust and tamarind seed paste.",
    historicalContext: "Created by the Nakashi community for travelling balladeers who unrolled these 40-50 foot scrolls in village courtyards to sing stories tailored to specific artisan castes.",
    geographicSpread: "Deccan plateau region of Telangana, centered in Siddipet district and Hyderabad.",
    techniquesAndPigments: "Khadi treated with tamarind seed paste, white mud, and tree gum. Pigments ground from red stone (hingula), yellow stone, and lamp soot. Masks molded from coconut shells and sawdust.",
    keyMotifs: ["Mahabharata and Markandeya Purana folklore episodes", "Vibrant scarlet red background panels", "Cheriyal character masks of village headman, bride, and demon", "Expressive figures drawn in crisp three-quarter profile"],
    masterArtists: ["D. Vaikuntam Nakash (National Awardee)", "D. Rakesh Nakash", "D. Venkataramana", "D. Dhanalaxmi"]
  },
  {
    id: "tripura",
    title: "Tripura Bamboo Sculpture & Rignai Weaving",
    nativeName: "ত্রিপুরার বাঁশ ও বেত শিল্প",
    state: "Tripura",
    isUT: false,
    region: "Agartala & Unakoti",
    coordinates: [23.8315, 91.2868],
    category: "Metal, Stone & Sculpture",
    era: "Living Folk Tradition",
    periodDetail: "Ancestral royal Manikya kingdom heritage & 7th–9th century Unakoti rock carvings",
    artMovement: "Indigenous Bamboo Sculpture & Bas-Relief Rock Carvings",
    badgeColor: "#0D9488",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Lady_weaving_traditional_garment_Rignai_in_Gandacherra_Dhalai_Tripura_India.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Lady_weaving_traditional_garment_Rignai_in_Gandacherra_Dhalai_Tripura_India.jpg?width=1000",
            "caption": "Weaving a traditional Rignai garment, Tripura"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Miss_Rina_Chakma%2C_an_artisan_from_South_Tripura_district_of_Tripura_is_a_National_Awardee_in_respect_of_Handloom_Sector_for_the_year_2002_for_her_delicate_work.jpg?width=800",
            "caption": "National award-winning Tripura handloom artisan"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Tripura_Handloom%2C_Srimangal%2C_2010_by_Biplob_Rahman.jpg?width=800",
            "caption": "Tripura handloom weaving pattern"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Ujjayanta_Palace_as_seen_from_the_midpoint_of_the_avenue_01.JPG?width=800",
            "caption": "Ujjayanta Palace, royal seat of Tripura heritage"
      }
],
    culturalSignificance: "Celebrates the rich cultural encounters between tribal indigenous life and the royal Manikya kingdom. Giant rock-cut carvings at Unakoti embody the presence of Shiva amidst the sacred hills.",
    creationProcess: [
      {
            "step": 1,
            "title": "Muli Bamboo Selection",
            "desc": "Mature Muli bamboo harvested at the right season is treated against beetles and borers."
      },
      {
            "step": 2,
            "title": "Precision Splitting",
            "desc": "Craftsmen use specialized knives to split bamboo into gossamer-thin strips of incredible pliability."
      },
      {
            "step": 3,
            "title": "Structural Framework Assembly",
            "desc": "Heavier bamboo culms are heat-bent to form rigid frames for furniture and structural relief sculptures."
      },
      {
            "step": 4,
            "title": "Lacquering & Sun Buffing",
            "desc": "Woven panels are sanded with fine silica leaves and coated with clear natural resin for weather resistance."
      }
],
    summary: "World-class bamboo sculpture and delicate filigree, complemented by the monumental 30-foot rock-carved Shiva reliefs at Unakoti and indigenous Tripuri Rignai hand-woven wraps.",
    historicalContext: "Bamboo forms the lifeblood of Tripura's 19 indigenous tribes. The Manikya kings patronized bamboo palace decor, while the colossal hillside carvings at Unakoti represent Shaivite rock sculpture.",
    geographicSpread: "Across Tripura hills from Agartala to the archaeological marvel of Unakoti.",
    techniquesAndPigments: "Muli bamboo treated, sliced into gossamer-thin strips, and woven into delicate idols, lamps, and screens; stone carvings carved directly into sandstone cliff faces.",
    keyMotifs: ["Unakotiswara Kal Bhairava rock-cut face", "Bamboo lampshades and filigree animal miniatures", "Rignai wraps with indigenous geometric embroidery (Chamthwi)", "Royal Manikya palace screen lattices"],
    masterArtists: ["Benichandra Jamatia (Padma Shri)", "Paresh Chandra Sarkar", "Prahlad Debbarma"]
  },
  {
    id: "uttar_pradesh",
    title: "Mughal Court Miniatures & Sanjhi of Mathura",
    nativeName: "मुग़ल लघुचित्र एवं मथुरा की सांझी",
    state: "Uttar Pradesh",
    isUT: false,
    region: "Agra, Fatehpur Sikri & Mathura",
    coordinates: [27.1767, 78.0081],
    category: "Miniature & Panel Painting",
    era: "Royal & Courtly",
    periodDetail: "1550 – 1750 CE (Imperial Ateliers of Akbar, Jahangir, and Shah Jahan)",
    artMovement: "Indo-Persian Imperial Realism & Braj Cut-Paper Stencils",
    badgeColor: "#D97706",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Govardhan._Jahangir_Visiting_the_Ascetic_Jadrup._ca._1616-20%2C_Musee_Guimet%2C_Paris.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Govardhan._Jahangir_Visiting_the_Ascetic_Jadrup._ca._1616-20%2C_Musee_Guimet%2C_Paris.jpg?width=1000",
            "caption": "Mughal miniature painting, Emperor Jahangir, circa 1620"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Mughal_Painting_showing_a_Hunting_Scene%2C_circa_17th_century%2C_Chandigarh_Museum.jpg?width=800",
            "caption": "Mughal court miniature, hunting scene"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Angel_on_a_Composite_Animal%2C_Mughal_Painting_circa_16th_century%2C_Chandigarh_Museum.jpg?width=800",
            "caption": "Composite-animal Mughal miniature painting, 16th century"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Mosque_Scene%2C_Based_on_the_Persian_Manuscript_Tawarikh-i-Alfi%2C_History_of_the_thousand_years%2C_circa_1595_CE%2C_Mughal_Miniature_Painting._National_Museum%2C_Delhi.16th_century.jpg?width=800",
            "caption": "Mughal miniature manuscript painting, 1595 CE"
      }
],
    culturalSignificance: "Mughal miniatures chronicle imperial history, philosophy, and zoology, fusing Persian, Hindu, and European aesthetics. Nearby in Mathura, Sanjhi paper-cut stencils are a devotional offering of love for Lord Krishna.",
    creationProcess: [
      {
            "step": 1,
            "title": "Wasli Paper Burnishing",
            "desc": "Multiple sheets of handmade sunn-hemp paper are laminated with starch paste and burnished with an agate stone."
      },
      {
            "step": 2,
            "title": "Tarh (Underdrawing)",
            "desc": "Master court artists sketch the composition in fine red ink, adjusting anatomy and European aerial perspective."
      },
      {
            "step": 3,
            "title": "Rangamizi (Color Layering)",
            "desc": "Crushed lapis lazuli, vermilion, crushed pearls, and malachite are painted with single-hair squirrel brushes."
      },
      {
            "step": 4,
            "title": "Gold Illumination (Tala-kari)",
            "desc": "Pure gold leaf is painted and burnished with an agate point to create shimmering armor, jewels, and floral borders."
      }
],
    summary: "A world-renowned synthesis of Persian fine line, Hindu realism, and European perspective in imperial court chronicles, alongside Mathura's delicate Sanjhi cut-paper temple stencils.",
    historicalContext: "Akbar established imperial workshops (Karkhanas) where master artists illustrated epic chronicles (Akbarnama, Hamzanama). Nearby in Mathura, Vaishnava devotees perfected Sanjhi cut-paper art for Krishna.",
    geographicSpread: "Centered in Agra, Fatehpur Sikri, Lucknow, and Mathura across the fertile Gangetic plains.",
    techniquesAndPigments: "Wasli paper burnished with agate stone, painted with lapis lazuli, crushed pearls, gold dust, and insect wings. Sanjhi uses curved scissors (kachni) on handmade paper without drawing outlines.",
    keyMotifs: ["Imperial court durbars and royal hunts", "Ustad Mansur's zoological studies (Siberian Crane, Dodo)", "Gold-illuminated floral margins (Hashiya)", "Krishna's Raas Leela depicted in Mathura Sanjhi stencils"],
    masterArtists: ["Basawan & Daswanth (Akbar Court)", "Ustad Mansur (Jahangir Court)", "Mohan Kumar Verma (Padma Shri 2023 for Sanjhi)"]
  },
  {
    id: "uttarakhand",
    title: "Aipan Folk Ritual Art",
    nativeName: "ऐपण लोक चित्रकला",
    state: "Uttarakhand",
    isUT: false,
    region: "Almora, Kumaon & Garhwal",
    coordinates: [29.5971, 79.6591],
    category: "Folk & Tribal",
    era: "Living Folk Tradition",
    periodDetail: "Practiced since the Chand Dynasty of Kumaon (10th–18th Century CE; GI tagged)",
    artMovement: "Kumaoni Matriarchal Ritual Floor & Threshold Art",
    badgeColor: "#BE123C",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Aipan_art.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Aipan_art.jpg?width=1000",
            "caption": "Aipan ritual floor art, Uttarakhand"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Aipan_folk_art.jpg?width=800",
            "caption": "Traditional Aipan folk motifs"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Aipan_design_.jpg?width=800",
            "caption": "Aipan geometric design detail"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Lakshmi-maa.jpg?width=800",
            "caption": "Aipan-adjacent ritual folk imagery, Uttarakhand"
      }
],
    culturalSignificance: "Aipan is a sacred ritual floor art created by women of Kumaon to sanctify the home, honor visiting deities, and invoke the blessings of Goddess Lakshmi during weddings and festivals.",
    creationProcess: [
      {
            "step": 1,
            "title": "Geru Clay Washing",
            "desc": "The stone threshold or wooden stool (chowki) is washed and coated with wet terracotta red ochre clay (geru)."
      },
      {
            "step": 2,
            "title": "Biswar Rice Paste Preparation",
            "desc": "Raw rice is soaked overnight and ground on a stone sil-batta into a thick, milky-white smooth paste called biswar."
      },
      {
            "step": 3,
            "title": "Freehand Finger Drawing",
            "desc": "Without any stencils or brushes, the artist dips the three middle fingers into the paste to draw parallel sacred lines."
      },
      {
            "step": 4,
            "title": "Central Dot Consecration",
            "desc": "The central bindu representing the cosmos or deity's presence is applied at the center to complete the ritual diagram."
      }
],
    summary: "Sacred geometric folk art created by Kumaoni women on doorsteps and prayer rooms using natural red ochre (Geru) and white rice flour paste (Biswar) applied with finger pads.",
    historicalContext: "Originating in Almora, Aipan is believed to invoke divine protection and Lakshmi's grace. Painted on floors, wooden low stools (Chowkis), and cloth for weddings, naming ceremonies, and Diwali.",
    geographicSpread: "The Himalayan valleys of Kumaon (Almora, Nainital, Pithoragarh) and Garhwal.",
    techniquesAndPigments: "The floor is washed with geru (terracotta red clay). The white design is made from rice soaked overnight and ground into a smooth paste (biswar), drawn freehand using the ring and middle fingers.",
    keyMotifs: ["Lakshmi Padchinha (Divine sacred footprints of Goddess Lakshmi)", "Saraswati and Surya Chowkis with intricate geometric stars", "Dhulyarghya (Ceremonial wedding entrance diagrams)", "Nine dots of Navagraha and bell vine borders"],
    masterArtists: ["Minakshi Khati (Aipan Girl of Uttarakhand - Revivalist)", "Geeta Joshi", "Tulsi Devi"]
  },
  {
    id: "west_bengal",
    title: "Kalighat Painting & Bengal Patachitra",
    nativeName: "কালীঘাট পটচিত্র এবং মেদিনীপুর পটের গান",
    state: "West Bengal",
    isUT: false,
    region: "Kalighat (Kolkata) & Naya Village (Pingla, Medinipur)",
    coordinates: [22.5204, 88.3426],
    category: "Colonial & Modern Transition",
    era: "Colonial & Modern Transition",
    periodDetail: "19th Century CE (c. 1830–1930) in colonial Calcutta; living continuity in Pingla",
    artMovement: "Urban Folk Realism, Social Satire & Medinipur Scroll Singing",
    badgeColor: "#E11D48",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/India%2C_Calcutta%2C_Kalighat_painting%2C_19th_century_-_Kalighat_Painting_-_2003.124_-_Cleveland_Museum_of_Art.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/India%2C_Calcutta%2C_Kalighat_painting%2C_19th_century_-_Kalighat_Painting_-_2003.124_-_Cleveland_Museum_of_Art.jpg?width=1000",
            "caption": "19th-century Kalighat painting, Cleveland Museum of Art"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/India%2C_Calcutta%2C_Kalighat_painting%2C_19th_century_-_Trivikramapada_%28Three_Steps_of_Vishnu%29_-_2003.165_-_Cleveland_Museum_of_Art.jpg?width=800",
            "caption": "Kalighat painting, Trivikramapada theme"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Radha-_Krishna%2C_Kalighat_Painting.jpg?width=800",
            "caption": "Radha-Krishna Kalighat painting"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kalighat%2C_Kolkata_%28Calcutta%29%2C_West_Bengal%2C_India_-_Kali_-_Google_Art_Project.jpg?width=800",
            "caption": "Kalighat painting of Goddess Kali"
      }
],
    culturalSignificance: "Kalighat painting captured the birth of modern urban India in colonial Calcutta. It satirical portrayed social changes, while Bengal Patachitra preserves village scroll-singing traditions.",
    creationProcess: [
      {
            "step": 1,
            "title": "Paper Selection",
            "desc": "Affordable English mill-made paper was historically chosen to allow rapid mass production for visiting temple pilgrims."
      },
      {
            "step": 2,
            "title": "Calligraphic Black Contour",
            "desc": "Using squirrel-hair brushes, the artist draws a continuous, fluid curving outline with dynamic line weight."
      },
      {
            "step": 3,
            "title": "Gradated Watercolor Washes",
            "desc": "Transparent color washes are applied and feathered while wet, producing voluptuous rounded three-dimensional volume."
      },
      {
            "step": 4,
            "title": "Silver & Gold Accents",
            "desc": "White lead, colloidal silver, or gold leaf touches are added to ornaments, eyes, and weapons for final sparkle."
      }
],
    summary: "Pioneering urban folk watercolor school famous for sweeping calligraphic brushstrokes, bold washes, and sharp satire of colonial 'babus', alongside melodic village scroll singers (Patuas).",
    historicalContext: "Rural village scroll painters migrated to Calcutta's bustling Kalighat Kali temple bazaars. They adapted European watercolor techniques to create affordable artworks that directly inspired Modernist master Jamini Roy.",
    geographicSpread: "Originating near Kalighat in South Kolkata; village scrolls flourish in Naya village (Pingla), Paschim Medinipur.",
    techniquesAndPigments: "Single fluid sweeping outlines drawn with squirrel-hair brushes on cheap mill paper, shaded with transparent watercolor washes to produce dramatic 3D volume.",
    keyMotifs: ["Goddess Kali standing on Shiva with protruding tongue", "The 'Calcutta Babu' smoking a hookah or courting courtesans", "Social satire: Babu beaten with a slipper by his wife", "Cat holding a prawn in its mouth"],
    masterArtists: ["Nibarun Chandra Ghosh & Kali Charan Ghosh", "Jamini Roy (Pioneered Modern Indian art through Kalighat)", "Anwar Chitrakar (President's Award)"]
  },

  // ==================== 8 UNION TERRITORIES ====================
  {
    id: "andaman_nicobar",
    title: "Indigenous Shell Craft & Nicobarese Canoe Art",
    nativeName: "Andaman & Nicobar Indigenous Craft",
    state: "Andaman and Nicobar Islands",
    isUT: true,
    region: "Port Blair, Car Nicobar & Little Andaman",
    coordinates: [11.6234, 92.7265],
    category: "Folk & Tribal",
    era: "Prehistoric & Ancient",
    periodDetail: "Indigenous tribal ancestral traditions practiced for thousands of years",
    artMovement: "Island Tribal Woodcraft & Mother-of-Pearl Shell Art",
    badgeColor: "#0284C7",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nicobarese_canoe_at_Nancowry.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nicobarese_canoe_at_Nancowry.jpg?width=1000",
            "caption": "Traditional Nicobarese outrigger canoe, Nancowry"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Andamanese_-_boats_1875.jpg?width=800",
            "caption": "Great Andamanese traditional boats, 1875 illustration"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/The_Andaman_Islanders_fig_44.png?width=800",
            "caption": "Andaman Islander craft, historical illustration"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Nicobari_dance.jpg?width=800",
            "caption": "Traditional Nicobari dance"
      }
],
    culturalSignificance: "Harmonizes indigenous tribal life with the marine ecology of the Indian Ocean. Hodi canoes are engineered with nautical wisdom, while shell carvings reflect deep respect for marine life.",
    creationProcess: [
      {
            "step": 1,
            "title": "Marine Timber Hollowing",
            "desc": "Single tree trunks of local hard timber are hollowed out using traditional hand adzes to form canoe hulls."
      },
      {
            "step": 2,
            "title": "Outrigger Bamboo Balancing",
            "desc": "Flexible bamboo poles and outrigger floats are lashed with wild cane fiber to provide stability in ocean swells."
      },
      {
            "step": 3,
            "title": "Shell Buffing & Sand Polishing",
            "desc": "Mother-of-pearl and turbo shells are buffed with fine coral sand to expose luminous iridescent layers."
      },
      {
            "step": 4,
            "title": "Relief Incision",
            "desc": "Delicate tribal totems of sea turtles, flying fish, and marine stars are etched into the shell surfaces."
      }
],
    summary: "Ancient marine tribal traditions featuring hand-carved outrigger canoes (Hodi), mother-of-pearl shell engravings, and pandanus mat weaving by the Nicobarese and Shompen peoples.",
    historicalContext: "The isolated tropical archipelago is home to indigenous communities whose crafts harmonize with marine ecology. Hodi canoes are carved from single timber logs with exceptional nautical hydrodynamics.",
    geographicSpread: "The 572 islands of the Andaman and Nicobar archipelago in the Bay of Bengal.",
    techniquesAndPigments: "Outrigger canoes hollowed using hand adzes; mother-of-pearl and turbo sea shells polished with fine sand and carved into relief ornaments.",
    keyMotifs: ["Hodi outrigger canoes with stylized bow profiles", "Mother-of-pearl jewelry, lamps, and decorative sea shells", "Pandanus and coconut leaf mats with geometric tribal weaves", "Traditional turtle and fish hunting spear carvings"],
    masterArtists: ["Car Nicobar Tribal Artisan Cooperatives", "Port Blair Master Shell Sculptors"]
  },
  {
    id: "chandigarh",
    title: "Rock Garden Recycled Folk Sculpture",
    nativeName: "ਰੌਕ ਗਾਰਡਨ ਮੂਰਤੀ ਕਲਾ",
    state: "Chandigarh",
    isUT: true,
    region: "Sector 1, Capitol Complex Foothills",
    coordinates: [30.7525, 76.8101],
    category: "Colonial & Modern Transition",
    era: "Colonial & Modern Transition",
    periodDetail: "Created 1957–1975 CE secretly by visionary artist Nek Chand",
    artMovement: "Visionary Outsider Art & Eco-Folk Mosaic Sculpture",
    badgeColor: "#6B7280",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Detail_of_Nek_Chand_Fantasy_Rock_Garden_-_Chandigarh_U.T._-_India_-_01_%2826504606715%29.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Detail_of_Nek_Chand_Fantasy_Rock_Garden_-_Chandigarh_U.T._-_India_-_01_%2826504606715%29.jpg?width=1000",
            "caption": "Recycled-material sculpture, Nek Chand Rock Garden"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Scene_at_Nek_Chand_Fantasy_Rock_Garden_-_Chandigarh_U.T._-_India_-_02_%2825901815083%29.jpg?width=800",
            "caption": "Mosaic figures at Rock Garden, Chandigarh"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Rock_Garden_Memory_Stone%2C_Chandigarh%2C_India.jpg?width=800",
            "caption": "Rock Garden memorial stone, Chandigarh"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Nek_Chand_par_Gilles_Probst.jpg?width=800",
            "caption": "Nek Chand, creator of the Rock Garden"
      }
],
    culturalSignificance: "A triumph of visionary folk outsider art and environmental conservation. Nek Chand built a mythical kingdom secretly over 18 years, recycling construction waste from the modern capital into immortal art.",
    creationProcess: [
      {
            "step": 1,
            "title": "Urban Waste Collection",
            "desc": "Nek Chand gathered discarded porcelain sinks, broken glass bangles, pottery shards, and coal slag on his bicycle."
      },
      {
            "step": 2,
            "title": "Armature Construction",
            "desc": "Foundry slag and metal scrap were assembled into structural armatures and secured with concrete."
      },
      {
            "step": 3,
            "title": "Mosaic Tiling",
            "desc": "Broken ceramic plates and colorful glass bangle fragments were pressed into wet cement to form clothes and features."
      },
      {
            "step": 4,
            "title": "Architectural Courtyard Integration",
            "desc": "Sculptures were arranged into dramatic village processions and courtyards connected by low curving tunnels."
      }
],
    summary: "World-famous 40-acre wonderland featuring thousands of humanoid and animal sculptures crafted entirely from industrial waste, discarded porcelain sinks, broken glass bangles, and foundry slag.",
    historicalContext: "Road inspector Nek Chand started clearing forest land in secret in 1957 to build his vision of a lost kingdom, recycling demolition debris from Le Corbusier's modern city construction. Discovered in 1975, it is now an internationally celebrated masterpiece.",
    geographicSpread: "Sector 1 of Chandigarh, adjacent to Sukhna Lake.",
    techniquesAndPigments: "Concrete armatures embellished with mosaics of broken ceramic tiles, discarded bathroom fixtures, electrical switches, and glass bangles.",
    keyMotifs: ["Processions of village dancing girls wearing bangle skirts", "Armies of marching warriors, monkeys, horses, and camels", "Majestic stone courtyards, archways, and cascading waterfalls", "Whimsical open-air amphitheaters"],
    masterArtists: ["Nek Chand Saini (Padma Shri 1984 - Visionary Creator)"]
  },
  {
    id: "dadra_nagar_daman_diu",
    title: "Diu Sea Shell Carving & Daman Woodcraft",
    nativeName: "દમણ અને દીવ કાષ્ટ કલા",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    isUT: true,
    region: "Diu Fortress, Daman & Silvassa",
    coordinates: [20.7144, 70.9874],
    category: "Folk & Tribal",
    era: "Living Folk Tradition",
    periodDetail: "16th Century Portuguese colonial contact fused with indigenous Warli traditions",
    artMovement: "Indo-Portuguese Maritime Carving & Forest Tribal Art",
    badgeColor: "#059669",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Diu_Fort_From_the_Cannon_Barrel.JPG?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Diu_Fort_From_the_Cannon_Barrel.JPG?width=1000",
            "caption": "Diu Fort, Portuguese colonial architecture"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Diu_Fortress%2C_Jan._2010.jpg?width=800",
            "caption": "Diu Fortress exterior view"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Diu_Fortress%2C_fort_interior.jpg?width=800",
            "caption": "Interior of Diu Fortress"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Diu_fort_Diu_india.jpg?width=800",
            "caption": "Diu Fort coastal architecture"
      }
],
    culturalSignificance: "Blends Portuguese colonial baroque woodwork with Gujarati craftsmanship and Warli tribal folk wall traditions, capturing the maritime heritage of the Arabian Sea.",
    creationProcess: [
      {
            "step": 1,
            "title": "Teak Log Carving",
            "desc": "Seasoned teak wood is chiseled with classical baroque floral volutes and acanthus leaves."
      },
      {
            "step": 2,
            "title": "Shell Polishing & Cutting",
            "desc": "Local sea shells and mother-of-pearl are sliced into geometric facets and polished smooth."
      },
      {
            "step": 3,
            "title": "Inlay Embedding",
            "desc": "Recessed channels in wooden boxes are inlaid with iridescent shell pieces and sealed with natural mastic."
      },
      {
            "step": 4,
            "title": "Beeswax Buffing",
            "desc": "Surfaces are buffed with beeswax to create a warm, lustrous heirloom finish."
      }
],
    summary: "A distinctive cultural blend of Portuguese colonial architectural woodwork, intricate tortoise/sea-shell carving in Diu, and indigenous Warli tribal murals in Silvassa.",
    historicalContext: "For over 450 years, Daman and Diu were Portuguese maritime trade outposts. Local artisans merged European Baroque church carvings with indigenous Gujarati and Konkani motifs.",
    geographicSpread: "Coastal enclaves of Daman, the island of Diu, and tribal hinterlands of Dadra & Nagar Haveli.",
    techniquesAndPigments: "Teak and rosewood carving with hand chisels; oyster and mother-of-pearl sea shells buffed with pumice stones; tribal mud wall murals using rice paste.",
    keyMotifs: ["Baroque church altar foliage and winged cherubs", "Intricate tortoiseshell and mother-of-pearl jewel caskets", "Warli harvest dance murals on red clay cottages in Silvassa", "Lighthouse and sailing ship carvings"],
    masterArtists: ["Kishore Solanki (Diu Shell Crafter)", "Silvassa Warli Tribal Collectives"]
  },
  {
    id: "delhi",
    title: "Delhi Imperial Miniatures & Meenakari",
    nativeName: "दिल्ली मुग़ल मीनाकारी एवं लघुचित्र",
    state: "Delhi",
    isUT: true,
    region: "Shahjahanabad, Red Fort & Chandni Chowk",
    coordinates: [28.6562, 77.2410],
    category: "Miniature & Panel Painting",
    era: "Royal & Courtly",
    periodDetail: "17th–19th Century CE (Flourished under Shah Jahan and Late Mughal Courts)",
    artMovement: "Delhi Late Mughal School & Ivory Miniature Painting",
    badgeColor: "#D97706",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/National_Museum_in_Delhi_9_-_miniature_%2828196632327%29.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/National_Museum_in_Delhi_9_-_miniature_%2828196632327%29.jpg?width=1000",
            "caption": "Mughal miniature painting, National Museum, Delhi"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Mosque_Scene%2C_Based_on_the_Persian_Manuscript_Tawarikh-i-Alfi%2C_History_of_the_thousand_years%2C_circa_1595_CE%2C_Mughal_Miniature_Painting._National_Museum%2C_Delhi.16th_century.jpg?width=800",
            "caption": "Imperial Mughal miniature, National Museum Delhi"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Shah_Alam_II_%281759-1806%29%2C_the_blind_mughal_Emperor%2C_seated_on_a_golden_throne..jpg?width=800",
            "caption": "Mughal Emperor Shah Alam II, imperial miniature"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Himachali_Gold_Necklace_with_Meenakari%2C_Kangra_Culture%2C_Himachal_Pradesh.jpg?width=800",
            "caption": "Meenakari enamelled gold jewellery"
      }
],
    culturalSignificance: "The Mughal imperial ateliers in Shahjahanabad reached supreme heights of luxury, producing manuscript paintings and vitreous enamels (Meenakari) that served as diplomatic gifts across Europe and Asia.",
    creationProcess: [
      {
            "step": 1,
            "title": "Polished Base Preparation",
            "desc": "Sheets of fine ivory or burnished wasli paper are polished smooth with gemstone burnishers."
      },
      {
            "step": 2,
            "title": "Microscopic Single-Hair Inking",
            "desc": "Portraits of emperors and monuments are sketched with a brush made of a single kitten or squirrel hair."
      },
      {
            "step": 3,
            "title": "Meenakari Champlev\u00e9 Engraving",
            "desc": "For jewelry, gold surfaces are hand-engraved with depressions to hold powdered mineral vitreous enamels."
      },
      {
            "step": 4,
            "title": "Kiln Firing & Diamond Polishing",
            "desc": "Fired in miniature kilns at 850\u00b0C so glass enamels fuse permanently, polished with agate stone."
      }
],
    summary: "Exquisite ivory miniature portraits, gold filigree manuscript illuminations, and brilliant vitreous Meenakari (enameling) crafted in the historic royal workshops of Old Delhi.",
    historicalContext: "Shahjahanabad was the cultural capital of the Mughal Empire. In the 18th and 19th centuries, Delhi artists perfected microscopic ivory miniatures of emperors, monuments, and courtiers.",
    geographicSpread: "The historical walled city of Shahjahanabad, Dariba Kalan jewelry quarters, and Jama Masjid ateliers.",
    techniquesAndPigments: "Single-hair brushes used on polished ivory or wasli paper; gold leaf burnished with agate; vitreous mineral enamels fused in kilns onto engraved gold and silver.",
    keyMotifs: ["Portraits of Mughal emperors (Shah Jahan, Bahadur Shah Zafar) and Nur Jahan", "Architectural elevations of Taj Mahal, Red Fort, and Jama Masjid", "Meenakari peacocks, lotuses, and floral vines (Gul-o-Bulbul)", "Shimmering gold and lapis illuminated calligraphic cartouches"],
    masterArtists: ["Ghulam Ali Khan (Late Mughal Master)", "Mazhar Ali Khan", "Dariba Kalan Master Enamelers"]
  },
  {
    id: "jammu_kashmir",
    title: "Kashmiri Papier-Mâché & Basohli Miniatures",
    nativeName: "کشمیری کارِ قلمدانی",
    state: "Jammu and Kashmir",
    isUT: true,
    region: "Srinagar (Kari-Kalamdani) & Basohli (Jammu)",
    coordinates: [34.0837, 74.7973],
    category: "Miniature & Panel Painting",
    era: "Royal & Courtly",
    periodDetail: "Papier-mâché introduced 14th c. by Mir Sayyid Ali Hamadani; Basohli 17th c. Raja Kirpal Pal",
    artMovement: "Kari-Kalamdani (Pen-case art) & Basohli Fierce Devotional Miniatures",
    badgeColor: "#7C3AED",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/19th-century_papier-m%C3%A2ch%C3%A9_bowl_from_Kashmir_01.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/19th-century_papier-m%C3%A2ch%C3%A9_bowl_from_Kashmir_01.jpg?width=1000",
            "caption": "19th-century Kashmiri papier-mâché bowl"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/19th-century_papier-m%C3%A2ch%C3%A9_bowl_from_Kashmir_02.jpg?width=800",
            "caption": "Hand-painted Kashmiri papier-mâché detail"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kashmir_papier-m%C3%A2ch%C3%A9_trinket_boxes.jpg?width=800",
            "caption": "Kashmiri papier-mâché trinket boxes"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Papier_mache_goods%2C_Kashmir_%288141417742%29.jpg?width=800",
            "caption": "Kashmiri papier-mâché craft goods"
      }
],
    culturalSignificance: "Kashmiri papier-m\u00e2ch\u00e9 reflects the paradise gardens of Kashmir. Brought along the Silk Road from Samarkand, it became famous in royal courts for exquisite jewel caskets and pen-cases (Qalamdani).",
    creationProcess: [
      {
            "step": 1,
            "title": "Sakhtsazi (Paper Pulp Molding)",
            "desc": "Discarded paper is soaked in water for weeks, pounded into paste with rice glue, and molded on wooden shapes."
      },
      {
            "step": 2,
            "title": "Smoothing with Agate Stone",
            "desc": "The dried mold is coated with gypsum plaster (gach) and rubbed with smooth river stones until silky smooth."
      },
      {
            "step": 3,
            "title": "Naqqashi (Miniature Painting)",
            "desc": "Master painters use cat-hair brushes to paint intricate floral arabesques (Gul-o-Bulbul, Chinar leaves) in gold and minerals."
      },
      {
            "step": 4,
            "title": "Kahruba Copal Lacquering",
            "desc": "Multiple layers of transparent amber varnish (kahruba) are applied and sun-baked for an enduring water-resistant sheen."
      }
],
    summary: "Exquisite lacquer-painted paper pulp art featuring Persian floral patterns in pure 24K gold, accompanied by Basohli's fiery miniature paintings adorned with iridescent beetle wings.",
    historicalContext: "Brought from Samarkand to Kashmir by Sultan Zain-ul-Abidin. Meanwhile, in Jammu's Basohli principality, master painter Manaku created intense miniatures known for glowing colors and beetle-wing jewelry.",
    geographicSpread: "Srinagar and the Kashmir Valley for papier-mâché; Kathua and Basohli in Jammu for miniature paintings.",
    techniquesAndPigments: "Waste paper soaked, pounded, mixed with rice paste, molded on wooden forms, smoothed with stone, lacquered, and painted with cat-hair brushes using gold and mineral pigments.",
    keyMotifs: ["Gul-o-Bulbul (Rose and Nightingale motif)", "Chinar leaf and paisley (Boteh) arabesques", "Basohli Krishna with giant expressive eyes and beetle-wing jewelry", "Hazara (Thousand flowers pattern on jewel boxes)"],
    masterArtists: ["Maqbool Jan (National Award & Shilp Guru)", "Ghulam Hassan", "Devi Das & Manaku (Basohli Masters)"]
  },
  {
    id: "ladakh",
    title: "Ladakh Monastery Frescoes & Thangkas",
    nativeName: "ལ་དྭགས་ཀྱི་ལྡེབས་རིས།",
    state: "Ladakh",
    isUT: true,
    region: "Leh, Alchi, Hemis & Thiksey Monasteries",
    coordinates: [34.1526, 77.5771],
    category: "Cave Murals & Frescoes",
    era: "Classical & Medieval",
    periodDetail: "11th Century CE onwards (Alchi Chos-khor founded by Rinchen Zangpo)",
    artMovement: "Indo-Tibetan Western Himalayan Sacred Mural Tradition",
    badgeColor: "#EA580C",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Mural_painting_inside_the_Saspol_Cave%2C_Ladakh_02.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Mural_painting_inside_the_Saspol_Cave%2C_Ladakh_02.jpg?width=1000",
            "caption": "Buddhist fresco, Saspol Cave, Ladakh"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Phyang_Monastery%2C_Ladakh_01.jpg?width=800",
            "caption": "Phyang Monastery, Ladakh"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Phyang_Monastery%2C_Ladakh_02.jpg?width=800",
            "caption": "Monastery mural detail, Phyang, Ladakh"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Phyang_Monastery%2C_Ladakh_03.jpg?width=800",
            "caption": "Thangka and fresco art, Phyang Monastery"
      }
],
    culturalSignificance: "Alchi and Hemis monastery frescoes represent a rare, miraculously preserved 11th-century Indo-Tibetan Buddhist artistic synthesis that survived in Ladakh's high cold desert.",
    creationProcess: [
      {
            "step": 1,
            "title": "Mud & Straw Wall Preparation",
            "desc": "Thick mud brick monastery walls are plastered with fine local clay mixed with straw and yak-skin glue."
      },
      {
            "step": 2,
            "title": "Sacred Mathematical Grids",
            "desc": "Monk painters snap indigo-chalk strings across walls to establish iconometric proportions according to Buddhist sutras."
      },
      {
            "step": 3,
            "title": "Natural Mineral Infilling",
            "desc": "Colors from lapis lazuli (blue), malachite (green), orpiment (yellow), and cinnabar (red) are painted in tempera."
      },
      {
            "step": 4,
            "title": "Black Contour Outlining",
            "desc": "Sharp black carbon ink lines delineate facial features and floating celestial garments."
      }
],
    summary: "Extraordinary 11th-century tempera frescoes preserving a synthesis of Kashmiri Buddhist and Tibetan styles in the mud temples of Alchi, alongside giant monastic appliqué thangkas.",
    historicalContext: "Commissioned by the Great Translator Lotsawa Rinchen Zangpo, Kashmiri artists painted thousands of intricate deities at Alchi Chos-khor, surviving untouched in Ladakh's dry cold desert for nearly a millennium.",
    geographicSpread: "The Indus Valley monasteries of Ladakh including Alchi, Hemis, Likir, Lamayuru, and Thiksey.",
    techniquesAndPigments: "Plaster made from local clay and straw; pigments extracted from lapis lazuli (blue), orpiment (yellow), cinnabar (red), and malachite (green), outlined with sharp black lines.",
    keyMotifs: ["Vairochana and the Five Cosmic Dhyani Buddhas", "Wrathful Dharmapala protectors (Mahakala, Palden Lhamo)", "Textile robes painted with miniature Persian and Indian court scenes", "Giant Bhavachakra murals at monastery entrance porticos"],
    masterArtists: ["Lotsawa Rinchen Zangpo's Guilds", "Chewang Rigzin (Master Thangka Painter)", "Tsering Wangdus (Padma Shri)"]
  },
  {
    id: "lakshadweep",
    title: "Coral Limestone Carving & Coir Folk Craft",
    nativeName: "ലക്ഷദ്വീപ് നാടോടി കരകൗശലം",
    state: "Lakshadweep",
    isUT: true,
    region: "Kavaratti, Andrott & Minicoy",
    coordinates: [10.5667, 72.6417],
    category: "Folk & Tribal",
    era: "Living Folk Tradition",
    periodDetail: "17th Century CE Ujra Mosque masonry to contemporary maritime island crafts",
    artMovement: "Maritime Coral Architecture & Island Fiber Craft",
    badgeColor: "#0891B2",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Lakshadweep_Islands%2C_India_%28MODIS_2015-01-14%29.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Lakshadweep_Islands%2C_India_%28MODIS_2015-01-14%29.jpg?width=1000",
            "caption": "Lakshadweep coral atolls, satellite view"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Lakshadweep_Islands_-_NASA_Earth_Observatory.jpg?width=800",
            "caption": "Lakshadweep islands and lagoons"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Coral_Reef_Under_the_Ocean.jpg?width=800",
            "caption": "Coral reef, Lakshadweep waters"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Anthias_coral_reef_fish.jpg?width=800",
            "caption": "Coral reef marine life, Lakshadweep"
      }
],
    culturalSignificance: "The Ujra Mosque in Kavaratti and Minicoy crafts represent centuries of oceanic Islamic architectural heritage, using local coral limestone blocks carved with floral and geometric arabesques.",
    creationProcess: [
      {
            "step": 1,
            "title": "Coral Limestone Quarrying",
            "desc": "Porous coral stone is harvested while soft and workable, curing hard upon prolonged air exposure."
      },
      {
            "step": 2,
            "title": "Floral & Calligraphic Relief Carving",
            "desc": "Master carvers chisel delicate floral rosettes and Quranic calligraphic bands directly into the stone face."
      },
      {
            "step": 3,
            "title": "Coir Fiber Retting & Spinning",
            "desc": "Coconut husks are retted in saline lagoon waters for months, beaten into golden fibers, and spun into strong twine."
      },
      {
            "step": 4,
            "title": "Geometric Loom Weaving",
            "desc": "Dyed coir strands are hand-loomed into robust geometric carpets that withstand coastal humidity."
      }
],
    summary: "Intricate floral and calligraphic stone carving on sea coral blocks seen in 17th-century mosques, alongside geometric coconut-husk coir weaving and tortoiseshell craft.",
    historicalContext: "The Ujra Mosque in Kavaratti features intricate wooden ceilings and coral limestone reliefs carved by Sheikh Mohammad Kasim in the 17th century, creating a unique Islamic-coastal art form.",
    geographicSpread: "Across the 36 coral atolls and islands of Lakshadweep in the Arabian Sea.",
    techniquesAndPigments: "Porous coral limestone cut and carved while soft, hardening upon exposure; coir fiber spun on hand charkhas and dyed with natural plant extracts.",
    keyMotifs: ["Arabesque calligraphy and floral rosettes in coral relief", "Traditional Jahadhoni racing boat miniature carvings", "Geometric braided coir floor carpets and mats", "Coconut shell lacquer cups and turtle motifs"],
    masterArtists: ["Sheikh Mohammad Kasim (Historical Architect)", "Kavaratti Island Artisan Guilds"]
  },
  {
    id: "puducherry",
    title: "Villianur Terracotta & French-Creole Pottery",
    nativeName: "வில்லியனூர் சுடுமண் சிற்பங்கள்",
    state: "Puducherry",
    isUT: true,
    region: "Villianur & French White Town",
    coordinates: [11.9139, 79.8145],
    category: "Metal, Stone & Sculpture",
    era: "Classical & Medieval",
    periodDetail: "Centuries-old heritage (GI tagged in 2011); enriched by modern ceramic movements in Auroville",
    artMovement: "Dravidian Temple Terracotta & Indo-French Ceramic Arts",
    badgeColor: "#EA580C",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Windows_of_Pondicherry_-_White_wall%2C_Blue_window_and_Terracotta_roof.jpg?width=1000",
    gallery: [
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Windows_of_Pondicherry_-_White_wall%2C_Blue_window_and_Terracotta_roof.jpg?width=1000",
            "caption": "French-Creole terracotta roof and architecture, Pondicherry"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Puducherry_Franco-Tamil_house.jpg?width=800",
            "caption": "Franco-Tamil colonial house, Puducherry"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Bharathi_Park_in_Puducherry.JPG?width=800",
            "caption": "Bharathi Park, Puducherry heritage quarter"
      },
      {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/PONDICHERRY_BHARATHI_PARK.JPG?width=800",
            "caption": "Puducherry French Quarter park"
      }
],
    culturalSignificance: "Villianur terracotta honors village guardian deities such as Lord Aiyanar, while Pondicherry's French Quarter and Auroville fostered a world-renowned contemporary studio pottery movement.",
    creationProcess: [
      {
            "step": 1,
            "title": "Thanayanpet Green Clay Harvesting",
            "desc": "Pliant green clay is harvested from local lake beds and blended with fine river sand to prevent firing cracks."
      },
      {
            "step": 2,
            "title": "Wheel Throwing & Hand Modeling",
            "desc": "Cylindrical bodies of horses and deities are thrown on wheels, with heads and limbs sculpted by hand."
      },
      {
            "step": 3,
            "title": "Ornamental Clay Appliqu\u00e9",
            "desc": "Clay bells, garlands, and ceremonial saddles are pressed and attached to the leather-hard sculptures."
      },
      {
            "step": 4,
            "title": "Straw & Firewood Open Kiln Firing",
            "desc": "Sculptures are baked in open-pit kilns insulated with straw and clay, producing rich terracotta warmth."
      }
],
    summary: "Centuries-old GI-tagged terracotta temple sculptures made from green clay found in the local Thanayanpet lake bed, alongside distinctive French-influenced glazed art ceramics.",
    historicalContext: "Practiced for over 20 generations by the Kulalar community in Villianur. In the 20th century, the French-Creole cultural encounter and the founding of Auroville fostered a world-renowned contemporary studio pottery movement.",
    geographicSpread: "Villianur heritage village, Pondicherry French White Town, and Auroville.",
    techniquesAndPigments: "Fine green clay and river sand hand-thrown on wheels and hand-sculpted; baked in straw-and-wood kilns without glazing for traditional terracotta, or fired with ash glazes for art stoneware.",
    keyMotifs: ["Aiyanar sacred horses with ceremonial bells and garlands", "Statues of Lord Ganesha, Durga, and village guardian deities", "Graceful French colonial ceramic urns and tableware", "Perforated terracotta garden lamps and wind chimes"],
    masterArtists: ["V. K. Munusamy (Padma Shri 2020 - Villianur Master)", "Ray Meeker & Deborah Smith (Founders of Golden Bridge Pottery)"]
  }
];

/**
 * Migration & Diffusion Routes across India
 */
const ART_DIFFUSION_ROUTES = [
  {
    id: "route-mughal-pahari",
    title: "Mughal Atelier Migration to Pahari Foothills",
    from: [27.1767, 78.0081], // Agra / Delhi
    to: [32.0998, 76.2691],   // Kangra Valley
    description: "Following the 1739 sack of Delhi by Nadir Shah, Mughal court miniaturists moved to the hill states of Kangra and Basohli, fusing imperial realism with lyrical Pahari Vaishnavite devotion.",
    color: "#D97706"
  },
  {
    id: "route-ajanta-sigiriya",
    title: "Classical Cave Mural Spread to Central & South India",
    from: [19.6967, 72.7699], // Maharashtra
    to: [10.5276, 76.2144],   // Kerala Temple Murals
    description: "The classical fresco-secco techniques refined in the ancient caves of western India radiated south into the monumental Panchavarna murals of Kerala and Tamil Nadu.",
    color: "#4338CA"
  },
  {
    id: "route-chola-maritime",
    title: "Chola Maritime Sculptural Influence",
    from: [10.7870, 79.1378], // Thanjavur / Kaveri Delta
    to: [11.6234, 92.7265],   // Andaman & Bay of Bengal Maritime routes
    description: "Imperial Chola naval expeditions spread Dravidian bronze casting and sacred iconography across the Bay of Bengal into the Andaman sea and maritime Southeast Asia.",
    color: "#0D9488"
  },
  {
    id: "route-pattachitra-kalighat",
    title: "Eastern Scroll Art to Urban Kalighat Transition",
    from: [19.8135, 85.8312], // Raghurajpur / Puri
    to: [22.5204, 88.3426],   // Kalighat / Kolkata
    description: "Rural Patua scroll painters from coastal Odisha and Midnapore migrated into colonial Calcutta, transforming sacred scroll idioms into rapid, satirical bazaar watercolors.",
    color: "#E11D48"
  },
  {
    id: "route-tribal-belt",
    title: "Central Indian Tribal Art Continuum",
    from: [19.6967, 72.7699], // Warli (Maharashtra)
    to: [22.9467, 81.0805],   // Gond (Madhya Pradesh)
    description: "An unbroken prehistoric aesthetic continuum linking the rock art of Bhimbetka, Warli geometric murals, and Gond visionary animism across the central Indian forested belt.",
    color: "#15803D"
  },
  {
    id: "route-himalayan-thangka",
    title: "Himalayan Buddhist Sacred Art Highway",
    from: [34.1526, 77.5771], // Ladakh
    to: [27.3389, 88.6065],   // Sikkim
    description: "Centuries of monastic exchange connecting Ladakh, Himachal, and Sikkim, following Buddhist iconometric canons to paint sacred Thangkas and Mandalas.",
    color: "#D97706"
  }
];

/**
 * Curated Guided Art Trails across India
 */
const GUIDED_TRAILS = [
  {
    id: "trail-pan-india",
    title: "Grand Pan-Indian Heritage Odyssey",
    subtitle: "From Kashmir's papier-mâché to Kanyakumari's temple bronzes",
    stops: ["jammu_kashmir", "delhi", "rajasthan", "maharashtra", "kerala", "tamil_nadu", "odisha", "assam", "ladakh"],
    description: "A sweeping grand journey traversing the majestic visual diversity of India across mountains, deserts, coastal deltas, and river islands."
  },
  {
    id: "trail-folk-tribal",
    title: "Indigenous Tribal & Living Canvases",
    subtitle: "Animist roots, ritual mud walls, and ancient bards",
    stops: ["warli", "jharkhand", "madhya_pradesh", "chhattisgarh", "bihar", "nagaland"],
    description: "Explore the living pulse of India's indigenous communities—from Warli geometric circles and Sohrai comb-carving to Bastar lost-wax bell metal."
  },
  {
    id: "trail-royal-miniatures",
    title: "Imperial & Courtly Masterpieces",
    subtitle: "Gold-leaf, single squirrel-hair brushes, and royal ateliers",
    stops: ["delhi", "uttar_pradesh", "himachal_pradesh", "rajasthan", "tamil_nadu"],
    description: "Discover how royal patronage across Delhi, the Himalayan valleys, Mewar, and Thanjavur produced dazzling jewel-like miniature paintings."
  },
  {
    id: "trail-northeast-wonders",
    title: "Seven Sisters & Sikkim Sacred Arts",
    subtitle: "River island masks, living bamboo craft, and thangka scrolls",
    stops: ["assam", "arunachal_pradesh", "meghalaya", "nagaland", "manipur", "mizoram", "tripura", "sikkim"],
    description: "An awe-inspiring journey through the eastern Himalayas and Northeast India, featuring sacred monastic arts, warrior textiles, and organic bamboo masterpieces."
  }
];

/**
 * Interactive Art Knowledge Quiz Questions
 */
const QUIZ_QUESTIONS = [
  {
    question: "Which world-famous Indian art form from Maharashtra uses elementary geometric shapes (circle, triangle, square) and white rice paste to depict the Tarpa dance?",
    options: [
      "Madhubani Painting",
      "Warli Tribal Art",
      "Cheriyal Scroll",
      "Pattachitra"
    ],
    correct: 1,
    explanation: "Warli art from Palghar/Thane uses elementary circles (sun/moon), triangles (mountains), and squares (sacred space) painted with rice paste."
  },
  {
    question: "In which state's river island of Majuli do craftsmen fashion sacred bamboo and clay masks (Mukha Shilpa) for theatrical Bhaona performances?",
    options: [
      "West Bengal",
      "Assam",
      "Tripura",
      "Manipur"
    ],
    correct: 1,
    explanation: "Majuli river island in Assam is the spiritual home of Mukha Shilpa mask-making, initiated in the 15th century by Saint Srimanta Sankardeva."
  },
  {
    question: "Which South Indian classical art form is celebrated for its 3D gesso relief, genuine 22-karat gold foil overlay, and embedded Jaipur glass stones?",
    options: [
      "Thanjavur (Tanjore) Painting",
      "Kalamkari",
      "Kalighat Art",
      "Pichwai"
    ],
    correct: 0,
    explanation: "Thanjavur paintings feature gesso relief with 22K gold foil and gems, flourishing under Nayaka and Maratha kings in Tamil Nadu."
  },
  {
    question: "Sohrai and Khovar wall art, created with tooth-cut combs and natural manganese and kaolin mud, received a GI tag in 2020 for which state?",
    options: [
      "Jharkhand",
      "Chhattisgarh",
      "Madhya Pradesh",
      "Odisha"
    ],
    correct: 0,
    explanation: "Sohrai and Khovar are matriarchal tribal wall arts practiced by Santhal and Oraon women in Hazaribagh, Jharkhand."
  },
  {
    question: "Which rare textile art practiced in Nirona, Gujarat, uses boiled castor oil kneaded with mineral pigments and stretched into thin threads using a metal stylus?",
    options: [
      "Phulkari",
      "Rogan Art",
      "Kalamkari",
      "Aipan"
    ],
    correct: 1,
    explanation: "Rogan Art is preserved exclusively by the Khatri family of Nirona in Kutch, Gujarat, using castor oil paste spun into delicate threads."
  },
  {
    question: "In which Union Territory did visionary artist Nek Chand secretly build a world-renowned 40-acre folk art kingdom entirely out of recycled demolition waste and broken bangles?",
    options: [
      "Delhi",
      "Chandigarh",
      "Puducherry",
      "Ladakh"
    ],
    correct: 1,
    explanation: "The Rock Garden of Chandigarh was constructed secretly by Nek Chand over 18 years using industrial waste, porcelain, and glass bangles."
  }
];
