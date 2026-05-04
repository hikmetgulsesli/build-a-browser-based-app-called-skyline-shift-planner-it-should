// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Leads Listesi
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppState, Page, Lead, LeadRole, BaseCode } from "../types/domain";

interface LeadsListesiProps {
  state: AppState;
  navigate: (page: Page) => void;
  setEditLead: (id: string | null) => void;
  setSearchQuery: (q: string) => void;
  setBaseFilter: (b: string) => void;
  setRoleFilter: (r: string) => void;
  deleteLead: (id: string) => void;
}

const roleLabels: Record<string, string> = {
  captain: 'Kaptan Pilot',
  first_officer: 'İkinci Pilot',
  cabin_chief: 'Kabin Amiri',
  dispatcher: 'Uçuş Harekat Uzmanı (Dispeçer)',
  ground_ops: 'Yer İşletme Sorumlusu',
};

const statusLabels: Record<string, { text: string; className: string; dot: string }> = {
  pending: { text: 'Değerlendirme Bekliyor', className: 'bg-surface-variant text-on-surface-variant border border-outline-variant', dot: 'bg-outline' },
  interview: { text: 'Mülakat Aşamasında', className: 'bg-primary-fixed text-on-primary-fixed-variant', dot: 'bg-primary' },
  simulator: { text: 'Simülatör Testinde', className: 'bg-tertiary-fixed text-on-tertiary-fixed', dot: 'bg-tertiary' },
  approved: { text: 'Onaylandı', className: 'bg-primary-fixed text-on-primary-fixed-variant', dot: 'bg-primary' },
  rejected: { text: 'Olumsuz Sonuçlandı', className: 'bg-error-container text-error', dot: 'bg-error' },
};

export function LeadsListesi(props: LeadsListesiProps) {
  const { state, navigate, setEditLead, setSearchQuery, setBaseFilter, setRoleFilter, deleteLead } = props;
  const [helpOpen, setHelpOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const filtered = state.leads.filter((l) => {
    const matchesSearch =
      l.fullName.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      l.id.toLowerCase().includes(state.searchQuery.toLowerCase());
    const matchesBase = state.baseFilter === 'all' || l.base === state.baseFilter;
    const matchesRole = state.roleFilter === 'all' || l.role === state.roleFilter;
    return matchesSearch && matchesBase && matchesRole;
  });

  return (
    <>
      {/* TopNavBar */}
      <header className="bg-white dark:bg-slate-950 flex justify-between items-center h-14 pl-64 pr-6 w-full fixed top-0 z-40 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-all duration-200">
      <div className="flex items-center gap-md">
      <span className="hidden text-lg font-bold text-slate-900 dark:text-white">Skyline Shift Planner</span>
      <div className="relative flex items-center">
      <span className="material-symbols-outlined absolute left-sm text-secondary text-body-md">search</span>
      <input
        className="h-9 pl-xl pr-sm bg-surface-container-low border-outline-variant rounded text-body-sm font-body-sm w-64 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all"
        placeholder="Arama..."
        type="text"
        value={state.searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="bg-primary-container text-on-primary font-body-sm text-body-sm h-9 px-md rounded flex items-center gap-xs hover:bg-primary transition-colors" onClick={() => navigate('add-lead')}>
      <span className="material-symbols-outlined text-[18px]">add</span>
                      Hızlı Ekle
                  </button>
      <div className="flex items-center gap-sm">
      <button aria-label="Bildirimler" className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-surface-variant text-secondary transition-colors" onClick={() => setNotifOpen(prev => !prev)}>
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button aria-label="Yardım" className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-surface-variant text-secondary transition-colors" onClick={() => setHelpOpen(true)}>
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      </div>
      <button className="h-8 w-8 rounded-full overflow-hidden ml-sm border border-outline-variant" onClick={() => navigate('profile')}>
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="A professional headshot of an airline operations manager, clear bright lighting, neutral corporate background. The aesthetic is clean, modern, and trustworthy, aligning with a high-stakes operational environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxuwZolDwemZHxw6P59FoI9bUmUrgOZkXWQca0_3fIF9II2p-bozhg9ibJv4beSdod5irVXvdcxRj_sgqlW1BmVQuS9_ZEiRbZBhh1mfKdGgf38tEcaDwBvAjn7HT4aGm3U7PBoiwJJBxuRK4E76S72fc4-PRY1-gJhSeFzbUC3Z-i-MZ3WQWG_W6PXKLGAtaqJg_CCRe7k3u4xAtcgb2doURs2kb0_LlBSqQaBI8Bt-S8ac4Q41FaXlEkiXLW_IaK4hpkisF0TzY" />
      </button>
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
      <button className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm text-body-sm h-10 rounded shadow-sm flex items-center justify-center gap-sm hover:bg-surface-container-low transition-colors duration-150 ease-in-out" onClick={() => navigate('add-lead')}>
      <span className="material-symbols-outlined text-[18px]">add_circle</span>
                      Yeni Vardiya Oluştur
                  </button>
      </div>
      <ul className="flex flex-col flex-1 py-sm font-inter text-sm antialiased mt-sm">
      <li>
      <button className="flex items-center gap-md px-lg py-sm text-blue-600 dark:text-blue-400 font-semibold border-r-4 border-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out w-full text-left">
      <span className="material-symbols-outlined">supervisor_account</span>
      <span className="font-body-md text-body-md">Yöneticiler</span>
      </button>
      </li>
      <li>
      <button className="flex items-center gap-md px-lg py-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out w-full text-left" onClick={() => navigate('pipeline')}>
      <span className="material-symbols-outlined">view_kanban</span>
      <span className="font-body-md text-body-md">Operasyon Akışı</span>
      </button>
      </li>
      <li>
      <button className="flex items-center gap-md px-lg py-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out w-full text-left" onClick={() => navigate('dashboard')}>
      <span className="material-symbols-outlined">monitoring</span>
      <span className="font-body-md text-body-md">Analizler</span>
      </button>
      </li>
      <li>
      <button className="flex items-center gap-md px-lg py-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out w-full text-left" onClick={() => navigate('settings')}>
      <span className="material-symbols-outlined">settings</span>
      <span className="font-body-md text-body-md">Ayarlar</span>
      </button>
      </li>
      <li>
      <button className="flex items-center gap-md px-lg py-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out w-full text-left" onClick={() => navigate('errors')}>
      <span className="material-symbols-outlined">error_outline</span>
      <span className="font-body-md text-body-md">Hatalar ve Boş Durumlar</span>
      </button>
      </li>
      <li>
      <button className="flex items-center gap-md px-lg py-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out w-full text-left" onClick={() => navigate('profile')}>
      <span className="material-symbols-outlined">person</span>
      <span className="font-body-md text-body-md">Profil</span>
      </button>
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
      <button className="bg-primary-container text-on-primary font-body-sm text-body-sm h-10 px-md rounded flex items-center gap-sm shadow-sm hover:opacity-90 transition-opacity" onClick={() => navigate('add-lead')}>
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
      <input
        className="w-full h-9 pl-xl pr-sm bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:outline-none"
        placeholder="İsim veya Sicil No ile ara..."
        type="text"
        value={state.searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
      <div className="flex items-center gap-sm">
      <label className="font-label-caps text-label-caps text-secondary">ÜS:</label>
      <select
        className="h-9 px-sm bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:outline-none"
        value={state.baseFilter}
        onChange={(e) => setBaseFilter(e.target.value)}
      >
      <option value="all">Tümü</option>
      <option value="IST">IST (İstanbul Havalimanı)</option>
      <option value="SAW">SAW (Sabiha Gökçen)</option>
      <option value="ESB">ESB (Esenboğa)</option>
      <option value="AYT">AYT (Antalya)</option>
      </select>
      </div>
      <div className="flex items-center gap-sm">
      <label className="font-label-caps text-label-caps text-secondary">ROL:</label>
      <select
        className="h-9 px-sm bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:outline-none"
        value={state.roleFilter}
        onChange={(e) => setRoleFilter(e.target.value)}
      >
      <option value="all">Tümü</option>
      <option value="captain">Kaptan Pilot</option>
      <option value="first_officer">İkinci Pilot</option>
      <option value="cabin_chief">Kabin Amiri</option>
      <option value="dispatcher">Uçuş Harekat Uzmanı</option>
      <option value="ground_ops">Yer İşletme Sorumlusu</option>
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
      {filtered.map((lead) => {
        const st = statusLabels[lead.status] || statusLabels.pending;
        const initials = lead.fullName.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase();
        return (
      <tr key={lead.id} className="h-10 border-b border-outline-variant hover:bg-surface-container-low transition-colors group">
      <td className="px-md font-code-data text-code-data text-secondary">{lead.id}</td>
      <td className="px-md">
      <div className="flex items-center gap-sm py-xs">
      <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-title-sm text-title-sm shrink-0">
                                                  {initials}
                                              </div>
      <span className="font-medium">{lead.fullName}</span>
      </div>
      </td>
      <td className="px-md text-secondary">{roleLabels[lead.role] || lead.role}</td>
      <td className="px-md"><span className="font-code-data text-code-data">{lead.base}</span></td>
      <td className="px-md text-secondary">{lead.email || lead.phone || '-'}</td>
      <td className="px-md">
      <span className={`inline-flex items-center px-2 py-1 rounded-full font-label-caps text-label-caps gap-xs ${st.className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`}></span>
                                              {st.text}
                                          </span>
      </td>
      <td className="px-md text-right">
      <button
        aria-label="Düzenle"
        className="text-secondary hover:text-primary-container p-xs rounded transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
        onClick={() => setEditLead(lead.id)}
      >
      <span className="material-symbols-outlined text-[20px]">edit_document</span>
      </button>
      <button
        aria-label="Sil"
        className="text-secondary hover:text-error p-xs rounded transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
        onClick={() => deleteLead(lead.id)}
      >
      <span className="material-symbols-outlined text-[20px]">delete</span>
      </button>
      </td>
      </tr>
        );
      })}
      {filtered.length === 0 && (
      <tr>
      <td colSpan={7} className="px-md py-lg text-center text-secondary font-body-md">
        Sonuç bulunamadı.
      </td>
      </tr>
      )}
      </tbody>
      </table>
      </div>
      {/* Pagination Footer */}
      <div className="p-sm px-md bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
      <span className="font-body-sm text-body-sm text-secondary">Toplam {filtered.length} kayıt gösteriliyor</span>
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
      {notifOpen && (
        <div className="fixed top-14 right-4 w-80 bg-white dark:bg-slate-900 shadow-xl rounded-xl border border-slate-200 dark:border-slate-700 z-[90] max-h-[400px] overflow-y-auto">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <h4 className="font-bold text-slate-900 dark:text-white">Bildirimler</h4>
            <button className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300" onClick={() => setNotifOpen(false)}>
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
          {state.alerts.length === 0 && (
            <div className="p-4 text-sm text-slate-500">Yeni bildirim yok.</div>
          )}
          {state.alerts.map(a => (
            <div key={a.id} className="p-3 border-b border-slate-100 dark:border-slate-800 text-sm">
              <p className="font-medium text-slate-900 dark:text-white">{a.title}</p>
              <p className="text-slate-500 dark:text-slate-400">{a.description}</p>
            </div>
          ))}
        </div>
      )}
      {helpOpen && (
        <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center" onClick={() => setHelpOpen(false)}>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl max-w-md w-full mx-4 border border-slate-200 dark:border-slate-700" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Yardım</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Skyline Shift Planner operasyonel vardiya yönetim aracıdır. Sayfalar arasında gezinmek için sol menüyü, yeni lead eklemek için &quot;Hızlı Ekle&quot; butonunu kullanabilirsiniz.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors" onClick={() => setHelpOpen(false)}>Kapat</button>
          </div>
        </div>
      )}
    </>
  );
}
