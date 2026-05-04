// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Leads Listesi
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface LeadsListesiProps {}

export function LeadsListesi(props: LeadsListesiProps) {
  return (
    <>
      {/* TopNavBar */}
      <header className="bg-white dark:bg-slate-950 flex justify-between items-center h-14 pl-64 pr-6 w-full fixed top-0 z-40 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-all duration-200">
      <div className="flex items-center gap-md">
      <span className="hidden text-lg font-bold text-slate-900 dark:text-white">Skyline Shift Planner</span>
      <div className="relative flex items-center">
      <span className="material-symbols-outlined absolute left-sm text-secondary text-body-md">search</span>
      <input className="h-9 pl-xl pr-sm bg-surface-container-low border-outline-variant rounded text-body-sm font-body-sm w-64 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" placeholder="Arama..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="bg-primary-container text-on-primary font-body-sm text-body-sm h-9 px-md rounded flex items-center gap-xs hover:bg-primary transition-colors">
      <span className="material-symbols-outlined text-[18px]">add</span>
                      Hızlı Ekle
                  </button>
      <div className="flex items-center gap-sm">
      <button className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-surface-variant text-secondary transition-colors">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-surface-variant text-secondary transition-colors">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      </div>
      <div className="h-8 w-8 rounded-full overflow-hidden ml-sm border border-outline-variant">
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="A professional headshot of an airline operations manager, clear bright lighting, neutral corporate background. The aesthetic is clean, modern, and trustworthy, aligning with a high-stakes operational environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxuwZolDwemZHxw6P59FoI9bUmUrgOZkXWQca0_3fIF9II2p-bozhg9ibJv4beSdod5irVXvdcxRj_sgqlW1BmVQuS9_ZEiRbZBhh1mfKdGgf38tEcaDwBvAjn7HT4aGm3U7PBoiwJJBxuRK4E76S72fc4-PRY1-gJhSeFzbUC3Z-i-MZ3WQWG_W6PXKLGAtaqJg_CCRe7k3u4xAtcgb2doURs2kb0_LlBSqQaBI8Bt-S8ac4Q41FaXlEkiXLW_IaK4hpkisF0TzY" />
      </div>
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="bg-slate-50 dark:bg-slate-900 flex flex-col h-full fixed left-0 top-0 h-screen w-64 border-r border-r border-slate-200 dark:border-slate-800 flat no shadows z-50">
      <div className="p-lg flex items-center gap-md border-b border-slate-200 dark:border-slate-800">
      <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
      <span className="material-symbols-outlined">flight_takeoff</span>
      </div>
      <div>
      <h1 className="text-lg font-bold text-slate-900 dark:text-white font-title-sm text-title-sm">Skyline Ops</h1>
      <p className="text-slate-500 dark:text-slate-400 font-label-caps text-label-caps mt-xs">Vardiya Planlayıcı</p>
      </div>
      </div>
      <div className="p-md">
      <button className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm text-body-sm h-10 rounded shadow-sm flex items-center justify-center gap-sm hover:bg-surface-container-low transition-colors duration-150 ease-in-out">
      <span className="material-symbols-outlined text-[18px]">add_circle</span>
                      Yeni Vardiya Oluştur
                  </button>
      </div>
      <ul className="flex flex-col flex-1 py-sm font-inter text-sm antialiased mt-sm">
      <li>
      <a className="flex items-center gap-md px-lg py-sm text-blue-600 dark:text-blue-400 font-semibold border-r-4 border-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out" href="#">
      <span className="material-symbols-outlined">supervisor_account</span>
      <span className="font-body-md text-body-md">Yöneticiler</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-lg py-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out" href="#">
      <span className="material-symbols-outlined">view_kanban</span>
      <span className="font-body-md text-body-md">Operasyon Akışı</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-lg py-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out" href="#">
      <span className="material-symbols-outlined">monitoring</span>
      <span className="font-body-md text-body-md">Analizler</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-lg py-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-body-md text-body-md">Ayarlar</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-lg py-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out" href="#">
      <span className="material-symbols-outlined">person</span>
      <span className="font-body-md text-body-md">Profil</span>
      </a>
      </li>
      </ul>
      </nav>
      {/* Main Content Canvas */}
      <main className="pt-14 pl-64 min-h-screen">
      <div className="p-margin max-w-[1400px] mx-auto">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-lg">
      <div>
      <h2 className="font-headline-md text-headline-md text-on-surface">Ekip Liderleri</h2>
      <p className="font-body-sm text-body-sm text-secondary mt-xs">Güncel operasyonel lider kadrosu ve durum izleme paneli.</p>
      </div>
      <button className="bg-primary-container text-on-primary font-body-sm text-body-sm h-10 px-md rounded flex items-center gap-sm shadow-sm hover:opacity-90 transition-opacity">
      <span className="material-symbols-outlined text-[18px]">person_add</span>
                          Yeni Lead Ekle
                      </button>
      </div>
      {/* Data Table Container (Surface) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm overflow-hidden flex flex-col">
      {/* Filter Bar */}
      <div className="p-md border-b border-outline-variant bg-surface-bright flex flex-wrap gap-md items-center">
      <div className="relative w-64">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-secondary text-[18px]">search</span>
      <input className="w-full h-9 pl-xl pr-sm bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:outline-none" placeholder="İsim veya Sicil No ile ara..." type="text" />
      </div>
      <div className="flex items-center gap-sm">
      <label className="font-label-caps text-label-caps text-secondary">ÜS:</label>
      <select className="h-9 px-sm bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:outline-none">
      <option>Tümü</option>
      <option>IST (İstanbul Havalimanı)</option>
      <option>SAW (Sabiha Gökçen)</option>
      <option>ESB (Esenboğa)</option>
      <option>AYT (Antalya)</option>
      </select>
      </div>
      <div className="flex items-center gap-sm">
      <label className="font-label-caps text-label-caps text-secondary">ROL:</label>
      <select className="h-9 px-sm bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:outline-none">
      <option>Tümü</option>
      <option>Hat Bakım Şefi</option>
      <option>Harekat Koordinatörü</option>
      <option>Kabin Ekip Amiri</option>
      </select>
      </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-low border-b border-outline-variant h-10">
      <th className="px-md font-label-caps text-label-caps text-secondary font-semibold w-12">#</th>
      <th className="px-md font-label-caps text-label-caps text-secondary font-semibold">PERSONEL</th>
      <th className="px-md font-label-caps text-label-caps text-secondary font-semibold">ROL</th>
      <th className="px-md font-label-caps text-label-caps text-secondary font-semibold">ÜS</th>
      <th className="px-md font-label-caps text-label-caps text-secondary font-semibold">İLETİŞİM</th>
      <th className="px-md font-label-caps text-label-caps text-secondary font-semibold">DURUM</th>
      <th className="px-md font-label-caps text-label-caps text-secondary font-semibold text-right">İŞLEMLER</th>
      </tr>
      </thead>
      <tbody className="font-body-md text-body-md text-on-surface">
      {/* Row 1 */}
      <tr className="h-10 border-b border-outline-variant hover:bg-surface-container-low transition-colors group">
      <td className="px-md font-code-data text-code-data text-secondary">LD-402</td>
      <td className="px-md">
      <div className="flex items-center gap-sm py-xs">
      <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-title-sm text-title-sm shrink-0">
                                                  MK
                                              </div>
      <span className="font-medium">Murat Keskin</span>
      </div>
      </td>
      <td className="px-md text-secondary">Hat Bakım Şefi</td>
      <td className="px-md"><span className="font-code-data text-code-data">IST</span></td>
      <td className="px-md text-secondary">m.keskin@skyline.com</td>
      <td className="px-md">
      <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-caps text-label-caps gap-xs">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                              Nöbette
                                          </span>
      </td>
      <td className="px-md text-right">
      <button className="text-secondary hover:text-primary-container p-xs rounded transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]">edit_document</span>
      </button>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="h-10 border-b border-outline-variant hover:bg-surface-container-low transition-colors group">
      <td className="px-md font-code-data text-code-data text-secondary">LD-189</td>
      <td className="px-md">
      <div className="flex items-center gap-sm py-xs">
      <img alt="Ayşe Yılmaz" className="w-8 h-8 rounded-full object-cover shrink-0" data-alt="A small circular avatar portrait of a female airline professional in a uniform. Bright neutral lighting, clean white background, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxaKwjkFtdmZuWu1gj4pDH_L2lKMSH2jPQqauLs_gUDDuwKQC5eo9Mj4vvD59XWQnCt83C2rQpVDqf9X_URYIha1CpgNmf0Kjob8AZ7-rlgR6LTiPASgbbPxKu_c7ZzNp8PEmKkQ48kd_Cpe9eyJiYoIWlvGwespF9l2ESy3SiHR-MJBtoDKllm6_bk-Y5ZPnutGg5cztN-0bNk0ghp61X7v2t6Y8p1XfNZUw3LOOQab53ZiQpe3Aks9Q9XbwRtlUSQ6Q52O2soow" />
      <span className="font-medium">Ayşe Yılmaz</span>
      </div>
      </td>
      <td className="px-md text-secondary">Harekat Koordinatörü</td>
      <td className="px-md"><span className="font-code-data text-code-data">SAW</span></td>
      <td className="px-md text-secondary">+90 532 123 4567</td>
      <td className="px-md">
      <span className="inline-flex items-center px-2 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-caps text-label-caps gap-xs border border-outline-variant">
      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                                              İstirahat
                                          </span>
      </td>
      <td className="px-md text-right">
      <button className="text-secondary hover:text-primary-container p-xs rounded transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]">edit_document</span>
      </button>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="h-10 border-b border-outline-variant hover:bg-surface-container-low transition-colors group">
      <td className="px-md font-code-data text-code-data text-secondary">LD-552</td>
      <td className="px-md">
      <div className="flex items-center gap-sm py-xs">
      <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed font-title-sm text-title-sm shrink-0">
                                                  CD
                                              </div>
      <span className="font-medium">Caner Demir</span>
      </div>
      </td>
      <td className="px-md text-secondary">Kabin Ekip Amiri</td>
      <td className="px-md"><span className="font-code-data text-code-data">IST</span></td>
      <td className="px-md text-secondary">c.demir@skyline.com</td>
      <td className="px-md">
      <span className="inline-flex items-center px-2 py-1 rounded-full bg-error-container text-error font-label-caps text-label-caps gap-xs">
      <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                              Raporlu
                                          </span>
      </td>
      <td className="px-md text-right">
      <button className="text-secondary hover:text-primary-container p-xs rounded transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]">edit_document</span>
      </button>
      </td>
      </tr>
      {/* Row 4 */}
      <tr className="h-10 border-b border-outline-variant hover:bg-surface-container-low transition-colors group">
      <td className="px-md font-code-data text-code-data text-secondary">LD-210</td>
      <td className="px-md">
      <div className="flex items-center gap-sm py-xs">
      <img alt="Burak Tekin" className="w-8 h-8 rounded-full object-cover shrink-0" data-alt="A small circular avatar portrait of a male airline professional. Serious expression, neutral background, sharp corporate lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl-B2COxXFT4FjH1fnqvZTRlqkKY16LSH0LS11Xl7YQWG3IJfim3q4BG2DO_6U8mOs5xKk4how8nWLOu_yT5nI1Q0aUm6Y-Wu76tXMRGi29CXxL-URLPLfdEZDlGVrZrELkwz3cowuWfhSwlP-8G7W4oESuCpQnIp7vm_V5TA31jHMTyXz8UoOUbIkVPhfWSi4h0tETVevBavXGMtHWplkC2-Y9jISsQpRc5JRtptu0XJfwVLBt8qbobfIKoNhx9Od3mBfFkmvR6E" />
      <span className="font-medium">Burak Tekin</span>
      </div>
      </td>
      <td className="px-md text-secondary">Hat Bakım Şefi</td>
      <td className="px-md"><span className="font-code-data text-code-data">ESB</span></td>
      <td className="px-md text-secondary">b.tekin@skyline.com</td>
      <td className="px-md">
      <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-caps text-label-caps gap-xs">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                              Nöbette
                                          </span>
      </td>
      <td className="px-md text-right">
      <button className="text-secondary hover:text-primary-container p-xs rounded transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]">edit_document</span>
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Pagination Footer */}
      <div className="p-sm px-md bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
      <span className="font-body-sm text-body-sm text-secondary">Toplam 48 kayıt, 1-4 gösteriliyor</span>
      <div className="flex items-center gap-xs">
      <button className="w-8 h-8 rounded flex items-center justify-center text-secondary border border-outline-variant bg-surface-container-lowest hover:bg-surface-variant transition-colors disabled:opacity-50" disabled={true}>
      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
      </button>
      <button className="w-8 h-8 rounded flex items-center justify-center text-secondary border border-outline-variant bg-surface-container-lowest hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
