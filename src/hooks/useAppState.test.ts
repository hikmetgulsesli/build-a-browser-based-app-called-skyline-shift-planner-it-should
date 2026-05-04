import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useAppState } from '../hooks/useAppState';
import { loadState, saveState, clearState } from '../utils/storage';
import type { AppState, Lead } from '../types/domain';

describe('useAppState hook', () => {
  beforeEach(() => {
    clearState();
  });

  it('initializes with default state', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.currentPage).toBe('dashboard');
    expect(result.current.state.leads.length).toBeGreaterThan(0);
    expect(result.current.state.crews.length).toBeGreaterThan(0);
    expect(result.current.state.flights.length).toBeGreaterThan(0);
    expect(result.current.state.alerts.length).toBeGreaterThan(0);
  });

  it('navigates between pages', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.navigate('leads');
    });
    expect(result.current.state.currentPage).toBe('leads');
    act(() => {
      result.current.navigate('settings');
    });
    expect(result.current.state.currentPage).toBe('settings');
  });

  it('adds a lead', () => {
    const { result } = renderHook(() => useAppState());
    const newLead: Lead = {
      id: 'LD-999',
      fullName: 'Test Kullanıcı',
      role: 'captain',
      base: 'IST',
      status: 'pending',
    };
    act(() => {
      result.current.addLead(newLead);
    });
    expect(result.current.state.leads.some(l => l.id === 'LD-999')).toBe(true);
    expect(result.current.state.currentPage).toBe('leads');
  });

  it('updates a lead', () => {
    const { result } = renderHook(() => useAppState());
    const existing = result.current.state.leads[0];
    const updated: Lead = { ...existing, fullName: 'Güncel İsim' };
    act(() => {
      result.current.updateLead(updated);
    });
    expect(result.current.state.leads.find(l => l.id === existing.id)?.fullName).toBe('Güncel İsim');
  });

  it('deletes a lead', () => {
    const { result } = renderHook(() => useAppState());
    const existingId = result.current.state.leads[0].id;
    act(() => {
      result.current.deleteLead(existingId);
    });
    expect(result.current.state.leads.find(l => l.id === existingId)).toBeUndefined();
  });

  it('updates settings', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.updateSettings({ language: 'en', theme: 'dark' });
    });
    expect(result.current.state.settings.language).toBe('en');
    expect(result.current.state.settings.theme).toBe('dark');
  });

  it('dismisses an alert', () => {
    const { result } = renderHook(() => useAppState());
    const alertId = result.current.state.alerts[0].id;
    act(() => {
      result.current.dismissAlert(alertId);
    });
    expect(result.current.state.alerts.find(a => a.id === alertId)).toBeUndefined();
  });

  it('persists state to localStorage', async () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.navigate('pipeline');
    });
    await waitFor(() => {
      const loaded = loadState();
      expect(loaded).not.toBeNull();
      expect(loaded!.currentPage).toBe('pipeline');
    }, { timeout: 500 });
  });
});
