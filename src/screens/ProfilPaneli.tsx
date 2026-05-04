// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Profil Paneli
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppState, Page } from "../types/domain";

interface ProfilPaneliProps {
  state: AppState;
  navigate: (page: Page) => void;
  setSearchQuery: (q: string) => void;
}

export function ProfilPaneli(props: ProfilPaneliProps) {
  const { state, navigate, setSearchQuery } = props;
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [helpOpen, setHelpOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <>
      {/* JSON Component: SideNavBar */}
      <nav className="flex flex-col h-full fixed left-0 top-0 h-screen w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 font-inter text-sm antialiased z-50">
      <div className="px-6 py-lg border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-sm mb-lg">
      <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-on-primary font-bold">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>flight_takeoff</span>
      </div>
      <div>
      <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Skyline Ops</h1>
      <p className="text-xs text-slate-500 dark:text-slate-400">Vardiya Planlayıcı</p>
      </div>
      </div>
      <button className="w-full bg-primary-container hover:bg-primary text-on-primary py-2 rounded transition-colors duration-150 ease-in-out font-medium flex items-center justify-center gap-2" onClick={() => navigate('add-lead')}>
      <span className="material-symbols-outlined text-[18px]">add</span>
                      Yeni Vardiya Oluştur
                  </button>
      </div>
      <ul className="flex flex-col py-md flex-grow">
      <li>
      <button className="flex items-center gap-sm px-6 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out w-full text-left" onClick={() => navigate('leads')}>
      <span className="material-symbols-outlined">supervisor_account</span>
                          Yöneticiler
                      </button>
      </li>
      <li>
      <button className="flex items-center gap-sm px-6 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out w-full text-left" onClick={() => navigate('pipeline')}>
      <span className="material-symbols-outlined">view_kanban</span>
                          Operasyon Akışı
                      </button>
      </li>
      <li>
      <button className="flex items-center gap-sm px-6 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out w-full text-left" onClick={() => navigate('dashboard')}>
      <span className="material-symbols-outlined">monitoring</span>
                          Analizler
                      </button>
      </li>
      <li>
      <button className="flex items-center gap-sm px-6 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out w-full text-left" onClick={() => navigate('settings')}>
      <span className="material-symbols-outlined">settings</span>
                          Ayarlar
                      </button>
      </li>
      <li>
      <button className="flex items-center gap-sm px-6 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors duration-150 ease-in-out w-full text-left" onClick={() => navigate('errors')}>
      <span className="material-symbols-outlined">error_outline</span>
                          Hatalar ve Boş Durumlar
                      </button>
      </li>
      <li>
      <button className="flex items-center gap-sm px-6 py-3 text-blue-600 dark:text-blue-400 font-semibold border-r-4 border-blue-600 bg-slate-100 dark:bg-slate-800 transition-colors duration-150 ease-in-out w-full text-left">
      <span className="material-symbols-outlined">person</span>
                          Profil
                      </button>
      </li>
      </ul>
      </nav>
      {/* JSON Component: TopNavBar */}
      <header className="flex justify-between items-center h-14 pl-64 pr-6 w-full fixed top-0 z-40 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 font-inter text-sm shadow-sm dark:shadow-none transition-all duration-200">
      <div className="pl-md">
      <div className="relative w-64">
      <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
      <input className="w-full pl-8 pr-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-xs focus:outline-none focus:border-blue-500 transition-all duration-200 text-slate-700 dark:text-slate-300" placeholder="Ara..." type="text" value={state.searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-blue-700 transition-colors duration-200" onClick={() => navigate('add-lead')}>Hızlı Ekle</button>
      <div className="flex items-center gap-sm text-slate-500 dark:text-slate-400 border-l border-slate-200 dark:border-slate-800 pl-md">
      <button aria-label="Bildirimler" className="hover:text-blue-500 dark:hover:text-blue-300 transition-all duration-200 flex items-center" onClick={() => setNotifOpen(prev => !prev)}>
      <span className="material-symbols-outlined text-[20px]">notifications</span>
      </button>
      <button aria-label="Yardım" className="hover:text-blue-500 dark:hover:text-blue-300 transition-all duration-200 flex items-center" onClick={() => setHelpOpen(true)}>
      <span className="material-symbols-outlined text-[20px]">help_outline</span>
      </button>
      <button className="ml-sm cursor-pointer border-2 border-transparent hover:border-blue-500 rounded-full transition-all duration-200" onClick={() => setDrawerOpen(true)}>
      <img alt="Kullanıcı Profili" className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-slate-700" data-alt="A professional headshot of an authoritative male operations manager in a well-lit, modern corporate setting. He is wearing a crisp white shirt and a subtle dark tie. The lighting is high-key and bright, reflecting a clean, corporate light-mode aesthetic. The background is softly blurred to keep the focus sharp on his confident, composed expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsClCF_c4SAXVHhn_lDg-yBt2LLrhtm2MzCF7DGJtXG_YgCe_8dXnrmePfFYxhuFf8wQJAY2j5yIfrfejzlGeddipI9Hw3lI3hRZ0o7dP9oc2PHMq_BbQpDXD8RRvNEl2Gl3gIgYZujcEIDHcWHkETPelqy9WMUKpwWnRNO_yr5ybM_KDBny9-HNYYLf-RJZ281ERrH1i8YnHdWFnqaGQ8c9kzml5qHNLiRIlxnhz7swXK8KAH3c8tLJO4e3-4WDVx4pcELJJ95NM" />
      </button>
      </div>
      </div>
      </header>
      {/* Main Canvas Content (Behind Drawer) */}
      <main className="pt-14 pl-64 p-margin min-h-screen">
      <div className="max-w-6xl mx-auto">
      <div className="mb-lg">
      <h2 className="font-headline-md text-headline-md text-on-surface">Operasyon Panosu</h2>
      <p className="font-body-sm text-body-sm text-secondary mt-base">Günlük uçuş ve vardiya özetleri.</p>
      </div>
      <div className="grid grid-cols-3 gap-gutter">
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md">
      <p className="font-label-caps text-label-caps text-secondary mb-base uppercase">Aktif Vardiyalar</p>
      <p className="font-display-lg text-display-lg text-on-surface">{state.flights.filter(f => f.status === 'assigned' || f.status === 'active').length}</p>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md">
      <p className="font-label-caps text-label-caps text-secondary mb-base uppercase">Geciken Uçuşlar</p>
      <p className="font-display-lg text-display-lg text-error">{state.flights.filter(f => f.status === 'delayed').length}</p>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md">
      <p className="font-label-caps text-label-caps text-secondary mb-base uppercase">Personel Durumu</p>
      <p className="font-display-lg text-display-lg text-primary">%{Math.round((state.crews.filter(c => c.status === 'active').length / Math.max(state.crews.length, 1)) * 100)}</p>
      </div>
      </div>
      </div>
      </main>
      {/* Overlay Backdrop */}
      {drawerOpen && (
      <div className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-[60] transition-opacity" onClick={() => setDrawerOpen(false)}></div>
      )}
      {/* Right Profile Drawer */}
      <aside className={`fixed right-0 top-0 bottom-0 w-[400px] bg-surface-container-lowest shadow-[-4px_0_24px_rgba(15,23,42,0.08)] z-[70] flex flex-col border-l border-outline-variant transform transition-transform duration-300 ease-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {/* Drawer Header */}
      <div className="flex items-center justify-between px-margin py-md border-b border-outline-variant bg-surface-bright">
      <h3 className="font-title-sm text-title-sm text-on-surface">Profil Paneli</h3>
      <button className="text-secondary hover:text-on-surface transition-colors flex items-center justify-center w-8 h-8 rounded hover:bg-surface-container" onClick={() => setDrawerOpen(false)}>
      <span className="material-symbols-outlined text-[20px]">close</span>
      </button>
      </div>
      {/* Drawer Content Scrollable Area */}
      <div className="flex-1 overflow-y-auto">
      {/* User Identity Section */}
      <div className="p-margin flex flex-col items-center text-center border-b border-outline-variant bg-surface-bright">
      <div className="relative mb-md">
      <img alt="Kaan Yılmaz" className="w-24 h-24 rounded-full object-cover border-4 border-surface-container-lowest shadow-sm" data-alt="A professional headshot of an authoritative male operations manager in a well-lit, modern corporate setting. He is wearing a crisp white shirt and a subtle dark tie. The lighting is high-key and bright, reflecting a clean, corporate light-mode aesthetic. The background is softly blurred to keep the focus sharp on his confident, composed expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBibQ_rbGPSc3MDx8wWTS6QkrNp4ZfrNYrFf8u_FPctPpTvWtVH-LRYC5h0dRRVFEQ8VE2n7rb34M2gxtLRupESuP2lqAc-OWIh7Tj57MIFFLkejO8QMZfsekWmV5s9DLsEzNGE6SaXXClysnj_sbefDCrd0LpkBlsF7Aweet8IuRQmfyEzaQajMBBwKo3PIDuLXWDjgdFV0dT9IWNDHytDWmCa66UgYqDvlCVhmK4z6o4rRFPUaETSCoLiYFltLqQasqgJFIBfgqs" />
      <button className="absolute bottom-0 right-0 bg-surface-container-lowest border border-outline-variant text-secondary p-1 rounded-full shadow-sm hover:text-primary transition-colors" onClick={() => navigate('settings')}>
      <span className="material-symbols-outlined text-[16px]">edit</span>
      </button>
      </div>
      <h4 className="font-headline-md text-headline-md text-on-surface">Kaan Yılmaz</h4>
      <p className="font-body-md text-body-md text-secondary mt-base">Baş Operasyon Yöneticisi</p>
      <div className="mt-sm inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded text-on-surface-variant font-code-data text-code-data">
      <span className="material-symbols-outlined text-[14px]">badge</span>
                          ID: OP-74291
                      </div>
      </div>
      {/* Quick Actions */}
      <div className="p-margin border-b border-outline-variant">
      <p className="font-label-caps text-label-caps text-secondary mb-md uppercase tracking-wider">Hızlı İşlemler</p>
      <div className="flex flex-col gap-sm">
      <button className="flex items-center gap-sm w-full px-sm py-2 text-left font-body-sm text-body-sm text-on-surface hover:bg-surface-container rounded transition-colors border border-transparent hover:border-outline-variant" onClick={() => navigate('settings')}>
      <span className="material-symbols-outlined text-secondary">lock_reset</span>
                              Şifre Değiştir
                          </button>
      <button className="flex items-center gap-sm w-full px-sm py-2 text-left font-body-sm text-body-sm text-error hover:bg-error-container hover:text-on-error-container rounded transition-colors border border-transparent" onClick={() => navigate('dashboard')}>
      <span className="material-symbols-outlined">logout</span>
                              Oturumu Kapat
                          </button>
      </div>
      </div>
      {/* Recent Activities */}
      <div className="p-margin">
      <div className="flex items-center justify-between mb-md">
      <p className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">Son Aktiviteler</p>
      <button className="font-body-sm text-body-sm text-primary hover:underline" onClick={() => navigate('pipeline')}>Tümünü Gör</button>
      </div>
      <div className="relative pl-sm">
      {/* Timeline Line */}
      <div className="absolute left-[11px] top-2 bottom-0 w-px bg-outline-variant"></div>
      {/* Activity Item 1 */}
      <div className="relative flex gap-md mb-lg">
      <div className="absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-surface-container-lowest z-10"></div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface font-medium">Vardiya onaylandı: TK1992</p>
      <p className="font-body-sm text-body-sm text-secondary mt-xs">Kabin ekibi rotasyonu onaylandı.</p>
      <p className="font-label-caps text-label-caps text-outline mt-base">14:30 - Bugün</p>
      </div>
      </div>
      {/* Activity Item 2 */}
      <div className="relative flex gap-md mb-lg">
      <div className="absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-outline-variant ring-4 ring-surface-container-lowest z-10"></div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface font-medium">Sistem giriş yapıldı</p>
      <p className="font-body-sm text-body-sm text-secondary mt-xs">IP: 192.168.1.45 (Merkez Ofis)</p>
      <p className="font-label-caps text-label-caps text-outline mt-base">08:15 - Bugün</p>
      </div>
      </div>
      {/* Activity Item 3 */}
      <div className="relative flex gap-md">
      <div className="absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-outline-variant ring-4 ring-surface-container-lowest z-10"></div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface font-medium">Rapor dışa aktarıldı</p>
      <p className="font-body-sm text-body-sm text-secondary mt-xs">Haftalık performans özeti (PDF)</p>
      <p className="font-label-caps text-label-caps text-outline mt-base">17:45 - Dün</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </aside>
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
