import { describe, it, expect, beforeEach } from 'vitest';
import { loadState, saveState, clearState, STORAGE_KEY } from '../utils/storage';
import { getInitialState } from '../types/domain';

describe('storage utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('loadState returns null when nothing is saved', () => {
    expect(loadState()).toBeNull();
  });

  it('saveState persists state to localStorage', () => {
    const state = getInitialState();
    saveState(state);
    const raw = localStorage.getItem(STORAGE_KEY);
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw!);
    expect(parsed.currentPage).toBe('dashboard');
  });

  it('loadState returns saved state', () => {
    const state = getInitialState();
    state.searchQuery = 'test-query';
    saveState(state);
    const loaded = loadState();
    expect(loaded).not.toBeNull();
    expect(loaded!.searchQuery).toBe('test-query');
  });

  it('clearState removes saved state', () => {
    saveState(getInitialState());
    clearState();
    expect(loadState()).toBeNull();
  });

  it('saveState handles errors gracefully', () => {
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = () => { throw new Error('quota exceeded'); };
    expect(() => saveState(getInitialState())).not.toThrow();
    localStorage.setItem = originalSetItem;
  });
});
