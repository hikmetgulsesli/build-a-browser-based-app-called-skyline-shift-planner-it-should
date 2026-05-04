// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Operasyon Pipeline
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface OperasyonPipelineProps {}

export function OperasyonPipeline(props: OperasyonPipelineProps) {
  return (
    <>
      {/* TopNavBar (Shared Component) */}
      <nav className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center h-14 pl-64 pr-6 w-full fixed top-0 z-40 transition-all duration-200 shadow-sm dark:shadow-none font-inter text-sm text-blue-600 dark:text-blue-400">
      <div className="flex items-center gap-md">
      {/* Brand Logo hidden per JSON */}
      <span className="hidden text-lg font-bold text-slate-900 dark:text-white">Skyline Shift Planner</span>
      </div>
      {/* Search Bar: on_left logic implied, placing next to brand area */}
      <div className="flex-1 flex items-center pl-lg">
      <div className="relative w-64">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
      <input className="w-full h-8 pl-8 pr-sm border border-slate-200 rounded-DEFAULT bg-slate-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-body-sm text-body-sm text-slate-900 placeholder:text-slate-400" placeholder="Uçuş veya ekip ara..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-gutter">
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-body-sm text-body-sm h-[32px] px-sm rounded-DEFAULT transition-colors flex items-center gap-xs shadow-sm">
      <span className="material-symbols-outlined text-[16px]">add</span>
                      Hızlı Ekle
                  </button>
      <div className="flex items-center gap-sm">
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition-colors">
      <span className="material-symbols-outlined text-[20px]">notifications</span>
      </button>
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition-colors">
      <span className="material-symbols-outlined text-[20px]">help_outline</span>
      </button>
      </div>
      <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300 ml-sm cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all">
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3GKV1ZeK_aU2x--ELTt2XL6krrRF_eEpe8FfDgwDxe2_Dinf4x3znmJKcsSrJSgwpFamYNlyn0cp2Qp6hgHgDV9EStfyw9C7CkQVk0sBrpSUEXTWdAWTFUq75UcWgcK66hwZsGrrBhDgFPCGf7kKK3KBL8qjC9HDuQ7iCV5ho9foblpjSUmu6nuoEYhSqwvARp25dQLN90kMlZflLuZE86f_OCnwfQDXYPRnuDEFtXkuFzjxxbcMOcjV1T9tAtl3pRUk4L6V2F3o" />
      </div>
      </div>
      </nav>
      {/* SideNavBar (Shared Component) */}
      <aside className="bg-slate-50 dark:bg-slate-900 h-screen w-64 border-r border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 font-inter text-sm antialiased transition-colors duration-150 ease-in-out flex flex-col h-full fixed left-0 top-0 z-50">
      <div className="h-14 flex items-center px-lg border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-sm">
      <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                          S
                      </div>
      <div>
      <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Skyline Ops</h1>
      <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Vardiya Planlayıcı</p>
      </div>
      </div>
      </div>
      <div className="px-md py-md border-b border-slate-200">
      <button className="w-full bg-white border border-slate-200 hover:border-blue-500 text-slate-700 font-medium py-2 px-4 rounded-DEFAULT shadow-sm flex items-center justify-center gap-2 transition-all">
      <span className="material-symbols-outlined text-[18px]">add_circle</span>
                      Yeni Vardiya Oluştur
                  </button>
      </div>
      <nav className="flex-1 overflow-y-auto py-sm">
      <ul className="flex flex-col gap-1 px-sm">
      <li>
      <a className="flex items-center gap-sm px-md py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">supervisor_account</span>
                              Yöneticiler
                          </a>
      </li>
      {/* ACTIVE TAB */}
      <li>
      <a className="flex items-center gap-sm px-md py-2 rounded-lg text-blue-600 dark:text-blue-400 font-semibold border-r-4 border-blue-600 bg-slate-100/50" href="#">
      <span className="material-symbols-outlined fill text-[20px]">view_kanban</span>
                              Operasyon Akışı
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-md py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">monitoring</span>
                              Analizler
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-md py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">settings</span>
                              Ayarlar
                          </a>
      </li>
      </ul>
      </nav>
      <div className="p-sm mt-auto border-t border-slate-200">
      <a className="flex items-center gap-sm px-md py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">person</span>
                      Profil
                  </a>
      </div>
      </aside>
      {/* Main Canvas Area */}
      <main className="flex-1 flex flex-col pt-14 pl-64 bg-surface h-screen">
      {/* Operations Header */}
      <header className="px-margin py-md flex items-center justify-between border-b border-surface-variant bg-surface-container-lowest shrink-0">
      <div className="flex flex-col gap-xs">
      <h2 className="font-headline-md text-headline-md text-on-surface">Operasyon Akışı</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                          24 Ekim 2023, Perşembe (Vardiya A)
                      </p>
      </div>
      {/* Filters / Toggles */}
      <div className="flex items-center gap-sm">
      <div className="flex bg-surface-container rounded-DEFAULT p-[2px] border border-outline-variant/30">
      <button className="px-sm py-1 rounded bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm border border-outline-variant/50">Tüm Uçuşlar</button>
      <button className="px-sm py-1 rounded text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm">Sadece Kritik</button>
      </div>
      <button className="h-8 px-sm flex items-center gap-xs border border-outline-variant rounded-DEFAULT bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low transition-colors font-body-sm text-body-sm">
      <span className="material-symbols-outlined text-[16px]">filter_list</span>
                          Filtrele
                      </button>
      </div>
      </header>
      {/* Kanban Board Container */}
      <div className="flex-1 flex gap-md p-margin overflow-x-auto overflow-y-hidden bg-surface-bright">
      {/* Column 1: Planlanan */}
      <section className="flex-none w-[340px] flex flex-col h-full rounded-lg bg-surface-container-low border border-outline-variant/40">
      <div className="p-sm flex items-center justify-between border-b border-outline-variant/40 bg-surface-container/50 rounded-t-lg shrink-0">
      <div className="flex items-center gap-sm">
      <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim"></span>
      <h3 className="font-title-sm text-title-sm text-on-surface">Planlanan</h3>
      </div>
      <span className="bg-surface-variant text-on-surface px-2 py-0.5 rounded-full font-label-caps text-label-caps">12</span>
      </div>
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
      {/* Card 1 */}
      <article className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-sm relative group">
      {/* Drag Handle */}
      <div className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-outline text-[16px] cursor-grab">drag_indicator</span>
      </div>
      <div className="flex justify-between items-start pl-4">
      <div className="flex items-center gap-xs bg-surface-container px-1.5 py-0.5 rounded border border-outline-variant/30">
      <span className="material-symbols-outlined text-[14px] text-primary">flight_takeoff</span>
      <span className="font-code-data text-code-data text-primary font-bold">TK1983</span>
      </div>
      <span className="font-code-data text-code-data text-on-surface-variant bg-surface-container-high px-1.5 py-0.5 rounded">08:00 - 12:00</span>
      </div>
      <div className="pl-4">
      <p className="font-body-md text-body-md text-on-surface font-medium">IST → LHR</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-xs">
      <span className="material-symbols-outlined text-[14px]">group</span>
                                      Ekip bekleniyor (0/4)
                                  </p>
      </div>
      </article>
      {/* Card 2 */}
      <article className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-sm relative group">
      <div className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-outline text-[16px] cursor-grab">drag_indicator</span>
      </div>
      <div className="flex justify-between items-start pl-4">
      <div className="flex items-center gap-xs bg-surface-container px-1.5 py-0.5 rounded border border-outline-variant/30">
      <span className="material-symbols-outlined text-[14px] text-primary">flight_takeoff</span>
      <span className="font-code-data text-code-data text-primary font-bold">TK2011</span>
      </div>
      <span className="font-code-data text-code-data text-on-surface-variant bg-surface-container-high px-1.5 py-0.5 rounded">14:00 - 22:00</span>
      </div>
      <div className="pl-4">
      <p className="font-body-md text-body-md text-on-surface font-medium">IST → JFK</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-xs">
      <span className="material-symbols-outlined text-[14px]">warning</span>
                                      Geniş gövde yetkisi gerekli
                                  </p>
      </div>
      </article>
      <button className="w-full py-2 border border-dashed border-outline-variant rounded-DEFAULT text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-lowest transition-colors flex items-center justify-center gap-xs mt-xs">
      <span className="material-symbols-outlined text-[16px]">add</span>
                              Manuel Ekle
                          </button>
      </div>
      </section>
      {/* Column 2: Atanan */}
      <section className="flex-none w-[340px] flex flex-col h-full rounded-lg bg-surface-container-low border border-outline-variant/40">
      <div className="p-sm flex items-center justify-between border-b border-outline-variant/40 bg-surface-container/50 rounded-t-lg shrink-0 border-t-2 border-t-primary">
      <div className="flex items-center gap-sm">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
      <h3 className="font-title-sm text-title-sm text-on-surface">Atanan / Aktif</h3>
      </div>
      <span className="bg-surface-variant text-on-surface px-2 py-0.5 rounded-full font-label-caps text-label-caps">5</span>
      </div>
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
      {/* Card 3 */}
      <article className="bg-surface-container-lowest border border-primary/30 rounded-DEFAULT p-sm shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-sm">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-xs bg-primary-container/10 px-1.5 py-0.5 rounded border border-primary/20">
      <span className="material-symbols-outlined text-[14px] text-primary">flight_takeoff</span>
      <span className="font-code-data text-code-data text-primary font-bold">TK001</span>
      </div>
      <span className="font-code-data text-code-data text-on-surface bg-status-ontime-bg text-status-ontime-text px-1.5 py-0.5 rounded-xl border border-status-ontime-text/20">Zamanında</span>
      </div>
      <div>
      <div className="flex justify-between items-baseline mb-1">
      <p className="font-body-md text-body-md text-on-surface font-medium">IST → CDG</p>
      <span className="font-code-data text-code-data text-on-surface-variant text-[11px]">09:00 - 13:00</span>
      </div>
      {/* Crew List */}
      <div className="mt-sm pt-sm border-t border-surface-variant flex flex-col gap-xs">
      <div className="flex items-center gap-sm">
      <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
      <img alt="Portrait photo of a confident pilot in professional aviation uniform, clear lighting, headshot." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6l5INFknHULjdJhJ0Ov-VdGpuFkdAWWAR9B7_fGdvp-RLHfLO0h_f2iJu4byqi4gikGGVLrxJ_43-WH4-E0TFGjgMfluF72WGo6dW0w8gqcdTmlq4TemzlJgYSwTYdEvDFmEXrWMiBRYJ-K8IdoZ0Y1SnJ2dWVb-s9IRHilo_-gHdcIn_Blx830mlJZ7yEA-xG-FIYel8wdHAe4FNxa51pe1IUVCs3IQpol5CTFutQcxtWvJiegw3ZlLzf4J1kD2PT9D33NgHMEA" />
      </div>
      <span className="font-body-sm text-body-sm text-on-surface">Kpt. Ali Yılmaz</span>
      <span className="ml-auto font-label-caps text-label-caps text-on-surface-variant">PIC</span>
      </div>
      <div className="flex items-center gap-sm">
      <div className="w-6 h-6 rounded-full bg-tertiary-container flex items-center justify-center overflow-hidden text-on-tertiary-container font-label-caps text-label-caps">
                                              BD
                                          </div>
      <span className="font-body-sm text-body-sm text-on-surface">F/O Burak Demir</span>
      <span className="ml-auto font-label-caps text-label-caps text-on-surface-variant">SIC</span>
      </div>
      </div>
      </div>
      </article>
      {/* Card 4 (Delayed) */}
      <article className="bg-surface-container-lowest border border-error-container rounded-DEFAULT p-sm shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-sm">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-xs bg-error-container/20 px-1.5 py-0.5 rounded border border-error/20">
      <span className="material-symbols-outlined text-[14px] text-error">flight_takeoff</span>
      <span className="font-code-data text-code-data text-error font-bold">TK455</span>
      </div>
      <span className="font-code-data text-code-data bg-status-delayed-bg text-status-delayed-text px-1.5 py-0.5 rounded-xl border border-status-delayed-text/20 flex items-center gap-1">
      <span className="material-symbols-outlined text-[12px]">schedule</span>
                                      +45dk
                                  </span>
      </div>
      <div>
      <div className="flex justify-between items-baseline mb-1">
      <p className="font-body-md text-body-md text-on-surface font-medium">IST → AMS</p>
      <span className="font-code-data text-code-data text-error line-through text-[11px] opacity-70">10:30</span>
      <span className="font-code-data text-code-data text-on-surface-variant text-[11px] ml-1">11:15 - 15:00</span>
      </div>
      {/* Crew List */}
      <div className="mt-sm pt-sm border-t border-surface-variant flex flex-col gap-xs">
      <div className="flex items-center gap-sm">
      <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
      <img alt="Portrait photo of a female co-pilot in professional airline attire, bright natural lighting, headshot." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0EcwW5xiBEWIOQFzW_FjDJQShKYUdalCAYC5ElVm8ErF7e1fxAeXNmXs0o6xsbPGwYhwus6za3-UXfjX9CCpnTV-Aod8OfO3bgJwl4cn1Pi2LajMtDX9QcQsnSiMhpZgstIFmvt97fs8uyvL2w_S805qPb8pH1hdhYEmMbnCbVAJJL2nF_x_j12yd0bKew6lsiEzsmSdExX5nyz8yDPyZPBmaYti2Z2dTdMeJHfeuVQXYT2ZztwhF7iSOoC_5NjR6FSXb7GQdtkU" />
      </div>
      <span className="font-body-sm text-body-sm text-on-surface">Kpt. Cemre Kaya</span>
      <span className="ml-auto font-label-caps text-label-caps text-on-surface-variant">PIC</span>
      </div>
      </div>
      </div>
      </article>
      </div>
      </section>
      {/* Column 3: Tamamlanan */}
      <section className="flex-none w-[340px] flex flex-col h-full rounded-lg bg-surface-container-low border border-outline-variant/40 opacity-80">
      <div className="p-sm flex items-center justify-between border-b border-outline-variant/40 bg-surface-container/50 rounded-t-lg shrink-0">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
      <h3 className="font-title-sm text-title-sm text-on-surface">Tamamlanan</h3>
      </div>
      <span className="bg-surface-variant text-on-surface px-2 py-0.5 rounded-full font-label-caps text-label-caps">28</span>
      </div>
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
      {/* Card 5 */}
      <article className="bg-surface-container-lowest border border-outline-variant/50 rounded-DEFAULT p-sm shadow-sm flex flex-col gap-sm grayscale-[50%]">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-xs px-1.5 py-0.5">
      <span className="material-symbols-outlined text-[14px] text-outline">flight_land</span>
      <span className="font-code-data text-code-data text-outline font-bold">TK999</span>
      </div>
      <span className="font-code-data text-code-data text-outline text-[11px]">04:00 - 08:00</span>
      </div>
      <div>
      <p className="font-body-md text-body-md text-on-surface-variant font-medium">IST → FRA</p>
      <div className="mt-xs flex gap-1">
      {/* Avatar cluster */}
      <div className="flex -space-x-2">
      <div className="w-6 h-6 rounded-full border border-surface-container-lowest bg-surface-variant"></div>
      <div className="w-6 h-6 rounded-full border border-surface-container-lowest bg-surface-variant"></div>
      <div className="w-6 h-6 rounded-full border border-surface-container-lowest bg-surface-variant flex items-center justify-center font-label-caps text-label-caps text-[9px] text-on-surface">+2</div>
      </div>
      </div>
      </div>
      </article>
      {/* Card 6 */}
      <article className="bg-surface-container-lowest border border-outline-variant/50 rounded-DEFAULT p-sm shadow-sm flex flex-col gap-sm grayscale-[50%]">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-xs px-1.5 py-0.5">
      <span className="material-symbols-outlined text-[14px] text-outline">flight_land</span>
      <span className="font-code-data text-code-data text-outline font-bold">TK102</span>
      </div>
      <span className="font-code-data text-code-data text-outline text-[11px]">05:30 - 09:15</span>
      </div>
      <div>
      <p className="font-body-md text-body-md text-on-surface-variant font-medium">JFK → IST</p>
      </div>
      </article>
      </div>
      </section>
      </div>
      </main>
    </>
  );
}
