import { useAppState } from './hooks/useAppState';
import { InsightsDashboard } from './screens/InsightsDashboard';
import { LeadsListesi } from './screens/LeadsListesi';
import { OperasyonPipeline } from './screens/OperasyonPipeline';
import { Ayarlar } from './screens/Ayarlar';
import { ProfilPaneli } from './screens/ProfilPaneli';
import { HataVeBosDurumlar } from './screens/HataVeBosDurumlar';
import { LeadEkleduzenle } from './screens/LeadEkleduzenle';
import './App.css';

export default function App() {
  const {
    state,
    navigate,
    setEditLead,
    addLead,
    updateLead,
    deleteLead,
    updateSettings,
    setSearchQuery,
    setBaseFilter,
    setRoleFilter,
    dismissAlert,
    clearData,
  } = useAppState();

  const screenProps = {
    state,
    navigate,
    setEditLead,
    addLead,
    updateLead,
    deleteLead,
    updateSettings,
    setSearchQuery,
    setBaseFilter,
    setRoleFilter,
    dismissAlert,
    clearData,
  };

  return (
    <div data-setfarm-root="app" className="min-h-screen bg-slate-50 text-slate-950">
      {state.currentPage === 'dashboard' && <InsightsDashboard {...screenProps} />}
      {state.currentPage === 'leads' && <LeadsListesi {...screenProps} />}
      {state.currentPage === 'pipeline' && <OperasyonPipeline {...screenProps} />}
      {state.currentPage === 'settings' && <Ayarlar {...screenProps} />}
      {state.currentPage === 'profile' && <ProfilPaneli {...screenProps} />}
      {state.currentPage === 'errors' && <HataVeBosDurumlar {...screenProps} />}
      {state.currentPage === 'add-lead' && <LeadEkleduzenle {...screenProps} />}
      {state.currentPage === 'edit-lead' && <LeadEkleduzenle {...screenProps} />}
    </div>
  );
}
