import { useAppState } from './hooks/useAppState';
import { InsightsDashboard } from './screens/InsightsDashboard';
import { LeadsListesi } from './screens/LeadsListesi';
import { OperasyonPipeline } from './screens/OperasyonPipeline';
import { Ayarlar } from './screens/Ayarlar';
import { ProfilPaneli } from './screens/ProfilPaneli';
import { HataVeBosDurumlar } from './screens/HataVeBosDurumlar';
import { LeadEkleduzenle } from './screens/LeadEkleduzenle';

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
    setSearchQuery,
  };

  switch (state.currentPage) {
    case 'dashboard':
      return <InsightsDashboard {...screenProps} dismissAlert={dismissAlert} />;
    case 'leads':
      return (
        <LeadsListesi
          {...screenProps}
          setEditLead={setEditLead}
          setBaseFilter={setBaseFilter}
          setRoleFilter={setRoleFilter}
          deleteLead={deleteLead}
        />
      );
    case 'pipeline':
      return <OperasyonPipeline {...screenProps} />;
    case 'settings':
      return <Ayarlar {...screenProps} updateSettings={updateSettings} />;
    case 'profile':
      return <ProfilPaneli {...screenProps} />;
    case 'errors':
      return <HataVeBosDurumlar {...screenProps} clearData={clearData} />;
    case 'add-lead':
    case 'edit-lead':
      return <LeadEkleduzenle state={state} navigate={navigate} addLead={addLead} updateLead={updateLead} />;
    default:
      return <InsightsDashboard {...screenProps} dismissAlert={dismissAlert} />;
  }
}
