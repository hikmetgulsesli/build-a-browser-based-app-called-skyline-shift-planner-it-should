import { useState, useEffect, useCallback } from 'react';
import type { AppState, Page, Lead, AppSettings } from '../types/domain';
import { getInitialState } from '../types/domain';
import { loadState, saveState } from '../utils/storage';

export function useAppState() {
  const [state, setState] = useState<AppState>(() => {
    const saved = loadState();
    if (saved) {
      const initial = getInitialState();
      return { ...initial, ...saved, alerts: initial.alerts, crews: initial.crews, flights: initial.flights };
    }
    return getInitialState();
  });

  useEffect(() => {
    saveState(state);
  }, [state]);

  const navigate = useCallback((page: Page) => {
    setState((prev) => ({ ...prev, currentPage: page }));
  }, []);

  const setEditLead = useCallback((id: string | null) => {
    setState((prev) => ({ ...prev, editLeadId: id, currentPage: id ? 'edit-lead' : 'leads' }));
  }, []);

  const addLead = useCallback((lead: Lead) => {
    setState((prev) => ({
      ...prev,
      leads: [lead, ...prev.leads],
      currentPage: 'leads',
    }));
  }, []);

  const updateLead = useCallback((lead: Lead) => {
    setState((prev) => ({
      ...prev,
      leads: prev.leads.map((l) => (l.id === lead.id ? lead : l)),
      currentPage: 'leads',
      editLeadId: null,
    }));
  }, []);

  const deleteLead = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      leads: prev.leads.filter((l) => l.id !== id),
    }));
  }, []);

  const updateSettings = useCallback((settings: Partial<AppSettings>) => {
    setState((prev) => ({
      ...prev,
      settings: { ...prev.settings, ...settings },
    }));
  }, []);

  const setSearchQuery = useCallback((searchQuery: string) => {
    setState((prev) => ({ ...prev, searchQuery }));
  }, []);

  const setBaseFilter = useCallback((baseFilter: string) => {
    setState((prev) => ({ ...prev, baseFilter: baseFilter as any }));
  }, []);

  const setRoleFilter = useCallback((roleFilter: string) => {
    setState((prev) => ({ ...prev, roleFilter }));
  }, []);

  const dismissAlert = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      alerts: prev.alerts.filter((a) => a.id !== id),
    }));
  }, []);

  const clearData = useCallback(() => {
    setState((prev) => ({
      ...prev,
      leads: [],
      flights: [],
    }));
  }, []);

  return {
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
}
