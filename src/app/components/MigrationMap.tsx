"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';

// Custom SVG marker generator to prevent broken static asset paths in Next.js
const createCustomIcon = (color: string) => {
  if (typeof window === 'undefined') return undefined;
  return L.divIcon({
    html: `<div style="background-color: ${color}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 8px rgba(0,0,0,0.5);"></div>`,
    className: 'custom-map-marker-dot',
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -7]
  });
};

interface Waypoint {
  id: string;
  name: string;
  coords: [number, number];
  year?: string;
  detail: string;
  color: string;
}

const mainTrunkWaypoints: Waypoint[] = [
  { id: "yangikent", name: "Yangikent", coords: [45.6083, 61.9284], year: "9th-11th Century", detail: "Origin: Ancestral starting point of the Bayat tribe of the Oghuz Turks in Central Asia.", color: "#D4AF37" },
  { id: "nishapur", name: "Nishapur (Neyshabur)", coords: [36.2133, 58.7958], year: "12th Century", detail: "Fled here due to Mongol advancements. The Bayats declared war, killing Genghis Khan's son-in-law Toghuchar, which triggered the destruction of Nishapur.", color: "#D4AF37" },
  { id: "afghanistan", name: "Afghanistan (Khorasan)", coords: [34.3419, 62.2031], year: "12th-13th Century", detail: "Waypoint through Herat region during the flight from Mongol forces.", color: "#D4AF37" },
  { id: "lahore", name: "Lahore", coords: [31.5204, 74.3587], year: "13th Century", detail: "Temporary settlement waypoint on the migration path to the subcontinent.", color: "#D4AF37" },
  { id: "delhi", name: "Delhi", coords: [28.6139, 77.2090], year: "1225 AD", detail: "Joined the Delhi Sultanate, seeking refuge from the Mongol attacks.", color: "#D4AF37" },
  { id: "rander-trunk", name: "Rander / Surat, India", coords: [21.2188, 72.7954], year: "13th-14th Century", detail: "Migrated south following Alauddin Khilji's conquest of Gujarat. Integrated into the Surti Sunni Bohra mercantile community.", color: "#D4AF37" }
];

const branchAWaypoints: Waypoint[] = [
  { id: "rander-hashimi", name: "Rander, India", coords: [21.2188, 72.7954], year: "Until 1947", detail: "The Hashimi branch remained in Rander managing family trade interests.", color: "#991B1B" },
  { id: "karachi-hashimi", name: "Karachi, Pakistan", coords: [24.8607, 67.0011], year: "1947 Migration", detail: "Migrated to Karachi, Pakistan following the Partition of British India, establishing new networks in Sindh.", color: "#991B1B" }
];

const branchBWaypoints: Waypoint[] = [
  { id: "rander-ismaili", name: "Rander, India", coords: [21.2188, 72.7954], year: "Early 20th Century", detail: "Ismaili branch starting point under Ismail Kasim Olia.", color: "#065F46" },
  { id: "burma-ismaili", name: "Burma (Rangoon / Yangon)", coords: [16.8409, 96.1735], year: "1910 Migration", detail: "Ismail Kasim Olia migrated to Yangon (Rangoon), establishing a prosperous mercantile household. Home of professional footballer Yusuf Ismail Olia.", color: "#065F46" },
  { id: "rander-return", name: "Rander, India", coords: [21.2188, 72.7954], year: "1942 Return", detail: "Returned to Rander during the 1942 WWII evacuation to escape the Japanese invasion of Burma.", color: "#065F46" },
  { id: "karachi-ismaili", name: "Karachi, Pakistan", coords: [24.8607, 67.0011], year: "1947 Migration", detail: "Partition-era migration of the Ismaili branch from Rander to Karachi, Pakistan.", color: "#065F46" }
];

export default function MigrationMap() {
  const mapCenter: [number, number] = [28.0, 78.0];
  const initialZoom = 4;

  const mainTrunkPolyline = mainTrunkWaypoints.map(w => w.coords);
  const branchAPolyline = branchAWaypoints.map(w => w.coords);
  const branchBPolyline = branchBWaypoints.map(w => w.coords);

  return (
    <div className="relative w-full h-[550px] rounded-xl overflow-hidden shadow-2xl border border-accent-gold/15">
      <MapContainer 
        center={mapCenter} 
        zoom={initialZoom} 
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {/* Polylines representing the migration tracks */}
        <Polyline 
          positions={mainTrunkPolyline} 
          pathOptions={{ color: '#D4AF37', weight: 4, opacity: 0.85 }} 
        />
        <Polyline 
          positions={branchAPolyline} 
          pathOptions={{ color: '#991B1B', weight: 3, opacity: 0.8, dashArray: '6, 6' }} 
        />
        <Polyline 
          positions={branchBPolyline} 
          pathOptions={{ color: '#065F46', weight: 3, opacity: 0.8, dashArray: '6, 6' }} 
        />

        {/* Main Trunk Markers */}
        {mainTrunkWaypoints.map((w, index) => (
          <Marker 
            key={`trunk-${w.id}-${index}`} 
            position={w.coords} 
            icon={createCustomIcon(w.color)}
          >
            <Popup>
              <div className="p-1">
                <span className="block text-accent-gold font-serif text-sm font-semibold tracking-wider uppercase mb-1">{w.name}</span>
                {w.year && <span className="block text-xs text-accent-gold/80 mb-2 font-medium">{w.year}</span>}
                <p className="text-xs leading-relaxed text-text-secondary">{w.detail}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Branch A Markers */}
        {branchAWaypoints.map((w, index) => (
          <Marker 
            key={`branchA-${w.id}-${index}`} 
            position={w.coords} 
            icon={createCustomIcon(w.color)}
          >
            <Popup>
              <div className="p-1">
                <span className="block text-red-400 font-serif text-sm font-semibold tracking-wider uppercase mb-1">{w.name} (Hashimi Branch)</span>
                {w.year && <span className="block text-xs text-red-300/80 mb-2 font-medium">{w.year}</span>}
                <p className="text-xs leading-relaxed text-text-secondary">{w.detail}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Branch B Markers */}
        {branchBWaypoints.map((w, index) => (
          <Marker 
            key={`branchB-${w.id}-${index}`} 
            position={w.coords} 
            icon={createCustomIcon(w.color)}
          >
            <Popup>
              <div className="p-1">
                <span className="block text-emerald-400 font-serif text-sm font-semibold tracking-wider uppercase mb-1">{w.name} (Ismaili Branch)</span>
                {w.year && <span className="block text-xs text-emerald-300/80 mb-2 font-medium">{w.year}</span>}
                <p className="text-xs leading-relaxed text-text-secondary">{w.detail}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Map Legend Overlay in bottom-right (Tailwind styled) */}
      <div className="absolute bottom-4 right-4 bg-bg-secondary/95 backdrop-blur-md border border-accent-gold/20 p-3 rounded-lg shadow-xl z-[1000] max-w-xs transition-all">
        <h4 className="text-accent-gold font-serif text-xs font-semibold uppercase tracking-wider mb-2 border-b border-accent-gold/15 pb-1">Migration Map Legend</h4>
        <div className="flex flex-col gap-1.5 text-[11px] font-medium text-text-secondary">
          <div className="flex items-center gap-2">
            <span className="w-5 h-1.5 bg-[#D4AF37] rounded-sm block"></span>
            <span>Early Ancestral Trunk</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-1 border-t-2 border-dashed border-[#991B1B] block"></span>
            <span>Hashimi Branch (to Karachi)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-1 border-t-2 border-dashed border-[#065F46] block"></span>
            <span>Ismaili Branch (to Burma & Karachi)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
