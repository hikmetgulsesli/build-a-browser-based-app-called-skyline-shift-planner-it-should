// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ayarlar
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AyarlarProps {}

export function Ayarlar(props: AyarlarProps) {
  return (
    <>
      {/* Shared Component: SideNavBar */}
      <nav className="bg-slate-50 dark:bg-slate-900 h-screen w-64 border-r border-r border-slate-200 dark:border-slate-800 flex flex-col h-full fixed left-0 top-0 z-50">
      {/* Header */}
      <div className="p-lg flex items-center gap-sm">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
      <span className="material-symbols-outlined text-title-sm">flight_takeoff</span>
      </div>
      <div>
      <div className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Skyline Ops</div>
      <div className="font-inter text-sm antialiased text-slate-500">Vardiya Planlayıcı</div>
      </div>
      </div>
      {/* Navigation Links */}
      <ul className="flex flex-col flex-grow px-sm py-sm gap-xs">
      <li>
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out font-inter text-sm antialiased" href="#">
      <span className="material-symbols-outlined">supervisor_account</span>
      <span>Yöneticiler</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out font-inter text-sm antialiased" href="#">
      <span className="material-symbols-outlined">view_kanban</span>
      <span>Operasyon Akışı</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out font-inter text-sm antialiased" href="#">
      <span className="material-symbols-outlined">monitoring</span>
      <span>Analizler</span>
      </a>
      </li>
      <li>
      {/* Active Tab: Ayarlar */}
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-blue-600 dark:text-blue-400 font-semibold border-r-4 border-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150 ease-in-out font-inter text-sm antialiased bg-blue-50/50" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
      <span>Ayarlar</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out font-inter text-sm antialiased" href="#">
      <span className="material-symbols-outlined">person</span>
      <span>Profil</span>
      </a>
      </li>
      </ul>
      {/* CTA */}
      <div className="p-lg">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-inter text-sm antialiased py-sm rounded-lg font-medium transition-colors shadow-sm">
                      Yeni Vardiya Oluştur
                  </button>
      </div>
      </nav>
      {/* Shared Component: TopNavBar */}
      <header className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none flex justify-between items-center h-14 pl-64 pr-6 w-full fixed top-0 z-40 transition-all duration-200">
      {/* Search Area (on_left) */}
      <div className="flex-1 flex items-center px-lg">
      <div className="relative w-64">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
      <input className="w-full pl-[32px] pr-sm py-[6px] bg-slate-50 border border-slate-200 rounded-md text-sm font-inter focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="Ara..." type="text" />
      </div>
      </div>
      {/* Right Actions */}
      <div className="flex items-center gap-sm">
      <button className="text-blue-600 dark:text-blue-400 font-inter text-sm font-medium hover:text-blue-500 dark:hover:text-blue-300 transition-all duration-200 px-sm py-xs">
                      Hızlı Ekle
                  </button>
      <div className="w-px h-6 bg-slate-200 mx-xs"></div>
      <button className="text-slate-500 hover:text-blue-500 transition-colors p-xs flex items-center justify-center rounded-full hover:bg-slate-50">
      <span className="material-symbols-outlined text-[20px]">notifications</span>
      </button>
      <button className="text-slate-500 hover:text-blue-500 transition-colors p-xs flex items-center justify-center rounded-full hover:bg-slate-50">
      <span className="material-symbols-outlined text-[20px]">help_outline</span>
      </button>
      <div className="ml-sm w-8 h-8 rounded-full bg-slate-200 border border-slate-300 overflow-hidden cursor-pointer">
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="A realistic close-up portrait of a professional aviation manager in a bright, modern corporate environment. Clean lighting, minimalist background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAElw1f-yZRZkRDNB-F9k72wX4j7Wz0CE4pn9WfS8v23lLxT1u2Ck893GcJReixI5Bu7E1_7M3o_4v9fdJODOuXxT7zLaeDIXao2pzy6BpxU6kTf01WOXbvviblEbl20GILvwuHNS8IW7KzXeTK2aQrd12GuilR-5Li1spNvXNS3jlK2mVq6Tmxv_MXpMJ5PIk5LiAZFNrYziKXbYCohYpz8y63vUMtZlYFB2cFKODq4R_X2TiyjuixOaD4Lksh8yON3EF_8f_hW3s" />
      </div>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="ml-64 mt-14 flex-1 h-[calc(100vh-56px)] overflow-y-auto bg-background p-xl">
      <div className="max-w-4xl mx-auto flex flex-col gap-xl pb-xl">
      {/* Page Header */}
      <div>
      <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Sistem Ayarları</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">Operasyonel tercihlerinizi, dil, zaman dilimi ve bildirim ayarlarını yapılandırın.</p>
      </div>
      <div className="grid grid-cols-1 gap-lg">
      {/* Section: Genel Ayarlar */}
      <section className="bg-surface border border-outline-variant rounded-xl p-lg flex flex-col gap-md">
      <div className="border-b border-surface-variant pb-sm">
      <h2 className="font-title-sm text-title-sm text-on-surface flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary">language</span>
                                  Genel Ayarlar
                              </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg pt-sm">
      {/* Dil Seçımi */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="language">DİL (LANGUAGE)</label>
      <div className="relative">
      <select className="w-full h-[40px] appearance-none bg-surface-lowest border border-outline-variant rounded px-sm py-xs font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors pr-[32px]" id="language">
      <option selected={true} value="tr">Türkçe</option>
      <option value="en">English (US)</option>
      </select>
      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">expand_more</span>
      </div>
      </div>
      {/* Saat Dilimi */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="timezone">SAAT DİLİMİ</label>
      <div className="relative">
      <select className="w-full h-[40px] appearance-none bg-surface-lowest border border-outline-variant rounded px-sm py-xs font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors pr-[32px]" id="timezone">
      <option selected={true} value="Europe/Istanbul">(GMT+03:00) Europe/Istanbul</option>
      <option value="UTC">(GMT+00:00) UTC</option>
      </select>
      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">expand_more</span>
      </div>
      </div>
      </div>
      </section>
      {/* Section: Bildirim Tercihleri */}
      <section className="bg-surface border border-outline-variant rounded-xl p-lg flex flex-col gap-md">
      <div className="border-b border-surface-variant pb-sm">
      <h2 className="font-title-sm text-title-sm text-on-surface flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary">notifications_active</span>
                                  Bildirim Tercihleri
                              </h2>
      </div>
      <div className="flex flex-col gap-md pt-sm">
      {/* E-posta */}
      <div className="flex items-center justify-between p-sm hover:bg-surface-container-lowest rounded transition-colors -mx-sm px-sm">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md font-medium text-on-surface">E-posta Bildirimleri</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Vardiya değişiklikleri ve önemli sistem uyarıları için.</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      {/* Anlık */}
      <div className="flex items-center justify-between p-sm hover:bg-surface-container-lowest rounded transition-colors -mx-sm px-sm">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md font-medium text-on-surface">Anlık (Push) Bildirimleri</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Tarayıcı üzerinden acil operasyonel uyarılar.</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      </div>
      </section>
      {/* Section: Tema Tercihleri */}
      <section className="bg-surface border border-outline-variant rounded-xl p-lg flex flex-col gap-md">
      <div className="border-b border-surface-variant pb-sm">
      <h2 className="font-title-sm text-title-sm text-on-surface flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary">palette</span>
                                  Tema Tercihleri
                              </h2>
      </div>
      <div className="grid grid-cols-3 gap-md pt-sm">
      {/* Light */}
      <label className="relative cursor-pointer">
      <input checked={true} className="peer sr-only" name="theme" type="radio" value="light" />
      <div className="border-2 border-outline-variant rounded-lg p-sm text-center peer-checked:border-primary peer-checked:bg-primary-fixed/20 transition-all flex flex-col items-center gap-sm">
      <div className="w-full h-20 bg-surface-bright rounded border border-surface-variant flex items-center justify-center">
      <span className="material-symbols-outlined text-on-surface text-[32px]">light_mode</span>
      </div>
      <span className="font-body-sm text-body-sm font-medium text-on-surface">Açık</span>
      </div>
      </label>
      {/* Dark */}
      <label className="relative cursor-pointer">
      <input className="peer sr-only" name="theme" type="radio" value="dark" />
      <div className="border-2 border-outline-variant rounded-lg p-sm text-center peer-checked:border-primary peer-checked:bg-primary-fixed/20 transition-all flex flex-col items-center gap-sm">
      <div className="w-full h-20 bg-inverse-surface rounded border border-surface-variant flex items-center justify-center">
      <span className="material-symbols-outlined text-on-primary text-[32px]">dark_mode</span>
      </div>
      <span className="font-body-sm text-body-sm font-medium text-on-surface">Koyu</span>
      </div>
      </label>
      {/* System */}
      <label className="relative cursor-pointer">
      <input className="peer sr-only" name="theme" type="radio" value="system" />
      <div className="border-2 border-outline-variant rounded-lg p-sm text-center peer-checked:border-primary peer-checked:bg-primary-fixed/20 transition-all flex flex-col items-center gap-sm">
      <div className="w-full h-20 bg-gradient-to-r from-surface-bright to-inverse-surface rounded border border-surface-variant flex items-center justify-center">
      <span className="material-symbols-outlined text-outline text-[32px]">settings_suggest</span>
      </div>
      <span className="font-body-sm text-body-sm font-medium text-on-surface">Sistem</span>
      </div>
      </label>
      </div>
      </section>
      {/* Actions */}
      <div className="flex justify-end pt-sm border-t border-outline-variant mt-sm">
      <button className="bg-primary text-on-primary hover:bg-on-primary-fixed-variant transition-colors rounded px-lg py-[10px] font-title-sm text-body-md shadow-sm">
                              Değişiklikleri Kaydet
                          </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
