"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import FamilyTree from './components/FamilyTree';
import { familyDatabase, FamilyMember } from './data/familyData';

// Dynamically import Leaflet Map with SSR disabled to prevent "window is not defined" server-side errors
const MigrationMap = dynamic(() => import('./components/MigrationMap'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[550px] bg-bg-secondary/60 rounded-xl flex items-center justify-center border border-accent-gold/15">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-2 border-accent-gold border-t-transparent rounded-full animate-spin"></div>
        <p className="text-accent-gold font-serif text-sm uppercase tracking-wider">Loading Ancestral Map...</p>
      </div>
    </div>
  )
});

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track header scrolling and section highlights
  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);

      // Section tracking
      const sections = ["home", "origins", "community", "lineage", "genealogy"];
      let current = "home";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter and search logic for the directory grid
  const filteredMembers = familyDatabase.filter(member => {
    // Apply category filters
    if (activeFilter === "hashimi" && member.branch !== "hashimi") return false;
    if (activeFilter === "ismaili" && member.branch !== "ismaili") return false;
    if (activeFilter === "rander" && !member.birthPlace.includes("Rander") && !member.deathPlace.includes("Rander")) return false;
    if (activeFilter === "karachi" && !member.deathPlace.includes("Karachi")) return false;

    // Apply text search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        member.name.toLowerCase().includes(q) ||
        member.relation.toLowerCase().includes(q) ||
        member.birthPlace.toLowerCase().includes(q) ||
        member.deathPlace.toLowerCase().includes(q) ||
        member.birthDate.toLowerCase().includes(q) ||
        member.deathDate.toLowerCase().includes(q) ||
        member.spouse.toLowerCase().includes(q) ||
        member.description.toLowerCase().includes(q)
      );
    }

    return true;
  });

  const selectedMember = familyDatabase.find(m => m.id === selectedMemberId);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const openMemberDetail = (id: string) => {
    setSelectedMemberId(id);
  };

  const closeMemberDetail = () => {
    setSelectedMemberId(null);
  };

  return (
    <div className="relative min-h-screen text-text-primary">
      
      {/* 1. Header & Navigation */}
      <header className={`fixed top-0 left-0 w-full z-[1200] transition-all duration-300 ${headerScrolled ? 'bg-[#050808]/95 py-2 shadow-2xl border-b border-accent-gold/10' : 'bg-transparent py-4'}`}>
        <div className="flex justify-between items-center px-6 max-w-7xl mx-auto w-full">
          <div className="flex flex-col">
            <a href="#home" className="font-serif font-bold text-lg tracking-[0.15em] text-text-primary hover:text-accent-gold-bright transition-colors" onClick={closeMobileMenu}>
              <span>THE OLIA FAMILY</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-accent-gold -mt-1">Historical Chronicle</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {["home", "origins", "community", "lineage", "genealogy"].map((section) => (
                <li key={section}>
                  <a 
                    href={`#${section}`} 
                    className={`text-xs uppercase font-medium tracking-widest transition-colors py-1 relative border-b border-transparent hover:text-accent-gold-bright ${activeSection === section ? 'text-accent-gold-bright border-accent-gold-bright' : 'text-text-secondary'}`}
                  >
                    {section === "genealogy" ? "Genealogy" : section === "lineage" ? "Lineage" : section}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger Menu Toggle */}
          <button 
            className="md:hidden text-text-primary p-2 focus:outline-none z-[1600] relative" 
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Sliding Drawer & Overlay */}
      <div className={`fixed inset-0 bg-black/75 backdrop-blur-sm z-[1400] md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={closeMobileMenu} />
      
      <div className={`fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-[#050808]/98 border-l border-accent-gold/25 shadow-2xl flex flex-col p-8 pt-24 gap-6 z-[1500] md:hidden transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {["home", "origins", "community", "lineage", "genealogy"].map((section) => (
          <a 
            key={section}
            href={`#${section}`} 
            className={`text-sm uppercase font-semibold tracking-widest py-2 border-b border-white/5 transition-colors ${activeSection === section ? 'text-accent-gold-bright' : 'text-text-secondary hover:text-accent-gold'}`}
            onClick={closeMobileMenu}
          >
            {section === "genealogy" ? "Genealogy Tree" : section === "lineage" ? "Lineage & Timeline" : section}
          </a>
        ))}
      </div>

      {/* 2. Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center relative text-center px-4 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(5, 8, 8, 0.45), rgba(5, 8, 8, 0.9)), url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"80\" height=\"80\" viewBox=\"0 0 80 80\"><path d=\"M40 0 L80 40 L40 80 L0 40 Z\" fill=\"none\" stroke=\"rgba(197, 168, 128, 0.03)\" stroke-width=\"1\"/></svg>')" }}>
        <div className="max-w-4xl mx-auto z-10">
          <span className="text-xs tracking-[0.4em] text-accent-gold uppercase mb-4 block font-medium animate-pulse">Mercantile Lineage & Heritage</span>
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold uppercase tracking-wide mb-6 bg-gradient-to-r from-white via-text-secondary to-accent-gold bg-clip-text text-transparent leading-none">The Olia Family</h1>
          <p className="text-base md:text-lg text-text-secondary font-light max-w-2xl mx-auto mb-10">Tracing a distinct Turkic-origin lineage from the Central Asian steppes through Gujarat, Burma, and Pakistan.</p>
          <a href="#origins" className="inline-block px-8 py-3.5 border border-accent-gold text-text-primary text-xs uppercase tracking-widest font-semibold rounded hover:bg-accent-gold hover:text-bg-primary hover:shadow-[0_0_20px_rgba(197,168,128,0.3)] transition-all transform hover:-translate-y-0.5">Explore History</a>
        </div>
      </section>

      {/* Overview Subsection */}
      <section id="overview" className="py-20 px-6 max-w-7xl mx-auto w-full -mt-20">
        <div className="glass-panel rounded-xl p-6 md:p-10 grid md:grid-cols-[1.5fr_1fr] gap-10 items-start">
          <div>
            <span className="text-[10px] text-accent-gold uppercase tracking-[0.2em] font-semibold block mb-1">Abstract & Overview</span>
            <h2 className="text-3xl font-serif text-text-primary mb-6">The Chronicle</h2>
            <p className="text-text-secondary text-sm md:text-base font-light leading-relaxed mb-4">
              The Olia family is a Sunni Muslim mercantile lineage originating from <strong>Rander</strong> in the Surat District of Gujarat, India. This study traces the family’s ancestry from the Central Asian steppes—specifically the Bayat tribe of the Oghuz Turks—to Gujarat, outlines its integration within the Surti Sunni Bohra community, and documents its genealogical development from the mid-nineteenth century onward.
            </p>
            <p className="text-text-secondary text-sm md:text-base font-light leading-relaxed">
              Particular attention is given to the family’s maritime trading activities, patterns of endogamy, migrations to Burma (Myanmar) and Pakistan, and the preservation of lineage identity. The Olia family represents a distinct Turkic-origin lineage within the broader Sunni Bohra population of western India, maintaining a rich historical memory spanning continents and centuries.
            </p>
          </div>
          
          <div className="bg-accent-emerald/10 border border-accent-gold/25 rounded-lg p-6 md:p-8 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[7.5rem] text-accent-gold/3 pointer-events-none select-none">أولياء</div>
            <div className="relative z-10">
              <span className="font-serif text-3xl text-accent-gold-bright block mb-1">Olia</span>
              <span className="font-serif text-4xl block text-text-primary mb-6">أولياء</span>
              <span className="text-[10px] text-accent-gold uppercase tracking-wider block mb-2">Etymology</span>
              <p className="text-xs md:text-sm font-light text-text-secondary leading-relaxed mb-4">
                The surname <strong>“Olia”</strong> is derived from the Arabic term <em>awliyāʾ</em> (أولياء), the plural of <em>walī</em>, meaning <strong>“saint,” “guardian,”</strong> or <strong>“friend of God.”</strong>
              </p>
              <p className="text-[11px] text-text-muted leading-relaxed italic border-t border-accent-gold/10 pt-4">
                This origin is consistent with Islamic naming conventions among Muslim trading families in western India and aligns with the family’s historical identification with Islamic scholarship and piety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Origins & Ancestry */}
      <section id="origins" className="py-20 border-t border-accent-gold/5 bg-bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-12">
            <span className="text-xs text-accent-gold uppercase tracking-[0.2em] font-semibold block mb-1">Deep Roots</span>
            <h2 className="text-3xl font-serif tracking-wider uppercase after:content-[''] after:block after:w-16 after:h-[1px] after:bg-accent-gold after:mx-auto after:mt-3">Origins & Ancestry</h2>
          </div>

          {/* Dynamic Leaflet Map Container */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif text-lg text-accent-gold uppercase tracking-wider">Ancestral Migration Map</h3>
              <span className="text-[10px] text-text-muted italic">Click markers to view waypoint history</span>
            </div>
            <MigrationMap />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="glass-panel p-6 rounded-lg">
              <h3 className="font-serif text-lg text-accent-gold flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-accent-gold-bright" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
                The Central Asian Steppes
              </h3>
              <p className="text-xs md:text-sm font-light text-text-secondary leading-relaxed">
                The deep ancestry of the Olia family is rooted in the ancient <strong>Bayat tribe</strong> of the <strong>Oghuz Turks</strong>. Historical alignments place their origin in <strong>Yangikent</strong>, Central Asia, during the ninth and tenth centuries. During this period, the Oghuz Turkic tribes roamed the vast Eurasian steppes, establishing foundational elements of Turkic culture and military power.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-lg">
              <h3 className="font-serif text-lg text-accent-gold flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-accent-gold-bright" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" /></svg>
                Conflict with the Mongols
              </h3>
              <p className="text-xs md:text-sm font-light text-text-secondary leading-relaxed">
                Geopolitical upheaval reshaped the Bayat lineage. In the twelfth century, Mongol advancements forced the Bayat tribe to migrate westward to <strong>Neyshabur</strong> (Nishapur) in Persia. There, the Bayats declared war against the Mongols. In a fierce clash, they killed Genghis Khan’s son-in-law, <strong>Toghuchar</strong>. Angered by this, the Khan returned with a massive force, destroying Neyshabur and dispersing the Bayats in multiple directions.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-lg">
              <h3 className="font-serif text-lg text-accent-gold flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-accent-gold-bright" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Refuge & Subcontinent Migration
              </h3>
              <p className="text-xs md:text-sm font-light text-text-secondary leading-relaxed">
                Seeking refuge from the Mongol onslaught, the Indian branch of the Bayats fled south-east, joining the <strong>Delhi Sultanate</strong>. Following Alauddin Khilji's southern campaigns and conquest of Gujarat in the fourteenth century, they migrated south to Gujarat. Over time, the Turkic tribal designation <strong>"Bayat"</strong> localized into the surname <strong>"Bhayat"</strong> (exemplified by the closely related Bhayat family of Kholvad) before the lineage integrated into the mercantile port of Rander.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-lg">
              <h3 className="font-serif text-lg text-accent-gold flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-accent-gold-bright" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" /></svg>
                A Distinct Turkic Identity
              </h3>
              <p className="text-xs md:text-sm font-light text-text-secondary leading-relaxed">
                The geographical localization in <strong>Rander</strong>, along the Tapti River in Surat, placed the family in a bustling maritime hub. Rander's proximity to the Arabian Sea attracted merchants from across the western Indian Ocean. Within this cosmopolitan space, the Olia lineage preserved its distinct identity, distinguishing its Turkic genetic descent from the local communities of Gujarat.
              </p>
            </div>
          </div>

          {/* Genetic Confirmation */}
          <div className="bg-gradient-to-br from-accent-emerald/20 to-[#050808]/75 border border-accent-gold/25 p-6 md:p-8 rounded-xl flex flex-col md:flex-row gap-6 items-center">
            <svg className="w-14 h-14 text-accent-gold-bright flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h4 className="font-serif font-bold text-accent-gold-bright text-lg">Genetic Confirmation</h4>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-accent-gold-dark text-bg-primary">Y-DNA Verified</span>
              </div>
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                Recent Y-DNA genetic testing has provided definitive insights into the family’s deep origins, shifting the historical narrative away from a coastal Makrani origin. The analysis confirmed a direct <strong>Y-DNA match between the Olia family and the Bhayat family of Kholvad</strong>. This biological connection corroborates the lineage’s descent from the Oghuz Turkic Bayat tribe, aligning perfectly with historical migration records through the Delhi Sultanate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Community Affiliation */}
      <section id="community" className="py-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <span className="text-xs text-accent-gold uppercase tracking-[0.2em] font-semibold block mb-1">Social Context</span>
            <h2 className="text-3xl font-serif tracking-wider uppercase mb-6 after:content-[''] after:block after:w-16 after:h-[1px] after:bg-accent-gold after:mt-3">Community Affiliation</h2>
            <h3 className="text-xl font-serif text-accent-gold mb-3">The Surti Sunni Bohras</h3>
            <p className="text-text-secondary text-sm md:text-base font-light leading-relaxed mb-4">
              The Olia family integrated into the <strong>Surti Sunni Bohra</strong> community, a Sunni Muslim mercantile group established in Gujarat for approximately one millennium. The term Bohra derives from the Gujarati verb <em>vohrvu</em>, meaning <strong>“to trade,”</strong> reflecting the community's deep-rooted connection to commerce.
            </p>
            <p className="text-text-secondary text-sm md:text-base font-light leading-relaxed mb-4">
              The Sunni Bohras of Gujarat are historically understood to have converted from Tayyibi Ismaʿilism to Sunni Islam. They traditionally trace their ancestral origins to Kufan Arabs and Hadrami Arabs who settled along the Gulf of Cambay during the seventeenth century.
            </p>
            <p className="text-text-secondary text-sm md:text-base font-light leading-relaxed">
              The community places considerable emphasis on genealogical memory, Islamic learning, and strict endogamous marriage practices, all of which have been central to preserving the identity and cohesiveness of the Olia family through generations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-accent-emerald/10 border border-accent-gold/10 rounded-lg p-6 text-center hover:translate-y-[-4px] hover:border-accent-gold hover:bg-accent-emerald/25 transition-all duration-300">
              <span className="text-3xl mb-3 block">⚓</span>
              <h4 className="text-sm font-serif font-bold uppercase tracking-wider text-text-primary mb-1">Mercantile Ethos</h4>
              <p className="text-[11px] text-text-secondary leading-relaxed font-light">Centuries of maritime commerce across the Indian Ocean networks, establishing trade channels from Gujarat to Ceylon, Burma, and beyond.</p>
            </div>
            
            <div className="bg-accent-emerald/10 border border-accent-gold/10 rounded-lg p-6 text-center hover:translate-y-[-4px] hover:border-accent-gold hover:bg-accent-emerald/25 transition-all duration-300">
              <span className="text-3xl mb-3 block">🕌</span>
              <h4 className="text-sm font-serif font-bold uppercase tracking-wider text-text-primary mb-1">Islamic Learning</h4>
              <p className="text-[11px] text-text-secondary leading-relaxed font-light">A deep respect for religious scholarship, piety, and Arabic naming traditions, as reflected in the name awliyāʾ (Olia).</p>
            </div>
            
            <div className="bg-accent-emerald/10 border border-accent-gold/10 rounded-lg p-6 text-center hover:translate-y-[-4px] hover:border-accent-gold hover:bg-accent-emerald/25 transition-all duration-300">
              <span className="text-3xl mb-3 block">💍</span>
              <h4 className="text-sm font-serif font-bold uppercase tracking-wider text-text-primary mb-1">Endogamy</h4>
              <p className="text-[11px] text-text-secondary leading-relaxed font-light">Consanguineous marriage practices designed to preserve lineage identity, family capital, and community bonds.</p>
            </div>
            
            <div className="bg-accent-emerald/10 border border-accent-gold/10 rounded-lg p-6 text-center hover:translate-y-[-4px] hover:border-accent-gold hover:bg-accent-emerald/25 transition-all duration-300">
              <span className="text-3xl mb-3 block">📜</span>
              <h4 className="text-sm font-serif font-bold uppercase tracking-wider text-text-primary mb-1">Genealogical Memory</h4>
              <p className="text-[11px] text-text-secondary leading-relaxed font-light">Meticulous preservation of lineage records, linking modern descendants to 19th-century pioneers and medieval ancestors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Lineage & Migrations */}
      <section id="lineage" className="py-20 border-t border-accent-gold/5 bg-bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <span className="text-xs text-accent-gold uppercase tracking-[0.2em] font-semibold block mb-1">Chronology of Movement</span>
            <h2 className="text-3xl font-serif tracking-wider uppercase after:content-[''] after:block after:w-16 after:h-[1px] after:bg-accent-gold after:mx-auto after:mt-3">Lineage & Migrations</h2>
          </div>

          <div className="relative max-w-5xl mx-auto py-8 after:content-[''] after:absolute after:w-[2px] after:bg-gradient-to-b after:from-accent-gold-dark after:via-accent-emerald-light after:to-accent-gold-dark after:top-0 after:bottom-0 after:left-1/2 after:ml-[-1px] lg:after:block after:hidden">
            
            {/* 1. Kasim Olia */}
            <div className="lg:w-1/2 w-full pb-8 lg:pr-10 lg:text-right relative lg:left-0 left-0 lg:ml-0 ml-0 flex lg:justify-end">
              <div className="lg:absolute lg:right-[-9px] lg:top-[28px] w-4.5 h-4.5 rounded-full bg-[#050808] border-2 border-accent-gold-bright shadow-[0_0_8px_#d4af37] z-10 lg:block hidden" />
              <div className="glass-panel p-6 rounded-lg w-full max-w-lg">
                <span className="font-serif font-bold text-accent-gold-bright text-lg mb-1 block">Circa 1850</span>
                <span className="text-[10px] uppercase tracking-wider text-accent-emerald-glow mb-3 block">Rander, Gujarat, India</span>
                <h3 className="font-serif text-lg mb-2">Kasim Olia & Modern Lineage</h3>
                <p className="text-xs md:text-sm font-light text-text-secondary leading-relaxed">
                  The earliest documented ancestor, <strong>Kasim Olia</strong>, was born in Rander. A respected merchant, his trade networks extended to Ceylon (Sri Lanka) and the Maldives. He formed key alliances, marrying his family into prominent mercantile lineages; he was the father-in-law of <strong>Rasoolbibi Ajum Piperdy</strong>, daughter of the notable Indo-Mauritian trader <strong>Ajum Goolam Hossen Piperdy</strong>.
                </p>
              </div>
            </div>

            {/* 2. Branch Split */}
            <div className="lg:w-1/2 w-full pb-8 lg:pl-10 lg:text-left relative lg:left-1/2 left-0 flex lg:justify-start">
              <div className="lg:absolute lg:left-[-9px] lg:top-[28px] w-4.5 h-4.5 rounded-full bg-[#050808] border-2 border-accent-gold-bright shadow-[0_0_8px_#d4af37] z-10 lg:block hidden" />
              <div className="glass-panel p-6 rounded-lg w-full max-w-lg">
                <span className="font-serif font-bold text-accent-gold-bright text-lg mb-1 block">Early 20th Century</span>
                <span className="text-[10px] uppercase tracking-wider text-accent-emerald-glow mb-3 block">Rander & Rangoon</span>
                <h3 className="font-serif text-lg mb-2">Bifurcation of the Branches</h3>
                <p className="text-xs md:text-sm font-light text-text-secondary leading-relaxed">
                  The lineage split into two geographical paths under Kasim's sons:
                  <br />• <strong>Hashim Kasim Olia</strong> remained in Rander and married Rasoolbibi Piperdy.
                  <br />• <strong>Ismail Kasim Olia</strong> migrated to Yangon (Rangoon), Burma, and married Mohtarma Ashraf, a native of Rander.
                </p>
                <p className="text-xs font-light text-text-muted mt-2">
                  This geographic split was bridged by endogamous alliances, intertwining the family branches over time.
                </p>
              </div>
            </div>

            {/* 3. Burma Golden Era */}
            <div className="lg:w-1/2 w-full pb-8 lg:pr-10 lg:text-right relative lg:left-0 left-0 flex lg:justify-end">
              <div className="lg:absolute lg:right-[-9px] lg:top-[28px] w-4.5 h-4.5 rounded-full bg-[#050808] border-2 border-accent-gold-bright shadow-[0_0_8px_#d4af37] z-10 lg:block hidden" />
              <div className="glass-panel p-6 rounded-lg w-full max-w-lg">
                <span className="font-serif font-bold text-accent-gold-bright text-lg mb-1 block">Circa 1910 - 1941</span>
                <span className="text-[10px] uppercase tracking-wider text-accent-emerald-glow mb-3 block">Rangoon (Yangon), Burma</span>
                <h3 className="font-serif text-lg mb-2">The Burma Era & Yusuf Ismail Olia</h3>
                <p className="text-xs md:text-sm font-light text-text-secondary leading-relaxed">
                  The Ismaili branch flourished in Burma. <strong>Yusuf Ismail Olia</strong> (son of Ismail Kasim) grew into a wealthy businessman in Rangoon. Exceptionally, Yusuf was also a <strong>professional football (soccer) player for Burma</strong>, a rare accomplishment for a South Asian merchant. The family established a prosperous, prominent household during this colonial trading boom.
                </p>
              </div>
            </div>

            {/* 4. WWII Evacuation */}
            <div className="lg:w-1/2 w-full pb-8 lg:pl-10 lg:text-left relative lg:left-1/2 left-0 flex lg:justify-start">
              <div className="lg:absolute lg:left-[-9px] lg:top-[28px] w-4.5 h-4.5 rounded-full bg-[#050808] border-2 border-accent-gold-bright shadow-[0_0_8px_#d4af37] z-10 lg:block hidden" />
              <div className="glass-panel p-6 rounded-lg w-full max-w-lg">
                <span className="font-serif font-bold text-accent-gold-bright text-lg mb-1 block">1942</span>
                <span className="text-[10px] uppercase tracking-wider text-accent-emerald-glow mb-3 block">Escape from Burma</span>
                <h3 className="font-serif text-lg mb-2">War & Perilous Escape</h3>
                <p className="text-xs md:text-sm font-light text-text-secondary leading-relaxed">
                  The Japanese invasion of Burma in 1942 forced the family to evacuate. During their flight, Yusuf's pregnant wife, <strong>Aishabibi</strong>, sustained injuries. Despite the trauma, she safely gave birth to their son, Hashim Yusuf Olia, in Rander. Sadly, following Yusuf's death, his hard-earned soccer gold medals and trophies were sold by relatives for financial survival.
                </p>
              </div>
            </div>

            {/* 5. Partition Migration */}
            <div className="lg:w-1/2 w-full pb-8 lg:pr-10 lg:text-right relative lg:left-0 left-0 flex lg:justify-end">
              <div className="lg:absolute lg:right-[-9px] lg:top-[28px] w-4.5 h-4.5 rounded-full bg-[#050808] border-2 border-accent-gold-bright shadow-[0_0_8px_#d4af37] z-10 lg:block hidden" />
              <div className="glass-panel p-6 rounded-lg w-full max-w-lg">
                <span className="font-serif font-bold text-accent-gold-bright text-lg mb-1 block">1947</span>
                <span className="text-[10px] uppercase tracking-wider text-accent-emerald-glow mb-3 block">Migration to Karachi, Pakistan</span>
                <h3 className="font-serif text-lg mb-2">Partition & Karachi Relocation</h3>
                <p className="text-xs md:text-sm font-light text-text-secondary leading-relaxed">
                  After reuniting in Rander post-WWII, the Partition of British India led to another migration. A significant portion of the family moved to Karachi, Sindh, Pakistan, joining the mass migration of Gujarati Muslim trading communities. They preserved their communal affiliation and lineage identity in their new home.
                </p>
                <div className="mt-4 border-l-2 border-accent-gold pl-3 italic text-text-secondary text-[11px] leading-relaxed text-left">
                  <strong>CRITICAL GEOGRAPHIC NOTE:</strong> Unlike the Karachi-bound branches, the descendants of <strong>Kasim Ismail Olia</strong> remained behind in <strong>Rander, Gujarat</strong>, maintaining the family's continuous connection to their ancestral Indian homeland.
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. Genealogy Tree & Searchable Directory */}
      <section id="genealogy" className="py-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-12">
            <span className="text-xs text-accent-gold uppercase tracking-[0.2em] font-semibold block mb-1">Ancestral Directory</span>
            <h2 className="text-3xl font-serif tracking-wider uppercase mb-3 after:content-[''] after:block after:w-16 after:h-[1px] after:bg-accent-gold after:mx-auto after:mt-3">Family Tree & Records</h2>
            <p className="max-w-2xl mx-auto text-text-secondary text-xs md:text-sm font-light">
              Explore the genealogical connections and individual demographic profiles of the Olia lineage. Click nodes in the visual tree or search the directory below.
            </p>
          </div>

          {/* Interactive Family Tree component */}
          <div className="mb-16">
            <h3 className="text-center font-serif text-xl text-accent-gold-bright mb-6">Visual Genealogy Chart</h3>
            <FamilyTree onNodeClick={openMemberDetail} />
          </div>

          {/* Directory Filtering and Search Controls */}
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-8">
            <div className="relative flex-1 max-w-sm">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
              <input 
                type="text" 
                placeholder="Search by name, place, date..." 
                className="w-full bg-[#0b1110]/80 border border-accent-gold/15 rounded-full py-2 pl-10 pr-4 text-xs md:text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-gold-bright focus:shadow-[0_0_10px_rgba(197,168,128,0.15)] transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {[
                { filter: "all", label: "All Records" },
                { filter: "hashimi", label: "Hashimi Branch" },
                { filter: "ismaili", label: "Ismaili Branch" },
                { filter: "rander", label: "Rander Roots" },
                { filter: "karachi", label: "Karachi Branch" }
              ].map((item) => (
                <button
                  key={item.filter}
                  className={`text-[10px] md:text-xs font-semibold uppercase tracking-wider py-2 px-4 rounded-full border transition-all cursor-pointer ${activeFilter === item.filter ? 'bg-accent-gold text-bg-primary border-accent-gold-bright' : 'bg-accent-emerald/20 border-accent-gold/15 text-text-secondary hover:bg-accent-gold hover:text-bg-primary'}`}
                  onClick={() => setActiveFilter(item.filter)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Directory Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-bg-secondary/60 border border-accent-gold/15 hover:border-accent-gold hover:shadow-2xl hover:translate-y-[-4px] rounded-lg p-6 flex flex-col cursor-pointer transition-all duration-300"
                  onClick={() => openMemberDetail(member.id)}
                >
                  <div className="border-b border-accent-gold/10 pb-3 mb-4">
                    <h4 className="font-serif font-bold text-base text-text-primary">{member.name}</h4>
                    <span className="text-[10px] uppercase font-semibold text-accent-gold tracking-wider mt-1 block">{member.relation}</span>
                  </div>
                  <div className="flex items-start text-xs text-text-secondary gap-2 mb-2">
                    <span className="font-semibold text-text-muted min-width-[60px] inline-block">Born:</span>
                    <span>{member.birthDate} ({member.birthPlace.split(',')[0]})</span>
                  </div>
                  <div className="flex items-start text-xs text-text-secondary gap-2 mb-2">
                    <span className="font-semibold text-text-muted min-width-[60px] inline-block">Died:</span>
                    <span>{member.deathDate} ({member.deathPlace.split(',')[0]})</span>
                  </div>
                  <div className="flex items-start text-xs text-text-secondary gap-2 mb-4">
                    <span className="font-semibold text-text-muted min-width-[60px] inline-block">Spouse:</span>
                    <span>{member.spouse}</span>
                  </div>
                  
                  <span className={`mt-auto self-start text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${member.branch === 'hashimi' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' : member.branch === 'ismaili' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-accent-gold/10 text-accent-gold-bright border-accent-gold/30'}`}>
                    {member.branch === 'hashimi' ? 'Hashimi Branch' : member.branch === 'ismaili' ? 'Ismaili Branch' : 'Patriarch'}
                  </span>
                </div>
              ))
            ) : (
              <div className="col-span-full bg-bg-secondary/40 border border-accent-gold/15 p-12 text-center rounded-lg text-text-muted text-sm italic">
                No ancestral records match your search criteria.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#030505] border-t border-accent-gold/10 py-12 text-center">
        <div className="max-w-xl mx-auto px-6">
          <div className="font-serif text-2xl tracking-[0.1em] text-text-primary mb-3">THE OLIA FAMILY</div>
          <p className="text-text-muted text-xs font-light">Preserving the legacy, lineage, and historical migrations of the Olia family across the Indian Ocean.</p>
          <div className="w-10 h-[1px] bg-accent-gold mx-auto my-6" />
          <p className="text-[10px] text-text-muted">&copy; 2026 Olia Family Archives. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Biography Modal Overlay */}
      {selectedMember && (
        <div className="fixed inset-0 bg-[#050808]/85 backdrop-blur-md z-[2000] flex justify-center items-center p-4 transition-opacity duration-300" onClick={closeMemberDetail}>
          <div 
            className="bg-[#0b1110] border border-accent-gold rounded-xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative transition-transform duration-300 transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-text-muted hover:text-accent-gold-bright text-2xl font-bold focus:outline-none cursor-pointer" onClick={closeMemberDetail}>&times;</button>
            <h3 className="font-serif text-2xl text-text-primary mb-1 pr-6 border-b border-accent-gold/25 pb-3">{selectedMember.name}</h3>
            <div className="text-[10px] uppercase font-bold tracking-widest text-accent-gold mb-6 mt-1">
              {selectedMember.branch === 'hashimi' ? 'Hashimi Branch (Rander/Karachi)' : selectedMember.branch === 'ismaili' ? 'Ismaili Branch (Rander/Burma/Karachi)' : 'Olia Patriarchal Lineage'}
            </div>

            <div className="flex flex-col gap-3.5">
              <div className="grid grid-cols-[100px_1fr] items-start text-sm">
                <span className="font-medium text-text-muted">Birth Date:</span>
                <span className="text-text-secondary font-light">{selectedMember.birthDate}</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-start text-sm">
                <span className="font-medium text-text-muted">Birth Place:</span>
                <span className="text-text-secondary font-light">{selectedMember.birthPlace}</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-start text-sm">
                <span className="font-medium text-text-muted">Death Date:</span>
                <span className="text-text-secondary font-light">{selectedMember.deathDate}</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-start text-sm">
                <span className="font-medium text-text-muted">Death Place:</span>
                <span className="text-text-secondary font-light">{selectedMember.deathPlace}</span>
              </div>
              {selectedMember.spouse !== "N/A" && selectedMember.spouse !== "Unknown" && (
                <div className="grid grid-cols-[100px_1fr] items-start text-sm">
                  <span className="font-medium text-text-muted">Spouse:</span>
                  <span className="text-text-secondary font-light">{selectedMember.spouse}</span>
                </div>
              )}
              <div className="border-t border-white/5 pt-6 mt-2 text-xs md:text-sm leading-relaxed font-light text-text-secondary">
                {selectedMember.description}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
