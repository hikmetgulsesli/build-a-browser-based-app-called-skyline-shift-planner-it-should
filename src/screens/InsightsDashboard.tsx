// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights (Dashboard)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppState, Page } from "../types/domain";

interface InsightsDashboardProps {
  state: AppState;
  navigate: (page: Page) => void;
  setSearchQuery: (q: string) => void;
  dismissAlert: (id: string) => void;
}

export function InsightsDashboard(props: InsightsDashboardProps) {
  const { state, navigate, setSearchQuery, dismissAlert } = props;
  const totalCrew = state.crews.length;
  const activeShifts = state.flights.filter(f => f.status === 'assigned' || f.status === 'active').length;
  const criticalAlerts = state.alerts.filter(a => a.type === 'rule_violation').length;
  const efficiency = 94.8;

  return (
    <>
      {/* TopNavBar */}
      <header className="flex justify-between items-center h-14 pl-64 pr-6 w-full fixed top-0 z-40 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-all duration-200">
      <div className="flex items-center gap-4">
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" style={{fontSize: "18px"}}>search</span>
      <input
        className="h-9 pl-10 pr-4 rounded bg-surface-container-low border border-outline-variant text-body-sm font-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 placeholder:text-on-surface-variant"
        placeholder="Arama..."
        type="text"
        value={state.searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
      </div>
      <div className="flex items-center gap-6">
      <div className="flex items-center gap-md">
      <button aria-label="Bildirimler" className="text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button aria-label="Yardım" className="text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      </div>
      <button
        className="h-9 px-4 bg-[#2563EB] text-on-primary font-body-sm text-body-sm font-medium rounded hover:bg-primary transition-colors flex items-center gap-2"
        onClick={() => navigate('add-lead')}
      >
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>add</span>
                      Hızlı Ekle
                  </button>
      <button className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant bg-surface-container" onClick={() => navigate('profile')}>
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="A professional headshot of an airline operations manager, well-lit with high-key soft lighting typical of a modern corporate ID photo. The background is a stark, clean white to emphasize the subject. The overall mood conveys precision and reliability, fitting perfectly into a minimalist, light-mode corporate dashboard aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5r3brYqb5n_A2Nl-VU6XotzjStRxv2htTjnrjJiUuNJWuRJ-2tJ63IBd7WraTvhnu1nkrIqs4EwhSUwtWCZVwh5WislDkprpdDEavcMv9rfzwLd6u1GbO1EXAcpVA-ifmqWU7WemWV-qnycTDsp4rUR6_oryQngeHjvu2h5oCzI19ggh9Pdr_O5SpcFhY2BikyZTE-i5y3OXIrf5Ch849nJ5fjw0fa2P4ZZBlbboH4iQEZYcuGJaDzscb-DtLPcMS3P9ZztEdKT0" />
      </button>
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="flex flex-col h-full fixed left-0 top-0 h-screen w-64 border-r bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50">
      <div className="p-6 flex items-center gap-3 border-b border-outline-variant/30 h-14">
      <div className="h-8 w-8 rounded bg-primary-container flex items-center justify-center text-on-primary">
      <span className="material-symbols-outlined">flight_takeoff</span>
      </div>
      <div>
      <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Skyline Ops</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant">Vardiya Planlayıcı</p>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-2 px-3">
      <button className="flex items-center gap-3 px-3 py-2 rounded text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out font-inter text-sm antialiased text-left" onClick={() => navigate('leads')}>
      <span className="material-symbols-outlined">supervisor_account</span>
                      Yöneticiler
                  </button>
      <button className="flex items-center gap-3 px-3 py-2 rounded text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out font-inter text-sm antialiased text-left" onClick={() => navigate('pipeline')}>
      <span className="material-symbols-outlined">view_kanban</span>
                      Operasyon Akışı
                  </button>
      <button className="flex items-center gap-3 px-3 py-2 rounded bg-primary-container/10 text-blue-600 dark:text-blue-400 font-semibold border-r-4 border-blue-600 transition-colors duration-150 ease-in-out font-inter text-sm antialiased text-left">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>monitoring</span>
                      Analizler
                  </button>
      <button className="flex items-center gap-3 px-3 py-2 rounded text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out font-inter text-sm antialiased text-left" onClick={() => navigate('settings')}>
      <span className="material-symbols-outlined">settings</span>
                      Ayarlar
                  </button>
      <button className="flex items-center gap-3 px-3 py-2 rounded text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out font-inter text-sm antialiased text-left" onClick={() => navigate('profile')}>
      <span className="material-symbols-outlined">person</span>
                      Profil
                  </button>
      </div>
      <div className="p-6">
      <button className="w-full h-10 bg-surface-container-lowest border border-outline-variant text-secondary font-body-sm text-body-sm font-medium rounded hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2" onClick={() => navigate('add-lead')}>
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>add_circle</span>
                      Yeni Vardiya Oluştur
                  </button>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="ml-64 pt-14 p-margin">
      {/* Header */}
      <div className="flex justify-between items-end mb-lg">
      <div>
      <h2 className="font-display-lg text-display-lg text-on-surface mb-xs">Operasyonel Bakış</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Gerçek zamanlı sistem durumu ve performans metrikleri.</p>
      </div>
      <div className="flex items-center gap-sm bg-surface-container-lowest border border-outline-variant rounded p-sm">
      <span className="material-symbols-outlined text-on-surface-variant" style={{fontSize: "18px"}}>calendar_today</span>
      <span className="font-body-sm text-body-sm font-medium text-on-surface">Son 7 Gün</span>
      <span className="material-symbols-outlined text-on-surface-variant" style={{fontSize: "18px"}}>arrow_drop_down</span>
      </div>
      </div>
      {/* Metric Cards (Bento Grid Top Row) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-margin">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col justify-between h-32 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
      <div className="flex justify-between items-start z-10">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Toplam Ekip</span>
      <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>groups</span>
      </div>
      <div className="z-10">
      <div className="flex items-baseline gap-2">
      <span className="font-display-lg text-display-lg text-on-surface">{totalCrew}</span>
      <span className="font-code-data text-code-data text-[#16A34A] flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_upward</span>%4.2</span>
      </div>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col justify-between h-32 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-container/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
      <div className="flex justify-between items-start z-10">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Aktif Vardiyalar</span>
      <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>schedule</span>
      </div>
      <div className="z-10">
      <div className="flex items-baseline gap-2">
      <span className="font-display-lg text-display-lg text-on-surface">{activeShifts}</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">/ {state.flights.length} planlanan</span>
      </div>
      </div>
      </div>
      {/* Card 3 */}
      <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-lg p-md flex flex-col justify-between h-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FEE2E2] rounded-bl-full -mr-10 -mt-10"></div>
      <div className="flex justify-between items-start z-10">
      <span className="font-label-caps text-label-caps text-[#991B1B] uppercase tracking-wider">Kritik Uyarılar</span>
      <span className="material-symbols-outlined text-[#DC2626]" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
      </div>
      <div className="z-10">
      <div className="flex items-baseline gap-2">
      <span className="font-display-lg text-display-lg text-[#991B1B]">{criticalAlerts}</span>
      <span className="font-body-sm text-body-sm text-[#B91C1C]">Kural İhlali</span>
      </div>
      </div>
      </div>
      {/* Card 4 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col justify-between h-32 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
      <div className="flex justify-between items-start z-10">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Verimlilik %</span>
      <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
      </div>
      <div className="z-10 flex flex-col gap-2">
      <span className="font-display-lg text-display-lg text-on-surface">%{efficiency}</span>
      <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
      <div className="h-full bg-primary rounded-full" style={{width: `${efficiency}%`}}></div>
      </div>
      </div>
      </div>
      </div>
      {/* Main Layout Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-margin">
      {/* Left: Weekly Tracking */}
      <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-lg p-lg">
      <div className="flex justify-between items-center mb-md border-b border-outline-variant pb-sm">
      <h3 className="font-title-sm text-title-sm text-on-surface">Haftalık Görev Tamamlama</h3>
      <button className="text-primary font-body-sm text-body-sm font-medium hover:underline" onClick={() => navigate('pipeline')}>Detayları Gör</button>
      </div>
      <div className="flex flex-col gap-md mt-lg">
      {/* Row 1 */}
      <div className="flex items-center gap-4">
      <div className="w-24 font-code-data text-code-data text-on-surface-variant">Pzt</div>
      <div className="flex-1 h-3 bg-surface-container-high rounded-sm overflow-hidden flex">
      <div className="h-full bg-[#16A34A] w-[85%]"></div>
      <div className="h-full bg-[#FEF3C7] w-[10%]"></div>
      <div className="h-full bg-transparent w-[5%]"></div>
      </div>
      <div className="w-12 text-right font-code-data text-code-data text-on-surface">%95</div>
      </div>
      {/* Row 2 */}
      <div className="flex items-center gap-4">
      <div className="w-24 font-code-data text-code-data text-on-surface-variant">Sal</div>
      <div className="flex-1 h-3 bg-surface-container-high rounded-sm overflow-hidden flex">
      <div className="h-full bg-[#16A34A] w-[90%]"></div>
      <div className="h-full bg-[#FEF3C7] w-[5%]"></div>
      </div>
      <div className="w-12 text-right font-code-data text-code-data text-on-surface">%95</div>
      </div>
      {/* Row 3 */}
      <div className="flex items-center gap-4">
      <div className="w-24 font-code-data text-code-data text-on-surface-variant">Çar</div>
      <div className="flex-1 h-3 bg-surface-container-high rounded-sm overflow-hidden flex">
      <div className="h-full bg-[#16A34A] w-[75%]"></div>
      <div className="h-full bg-[#FEF3C7] w-[15%]"></div>
      <div className="h-full bg-[#FEE2E2] w-[10%] relative">
      {/* Warning marker */}
      <div className="absolute inset-0 bg-[#DC2626] opacity-50"></div>
      </div>
      </div>
      <div className="w-12 text-right font-code-data text-code-data text-on-surface">%90</div>
      </div>
      {/* Row 4 */}
      <div className="flex items-center gap-4 opacity-50">
      <div className="w-24 font-code-data text-code-data text-on-surface-variant">Per</div>
      <div className="flex-1 h-3 bg-surface-container-high rounded-sm overflow-hidden flex">
      <div className="h-full bg-outline-variant w-[40%]"></div>
      </div>
      <div className="w-12 text-right font-code-data text-code-data text-on-surface">-</div>
      </div>
      {/* Row 5 */}
      <div className="flex items-center gap-4 opacity-50">
      <div className="w-24 font-code-data text-code-data text-on-surface-variant">Cum</div>
      <div className="flex-1 h-3 bg-surface-container-high rounded-sm overflow-hidden flex"></div>
      <div className="w-12 text-right font-code-data text-code-data text-on-surface">-</div>
      </div>
      </div>
      {/* Legend */}
      <div className="mt-lg flex gap-md pt-md border-t border-surface-container-highest">
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-sm bg-[#16A34A]"></div>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Zamanında</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-sm bg-[#FEF3C7]"></div>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Gecikmeli</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-sm bg-[#FEE2E2]"></div>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Eksik/İptal</span>
      </div>
      </div>
      </div>
      {/* Right: Alert Panel */}
      <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-lg p-0 overflow-hidden flex flex-col">
      <div className="p-md border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
      <h3 className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-secondary" style={{fontSize: "20px"}}>notifications_active</span>
                              Kompakt Uyarı Paneli
                          </h3>
      <span className="px-2 py-0.5 rounded bg-[#FEE2E2] text-[#DC2626] font-code-data text-code-data font-bold">{state.alerts.filter(a => !a.read).length} Yeni</span>
      </div>
      <div className="flex-1 overflow-y-auto">
      {state.alerts.map((alert) => (
      <div key={alert.id} className="p-md border-b border-surface-container hover:bg-surface-container-lowest transition-colors cursor-pointer flex gap-3 items-start" onClick={() => dismissAlert(alert.id)}>
      <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${alert.type === 'rule_violation' ? 'bg-[#FEE2E2] text-[#DC2626]' : alert.type === 'delay' ? 'bg-[#FEF3C7] text-[#D97706]' : 'bg-surface-container-high text-secondary'}`}>
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>{alert.type === 'rule_violation' ? 'rule' : alert.type === 'delay' ? 'weather_snowy' : 'info'}</span>
      </div>
      <div className="flex-1">
      <div className="flex justify-between items-baseline mb-1">
      <h4 className="font-body-sm text-body-sm font-semibold text-on-surface">{alert.title}</h4>
      <span className="font-label-caps text-label-caps text-on-surface-variant">{alert.timeAgo}</span>
      </div>
      <p className="font-body-sm text-body-sm text-secondary line-clamp-2">{alert.description}</p>
      </div>
      </div>
      ))}
      </div>
      <div className="p-sm bg-surface border-t border-outline-variant text-center">
      <button className="font-label-caps text-label-caps text-primary hover:text-on-primary-fixed-variant tracking-wider" onClick={() => navigate('pipeline')}>TÜMÜNÜ GÖR</button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
