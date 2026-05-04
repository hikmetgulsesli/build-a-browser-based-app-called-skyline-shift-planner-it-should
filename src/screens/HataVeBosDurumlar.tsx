// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Hata ve Boş Durumlar
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface HataVeBosDurumlarProps {}

export function HataVeBosDurumlar(props: HataVeBosDurumlarProps) {
  return (
    <>
      {/* Shared Component: SideNavBar */}
      <nav className="bg-slate-50 dark:bg-slate-900 font-inter text-sm antialiased h-screen w-64 border-r border-r border-slate-200 dark:border-slate-800 flat no shadows flex flex-col h-full fixed left-0 top-0 z-50">
      {/* Brand Area */}
      <div className="p-margin flex items-center gap-sm">
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>flight_takeoff</span>
      </div>
      <div>
      <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Skyline Ops</h1>
      <p className="text-slate-500 dark:text-slate-400 font-label-caps text-label-caps">Vardiya Planlayıcı</p>
      </div>
      </div>
      {/* Navigation Links */}
      <ul className="flex flex-col flex-1 py-sm">
      <li>
      <a className="flex items-center gap-sm px-margin py-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out" href="#">
      <span className="material-symbols-outlined">supervisor_account</span>
      <span>Yöneticiler</span>
      </a>
      </li>
      {/* Active Tab: Operasyon Akışı */}
      <li>
      <a className="flex items-center gap-sm px-margin py-sm transition-colors duration-150 ease-in-out text-blue-600 dark:text-blue-400 font-semibold border-r-4 border-blue-600 bg-slate-100" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>view_kanban</span>
      <span>Operasyon Akışı</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-margin py-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out" href="#">
      <span className="material-symbols-outlined">monitoring</span>
      <span>Analizler</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-margin py-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span>Ayarlar</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-margin py-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out" href="#">
      <span className="material-symbols-outlined">person</span>
      <span>Profil</span>
      </a>
      </li>
      </ul>
      {/* CTA */}
      <div className="p-margin border-t border-slate-200">
      <button className="w-full bg-primary-container text-on-primary font-body-md text-body-md font-medium rounded h-10 flex items-center justify-center gap-xs hover:bg-primary transition-colors">
      <span className="material-symbols-outlined text-[18px]">add</span>
                      Yeni Vardiya Oluştur
                  </button>
      </div>
      </nav>
      {/* Shared Component: TopNavBar */}
      <header className="bg-white dark:bg-slate-950 font-inter text-sm border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none flex justify-between items-center h-14 pl-64 pr-6 w-full fixed top-0 z-40 transition-all duration-200">
      {/* Left Area (Empty in this config as brand is hidden, search is on_left but no specific input defined in JSON, creating a minimal placeholder) */}
      <div className="flex items-center flex-1 ml-lg">
      <div className="hidden text-lg font-bold text-slate-900 dark:text-white">Skyline Shift Planner</div>
      <div className="relative w-64">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
      <input className="w-full h-9 pl-xl pr-sm bg-surface-container-lowest border border-outline-variant rounded text-body-sm font-body-sm focus:outline-none focus:border-primary-container" placeholder="Operasyon ara..." type="text" />
      </div>
      </div>
      {/* Right Area: Actions */}
      <div className="flex items-center gap-md">
      <div className="flex items-center gap-xs">
      <button className="p-xs text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-all duration-200 rounded hover:bg-surface-container">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="p-xs text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-all duration-200 rounded hover:bg-surface-container">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      </div>
      {/* Trailing Primary Action */}
      <button className="h-9 px-md bg-surface-container-lowest border border-outline-variant text-on-surface-variant font-body-sm text-body-sm rounded flex items-center gap-xs hover:bg-surface-container transition-colors">
      <span className="material-symbols-outlined text-[16px]">bolt</span>
                      Hızlı Ekle
                  </button>
      {/* Profile Placeholder */}
      <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center overflow-hidden cursor-pointer">
      <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
      </div>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 ml-64 mt-14 p-margin overflow-y-auto bg-background flex flex-col gap-lg">
      {/* Page Header */}
      <div className="flex flex-col gap-base">
      <h2 className="font-headline-md text-headline-md text-on-background">Operasyon Akışı</h2>
      <p className="font-body-sm text-body-sm text-secondary">Güncel uçuş ve ekip verileri senkronizasyon durumu.</p>
      </div>
      {/* Error Banner Component */}
      <div className="bg-error-container border border-[#ffb4ab] rounded-lg p-md flex flex-col md:flex-row items-start md:items-center gap-md shadow-sm">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/50 text-error flex-shrink-0">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>sync_problem</span>
      </div>
      <div className="flex-1 flex flex-col gap-base">
      <h3 className="font-title-sm text-title-sm text-on-error-container">Senkronizasyon Hatası</h3>
      <p className="font-body-sm text-body-sm text-[#93000a]">
                          Merkezi sunucu ile bağlantı kurulamadı. Son kaydedilen veriler yerel önbellekte tutulmaktadır. Lütfen bağlantınızı kontrol edip tekrar deneyin.
                      </p>
      </div>
      <div className="flex items-center gap-sm w-full md:w-auto mt-sm md:mt-0">
      <button className="flex-1 md:flex-none h-9 px-md border border-[#ffb4ab] text-[#93000a] bg-transparent hover:bg-white/20 font-body-sm text-body-sm rounded transition-colors whitespace-nowrap">
                          Veriyi Temizle
                      </button>
      <button className="flex-1 md:flex-none h-9 px-md bg-error text-on-error font-body-sm text-body-sm rounded hover:bg-[#93000a] transition-colors whitespace-nowrap flex items-center justify-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">refresh</span>
                          Tekrar Dene
                      </button>
      </div>
      </div>
      {/* Empty State Component */}
      <div className="flex-1 flex flex-col items-center justify-center bg-surface border border-surface-variant rounded-lg p-xl min-h-[400px]">
      {/* Highly Detailed Prompt for Empty State Illustration */}
      <div className="w-64 h-64 mb-lg relative">
      <img alt="Empty Data Illustration" className="w-full h-full object-contain" data-alt="A minimalist, abstract 3D illustration representing an empty database or missing records in a clean, modern corporate aviation environment. The scene features light grey and pure white geometric shapes, resembling empty translucent folders and hovering wireframe data blocks, resting on a smooth, reflective surface. Soft, high-key white lighting creates a calm, professional, light-mode aesthetic without deep shadows. The color palette is strictly neutral whites and light greys, punctuated by very subtle, clinical blue accents reflecting the Skyline Ops operational brand identity. The overall mood is highly organized, sterile, and awaiting user input." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkCVof43yku8Vq-xfYCydBAkWgj-PiVTgRxXGVrgfZUuonBV7UpExCtIMDaabP3nrxEkzYF7PsFv4UPiwhIe_xUyd-IwCxrvjJlfAsfSWriSZo3Xq-VIgWfgAMNP1WuBUyI-TQrS5CUpNXNBNPtV_d4DQFjVdAUlj0tkcdjrwitb4DSBpjDu3wczclahbRyeMnnIieYF5EKl4Pusm4ZQksMjOrL3hjHPp6zUmGK5cMc48ppA96bAWUPZ6PaQuESltIM-4VH1KycNk" />
      </div>
      <div className="text-center max-w-md flex flex-col items-center gap-sm">
      <h3 className="font-headline-md text-headline-md text-on-surface">Henüz kayıtlı lead bulunmuyor</h3>
      <p className="font-body-md text-body-md text-secondary text-center mb-md">
                          Operasyon ağınıza dahil edilmiş yeni bir potansiyel bağlantı veya uçuş talebi verisi mevcut değil. Veri akışını başlatmak için manuel giriş yapabilirsiniz.
                      </p>
      <button className="h-10 px-lg bg-primary-container text-on-primary font-title-sm text-title-sm rounded hover:bg-primary transition-colors shadow-sm flex items-center gap-xs">
      <span className="material-symbols-outlined">add_circle</span>
                          Yeni Lead Ekle
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
