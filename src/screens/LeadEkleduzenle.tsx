// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Lead Ekle/Düzenle
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppState, Page, Lead } from "../types/domain";

interface LeadEkleduzenleProps {
  state: AppState;
  navigate: (page: Page) => void;
  addLead: (lead: Lead) => void;
  updateLead: (lead: Lead) => void;
}

export function LeadEkleduzenle(props: LeadEkleduzenleProps) {
  const { state, navigate, addLead, updateLead } = props;
  const existing = state.editLeadId ? state.leads.find(l => l.id === state.editLeadId) : null;

  const [fullName, setFullName] = useState(existing?.fullName || '');
  const [base, setBase] = useState(existing?.base || '');
  const [role, setRole] = useState(existing?.role || '');
  const [status, setStatus] = useState(existing?.status || 'pending');
  const [notes, setNotes] = useState(existing?.notes || '');
  const [error, setError] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Lütfen ad ve soyad bilgisini eksiksiz giriniz.');
      return;
    }
    const lead: Lead = {
      id: existing?.id || `LD-${crypto.randomUUID().slice(0, 3).toUpperCase()}`,
      fullName: fullName.trim(),
      base: (base as any) || 'IST',
      role: (role as any) || 'captain',
      status: (status as any) || 'pending',
      notes: notes.trim(),
      email: existing?.email,
      phone: existing?.phone,
    };
    if (existing) {
      updateLead(lead);
    } else {
      addLead(lead);
    }
  };

  return (
    <>
      {/* Contextual Note: Navigation shell (SideNavBar/TopNavBar) is intentionally suppressed here 
            as this is a highly task-focused, linear data entry view (Add/Edit Form). 
            The user must complete or cancel the action before returning to the main dashboard. */}
      <main className="w-full max-w-[640px] mx-auto pt-8">
      {/* Form Container Level 1 Surface */}
      <div className="bg-surface-container-lowest border border-surface-variant rounded-xl shadow-sm flex flex-col overflow-hidden">
      {/* Header */}
      <header className="p-md sm:p-margin border-b border-surface-variant bg-surface flex items-center gap-md">
      <button aria-label="Geri Dön" className="flex items-center justify-center w-[36px] h-[36px] rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors group" type="button" onClick={() => navigate('leads')}>
      <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
      </button>
      <div>
      <h1 className="font-title-sm text-title-sm text-on-surface flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary text-[20px]">person_add</span>
                              {existing ? 'Lead Düzenle' : 'Yeni Lead Ekle'}
                          </h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Operasyon veritabanına yeni bir personel adayı kaydedin.</p>
      </div>
      </header>
      {/* Form Content */}
      <form className="p-md sm:p-margin flex flex-col gap-margin bg-surface-container-lowest" onSubmit={handleSave}>
      {/* Ad Soyad Field (Validation Error State) */}
      <div className="flex flex-col gap-xs">
      <label className={`font-label-caps text-label-caps ${error ? 'text-error' : 'text-on-surface-variant'}`} htmlFor="fullName">Ad Soyad</label>
      <div className="relative">
      <input
        aria-describedby={error ? "fullName-error" : undefined}
        aria-invalid={error ? "true" : "false"}
        className={`w-full h-[40px] px-sm font-body-sm text-body-sm text-on-surface rounded-lg focus:outline-none focus:ring-1 transition-shadow placeholder:text-on-surface-variant/50 ${error ? 'bg-error-container/10 border border-error focus:ring-error focus:border-error' : 'bg-surface border border-outline-variant focus:border-primary focus:ring-primary'}`}
        id="fullName"
        name="fullName"
        placeholder="Örn: Kpt. Ahmet Yılmaz"
        type="text"
        value={fullName}
        onChange={(e) => { setFullName(e.target.value); setError(''); }}
      />
      {error && <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-error text-[20px] pointer-events-none icon-fill">error</span>}
      </div>
      {error && (
      <p className="font-body-sm text-body-sm text-error flex items-start gap-xs mt-xs" id="fullName-error">
                              {error}
                          </p>
      )}
      </div>
      {/* Grid Row: Üs & Rol */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
      {/* Üs (Base) Select */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="base">Bağlı Olacağı Üs</label>
      <div className="relative">
      <select
        className="w-full h-[40px] pl-sm pr-lg font-body-sm text-body-sm text-on-surface bg-surface border border-outline-variant rounded-lg appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow cursor-pointer"
        id="base"
        name="base"
        value={base}
        onChange={(e) => setBase(e.target.value)}
      >
      <option disabled={true} value="">Üs Seçiniz</option>
      <option value="IST">IST - İstanbul Havalimanı</option>
      <option value="SAW">SAW - Sabiha Gökçen</option>
      <option value="ESB">ESB - Ankara Esenboğa</option>
      <option value="AYT">AYT - Antalya Havalimanı</option>
      </select>
      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">expand_more</span>
      </div>
      </div>
      {/* Rol Select */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="role">Operasyonel Rol</label>
      <div className="relative">
      <select
        className="w-full h-[40px] pl-sm pr-lg font-body-sm text-body-sm text-on-surface bg-surface border border-outline-variant rounded-lg appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow cursor-pointer"
        id="role"
        name="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
      <option disabled={true} value="">Rol Seçiniz</option>
      <option value="captain">Kaptan Pilot</option>
      <option value="first_officer">İkinci Pilot</option>
      <option value="cabin_chief">Kabin Amiri</option>
      <option value="dispatcher">Uçuş Harekat Uzmanı (Dispeçer)</option>
      <option value="ground_ops">Yer İşletme Sorumlusu</option>
      </select>
      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">expand_more</span>
      </div>
      </div>
      </div>
      {/* Durum Select */}
      <div className="flex flex-col gap-xs w-full sm:w-1/2 sm:pr-sm">
      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="status">Aday Durumu</label>
      <div className="relative">
      <select
        className="w-full h-[40px] pl-sm pr-lg font-body-sm text-body-sm text-on-surface bg-surface border border-outline-variant rounded-lg appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow cursor-pointer"
        id="status"
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value as any)}
      >
      <option value="pending">Değerlendirme Bekliyor</option>
      <option value="interview">Mülakat Aşamasında</option>
      <option value="simulator">Simülatör Testinde</option>
      <option value="approved">Onaylandı - Evrak Bekliyor</option>
      <option value="rejected">Olumsuz Sonuçlandı</option>
      </select>
      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">expand_more</span>
      </div>
      </div>
      {/* Notlar Textarea */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant flex items-center justify-between" htmlFor="notes">
      <span>Operasyonel Notlar</span>
      <span className="text-outline font-normal">İsteğe Bağlı</span>
      </label>
      <textarea
        className="w-full p-sm font-body-sm text-body-sm text-on-surface bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow resize-y min-h-[80px] placeholder:text-on-surface-variant/50"
        id="notes"
        name="notes"
        placeholder="Adayın lisans durumu, önceki uçuş saatleri veya mülakat notları..."
        rows={4}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
      </div>
      </form>
      {/* Footer Actions */}
      <footer className="p-md sm:p-margin border-t border-surface-variant bg-surface flex flex-col-reverse sm:flex-row justify-end gap-sm sm:gap-md">
      <button className="h-[40px] px-lg rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-variant hover:text-on-surface transition-colors w-full sm:w-auto" type="button" onClick={() => navigate('leads')}>
                          İptal
                      </button>
      <button className="h-[40px] px-lg rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-medium hover:bg-on-primary-fixed-variant transition-colors flex items-center justify-center gap-xs w-full sm:w-auto shadow-sm" type="submit" onClick={handleSave}>
      <span className="material-symbols-outlined text-[18px]">save</span>
                          Kaydet
                      </button>
      </footer>
      </div>
      </main>
    </>
  );
}
