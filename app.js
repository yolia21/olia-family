/**
 * Olia Family Historical Website - Interactivity & Genealogy Database
 */

// Comprehensive demographic database containing every fact, date, location, and relationship
const familyDatabase = [
    {
        id: "kasim-olia",
        name: "Kasim Olia",
        relation: "Family Patriarch",
        branch: "root",
        birthDate: "Circa 1850",
        birthPlace: "Rander, Surat District, Gujarat, India",
        deathDate: "Unknown",
        deathPlace: "Unknown",
        spouse: "Unknown",
        description: "Kasim Olia is the earliest clearly documented ancestor of the family. He was a respected merchant within the Surti Sunni Bohra community in Rander. Reflecting the active maritime networks of Gujarati Muslims during the late nineteenth century, Kasim engaged in extensive commercial activity extending to Ceylon (Sri Lanka) and the Maldives. He formed strategic marital alliances with prominent merchant lineages, strengthening the family's social and commercial standing across the Indian Ocean world."
    },
    {
        id: "hashim-kasim",
        name: "Hashim Kasim Olia",
        relation: "Son of Kasim Olia",
        branch: "hashimi",
        birthDate: "Unknown",
        birthPlace: "Rander, Surat District, Gujarat, India",
        deathDate: "Unknown",
        deathPlace: "Rander, Surat District, Gujarat, India",
        spouse: "Rasoolbibi Ajum Piperdy",
        description: "Hashim Kasim Olia co-founded the family's two principal branches. Unlike his brother Ismail who migrated to Burma, Hashim remained in Rander to manage the family's local interests and trading networks. His marriage to Rasoolbibi Ajum Piperdy consolidated the family's ties with notable Indo-Mauritian trading networks. He had two sons and one daughter, cementing the Hashimi branch in Rander."
    },
    {
        id: "rasoolbibi-piperdy",
        name: "Rasoolbibi Ajum Piperdy",
        relation: "Wife of Hashim Kasim Olia",
        branch: "hashimi",
        birthDate: "1895",
        birthPlace: "Rander, Surat District, Bombay Presidency, British India",
        deathDate: "March 1, 195X",
        deathPlace: "Karachi, Sindh, Pakistan",
        spouse: "Hashim Kasim Olia",
        description: "Rasoolbibi was the daughter of Ajum Goolam Hossen Piperdy, a highly notable and successful Indo-Mauritian merchant. Her marriage to Hashim Kasim Olia linked the Olia family directly to influential oceanic trading systems. Following the Partition of British India, she migrated to Pakistan and lived her final years in Karachi, passing away on March 1 in the 1950s."
    },
    {
        id: "ismail-kasim",
        name: "Ismail Kasim Olia",
        relation: "Son of Kasim Olia",
        branch: "ismaili",
        birthDate: "Unknown",
        birthPlace: "Rander, Surat District, Gujarat, India",
        deathDate: "Unknown",
        deathPlace: "Rangoon (Yangon), Burma (Myanmar)",
        spouse: "Mohtarma (Madam) Ashraf",
        description: "Ismail Kasim Olia founded the Ismaili branch of the family. In the early twentieth century, he migrated to Yangon (Rangoon), Burma, following the colonial trade boom. He established a prosperous, prominent mercantile household in Rangoon where he raised three sons. Despite the geographic distance, he maintained close connections with his brother Hashim in Rander, laying the groundwork for future endogamous reunions."
    },
    {
        id: "madam-ashraf",
        name: "Mohtarma Ashraf (Madam Ashraf)",
        relation: "Wife of Ismail Kasim Olia",
        branch: "ismaili",
        birthDate: "Unknown",
        birthPlace: "Rander, Surat District, Gujarat, India",
        deathDate: "Unknown",
        deathPlace: "Rander, Surat District, Gujarat, India",
        spouse: "Ismail Kasim Olia",
        description: "Mohtarma Ashraf was a native of Rander. Her marriage to Ismail Kasim Olia reinforced the family's strong preference for endogamous, community-based alliances. After years spent establishing the family's presence in Burma, she returned to Rander, where she eventually passed away and was laid to rest."
    },
    {
        id: "kasim-h",
        name: "Kasim H. Olia",
        relation: "Son of Hashim Kasim Olia",
        branch: "hashimi",
        birthDate: "Unknown",
        birthPlace: "Rander, Surat District, Gujarat, India",
        deathDate: "June 1997",
        deathPlace: "Karachi, Sindh, Pakistan",
        spouse: "Hafsa Piperdi",
        description: "Kasim H. Olia was born in Rander and grew up within the traditional merchant environment. He later participated in the Partition-era migration, moving to Sindh, Pakistan, where he helped re-establish the family network. He lived in Karachi until his death in June 1997."
    },
    {
        id: "hafsa-piperdi",
        name: "Hafsa Piperdi",
        relation: "Wife of Kasim H. Olia",
        branch: "hashimi",
        birthDate: "Unknown",
        birthPlace: "Rander, Surat District, Gujarat, India",
        deathDate: "October 31, 2007",
        deathPlace: "Karachi, Sindh, Pakistan",
        spouse: "Kasim H. Olia",
        description: "Hafsa Piperdi was born in Rander and married Kasim H. Olia, maintaining the family's endogamous pattern of aligning with the Piperdy/Piperdi mercantile houses. She migrated with her husband to Karachi, Pakistan, where she passed away on October 31, 2007."
    },
    {
        id: "ali-hashim",
        name: "Ali Hashim Olia",
        relation: "Son of Hashim Kasim Olia",
        branch: "hashimi",
        birthDate: "November 5, 1912",
        birthPlace: "Rander, Surat District, Gujarat, India",
        deathDate: "October 22, 1978",
        deathPlace: "Karachi, Sindh, Pakistan",
        spouse: "N/A",
        description: "Ali Hashim Olia was born in Rander during the pre-World War I era. He was part of the generation that witnessed the dramatic shifts of the family between Rander, Burma, and eventually Pakistan. Following Partition in 1947, he relocated to Karachi, where he passed away on October 22, 1978."
    },
    {
        id: "mohammed-hashim",
        name: "Mohammed Hashim Olia",
        relation: "Son of Hashim Kasim Olia",
        branch: "hashimi",
        birthDate: "June 1912",
        birthPlace: "Rander, Surat District, Gujarat, India",
        deathDate: "May 23, 1968",
        deathPlace: "Karachi, Sindh, Pakistan",
        spouse: "Rehmatbibi Ahmed Piperdi",
        description: "Mohammed Hashim Olia was born in Rander in the summer of 1912. He was a merchant who married Rehmatbibi Ahmed Piperdi, bringing together families connected across Mauritius, Gujarat, and Karachi. Following the Partition, he migrated to Karachi, Pakistan, where he passed away on May 23, 1968."
    },
    {
        id: "rehmatbibi-piperdi",
        name: "Rehmatbibi Ahmed Piperdi",
        relation: "Wife of Mohammed Hashim Olia",
        branch: "hashimi",
        birthDate: "December 7, 1917",
        birthPlace: "Mauritius (Indian Ocean)",
        deathDate: "February 5, 1990",
        deathPlace: "Karachi, Sindh, Pakistan",
        spouse: "Mohammed Hashim Olia",
        description: "Rehmatbibi Ahmed Piperdi was born in Mauritius, reflecting the global footprint of the Surti Sunni Bohra trading network in the Indian Ocean. She married Mohammed Hashim Olia and eventually settled in Karachi, Pakistan, where she passed away on February 5, 1990."
    },
    {
        id: "yusuf-ismail",
        name: "Yusuf Ismail Olia",
        relation: "Son of Ismail Kasim Olia",
        branch: "ismaili",
        birthDate: "Circa 1910",
        birthPlace: "Rangoon (Yangon), Burma (Myanmar)",
        deathDate: "September 6, 1975",
        deathPlace: "Karachi, Sindh, Pakistan",
        spouse: "Aishabibi Hashim Olia",
        description: "Yusuf Ismail Olia was a prominent figure who lived a highly successful life. He was a wealthy businessman in Rangoon and distinguished himself by playing professional football (soccer) for the Burmese national team—an extraordinary achievement for a South Asian Muslim merchant of his time. In 1942, he led his family through a perilous escape from the Japanese invasion of Burma, returning to Rander. He later migrated to Karachi, Pakistan, where he died on September 6, 1975."
    },
    {
        id: "aishabibi-hashim",
        name: "Aishabibi Hashim Olia",
        relation: "Wife of Yusuf Ismail Olia / Daughter of Hashim",
        branch: "hashimi",
        birthDate: "September 16, 1916",
        birthPlace: "Rander, Surat District, Gujarat, India",
        deathDate: "January 17, 1995",
        deathPlace: "Karachi, Sindh, Pakistan",
        spouse: "Yusuf Ismail Olia",
        description: "Aishabibi Hashim Olia was born in Rander and married her cousin Yusuf Ismail Olia, uniting the Hashimi and Ismaili branches. During the Japanese invasion of Burma in 1942, she sustained injuries while fleeing the country while pregnant. Despite these hardships, she safely delivered their son Hashim in Rander. She later migrated to Karachi, where she passed away on January 17, 1995."
    },
    {
        id: "ghulam-mohammed",
        name: "Ghulam Mohammed Olia",
        relation: "Son of Ismail Kasim Olia",
        branch: "ismaili",
        birthDate: "Unknown",
        birthPlace: "Rander, Surat District, Gujarat, India",
        deathDate: "Unknown",
        deathPlace: "Rander, Surat District, Gujarat, India",
        spouse: "Unknown",
        description: "Ghulam Mohammed Olia was born in Rander. As part of the Ismaili branch, he maintained local ties in Gujarat and lived his entire life in his ancestral town of Rander, where he also passed away."
    },
    {
        id: "kasim-ismail",
        name: "Kasim Ismail Olia",
        relation: "Son of Ismail Kasim Olia",
        branch: "ismaili",
        birthDate: "Unknown",
        birthPlace: "Rander, Surat District, Gujarat, India",
        deathDate: "Unknown",
        deathPlace: "Rander, Surat District, Gujarat, India",
        spouse: "Unknown",
        description: "Kasim Ismail Olia was born and died in Rander, Gujarat. CRITICAL NOTE: The descendants of Kasim Ismail Olia are notable for staying behind in Rander, India, instead of migrating to Karachi, Pakistan during the Partition in 1947. This branch preserves the continuous, unbroken physical connection of the Olia family to their historical homeland in Gujarat."
    }
];

// Initialize DOM elements
document.addEventListener("DOMContentLoaded", () => {
    const directoryGrid = document.getElementById("directory-grid");
    const searchInput = document.getElementById("member-search");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const modal = document.getElementById("detail-modal");
    const modalClose = document.getElementById("modal-close");
    const treeNodes = document.querySelectorAll(".tree-node");

    // Header styling on scroll
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        trackActiveSection();
    });

    // Mobile Menu toggling
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    navToggle.addEventListener("click", () => {
        navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
        if (navMenu.style.display === "flex") {
            navMenu.style.flexDirection = "column";
            navMenu.style.position = "absolute";
            navMenu.style.top = "100%";
            navMenu.style.left = "0";
            navMenu.style.width = "100%";
            navMenu.style.background = "rgba(5, 8, 8, 0.95)";
            navMenu.style.padding = "2rem";
            navMenu.style.gap = "1.5rem";
            navMenu.style.borderBottom = "1px solid var(--accent-gold)";
        }
    });

    // Reset mobile menu layout on screen resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navMenu.removeAttribute("style");
        }
    });

    // Generate Directory Cards
    function renderDirectory(records) {
        directoryGrid.innerHTML = "";
        
        if (records.length === 0) {
            directoryGrid.innerHTML = `<div class="glass-panel" style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No records match your query.</div>`;
            return;
        }

        records.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");
            card.setAttribute("data-id", member.id);
            
            let tagClass = "tag-root";
            let tagText = "Patriarch";
            if (member.branch === "hashimi") {
                tagClass = "tag-hashimi";
                tagText = "Hashimi Branch";
            } else if (member.branch === "ismaili") {
                tagClass = "tag-ismaili";
                tagText = "Ismaili Branch";
            }

            card.innerHTML = `
                <div class="member-header">
                    <h4 class="member-name">${member.name}</h4>
                    <span class="member-relation">${member.relation}</span>
                </div>
                <div class="member-meta">
                    <span class="meta-label">Born:</span>
                    <span class="meta-value">${member.birthDate} (${member.birthPlace.split(',')[0]})</span>
                </div>
                <div class="member-meta">
                    <span class="meta-label">Died:</span>
                    <span class="meta-value">${member.deathDate} (${member.deathPlace.split(',')[0]})</span>
                </div>
                <div class="member-meta" style="margin-bottom: 1.5rem;">
                    <span class="meta-label">Spouse:</span>
                    <span class="meta-value">${member.spouse}</span>
                </div>
                <span class="member-tag ${tagClass}">${tagText}</span>
            `;

            // Click event to open modal
            card.addEventListener("click", () => openModal(member.id));
            directoryGrid.appendChild(card);
        });
    }

    // Render initially
    renderDirectory(familyDatabase);

    // Search input handler
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        filterAndSearch(query, getActiveFilter());
    });

    // Filter buttons handler
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterAndSearch(searchInput.value.toLowerCase(), btn.getAttribute("data-filter"));
        });
    });

    function getActiveFilter() {
        const activeBtn = document.querySelector(".filter-btn.active");
        return activeBtn ? activeBtn.getAttribute("data-filter") : "all";
    }

    function filterAndSearch(query, filter) {
        let results = familyDatabase;

        // Apply Category Filters
        if (filter === "hashimi") {
            results = results.filter(m => m.branch === "hashimi");
        } else if (filter === "ismaili") {
            results = results.filter(m => m.branch === "ismaili");
        } else if (filter === "rander") {
            results = results.filter(m => m.birthPlace.includes("Rander") || m.deathPlace.includes("Rander"));
        } else if (filter === "karachi") {
            results = results.filter(m => m.deathPlace.includes("Karachi"));
        }

        // Apply Text Search Query
        if (query) {
            results = results.filter(m => 
                m.name.toLowerCase().includes(query) ||
                m.relation.toLowerCase().includes(query) ||
                m.birthPlace.toLowerCase().includes(query) ||
                m.deathPlace.toLowerCase().includes(query) ||
                m.birthDate.toLowerCase().includes(query) ||
                m.deathDate.toLowerCase().includes(query) ||
                m.spouse.toLowerCase().includes(query) ||
                m.description.toLowerCase().includes(query)
            );
        }

        renderDirectory(results);
    }

    // Modal Display Logic
    function openModal(id) {
        const member = familyDatabase.find(m => m.id === id || m.id.replace('-', '') === id.replace('-', ''));
        if (!member) return;

        document.getElementById("modal-title").textContent = member.name;
        
        let branchText = "Olia Patriarchal Lineage";
        if (member.branch === "hashimi") branchText = "Hashimi Branch (Rander/Karachi)";
        if (member.branch === "ismaili") branchText = "Ismaili Branch (Rander/Burma/Karachi)";
        document.getElementById("modal-branch").textContent = branchText;

        document.getElementById("modal-birth").textContent = member.birthDate;
        document.getElementById("modal-birthplace").textContent = member.birthPlace;
        document.getElementById("modal-death").textContent = member.deathDate;
        document.getElementById("modal-deathplace").textContent = member.deathPlace;
        
        if (member.spouse === "N/A" || member.spouse === "Unknown") {
            document.getElementById("modal-spouse-row").style.display = "none";
        } else {
            document.getElementById("modal-spouse-row").removeAttribute("style");
            document.getElementById("modal-spouse").textContent = member.spouse;
        }

        document.getElementById("modal-description").innerHTML = member.description;

        modal.classList.add("active");
    }

    modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });

    // Escape key closes modal
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            modal.classList.remove("active");
        }
    });

    // Wire up Family Tree nodes to Modal
    treeNodes.forEach(node => {
        node.addEventListener("click", () => {
            const id = node.getAttribute("data-id");
            if (id) openModal(id);
        });
    });

    // Active Section navigation tracking
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function trackActiveSection() {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Adjust threshold for sticky header
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    }
});
