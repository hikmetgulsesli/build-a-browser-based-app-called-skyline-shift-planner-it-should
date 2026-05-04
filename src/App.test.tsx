import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App shell', () => {
  it('renders dashboard by default', () => {
    render(<App />);
    expect(screen.getByText('Operasyonel Bakış')).toBeInTheDocument();
  });

  it('navigates to Leads page via sidebar', () => {
    render(<App />);
    const leadsBtn = screen.getAllByText('Yöneticiler')[0];
    fireEvent.click(leadsBtn);
    expect(screen.getByText('Ekip Liderleri')).toBeInTheDocument();
  });

  it('navigates to Pipeline page via sidebar', () => {
    render(<App />);
    const pipelineBtn = screen.getAllByText('Operasyon Akışı')[0];
    fireEvent.click(pipelineBtn);
    // Use heading role to disambiguate from sidebar button
    expect(screen.getByRole('heading', { name: /Operasyon Akışı/i })).toBeInTheDocument();
  });

  it('navigates to Settings page via sidebar', () => {
    render(<App />);
    const settingsBtn = screen.getAllByText('Ayarlar')[0];
    fireEvent.click(settingsBtn);
    expect(screen.getByText('Sistem Ayarları')).toBeInTheDocument();
  });

  it('navigates to Add Lead via quick add button', () => {
    render(<App />);
    const addBtn = screen.getAllByText('Hızlı Ekle')[0];
    fireEvent.click(addBtn);
    expect(screen.getByText('Yeni Lead Ekle')).toBeInTheDocument();
  });
});
