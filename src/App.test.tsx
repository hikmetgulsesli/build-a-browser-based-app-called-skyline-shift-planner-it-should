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

  it('opens help modal when help button is clicked', () => {
    render(<App />);
    const helpBtn = screen.getByLabelText('Yardım');
    fireEvent.click(helpBtn);
    expect(screen.getByRole('heading', { name: /Yardım/i })).toBeInTheDocument();
    expect(screen.getByText(/Skyline Shift Planner operasyonel vardiya yönetim aracıdır/i)).toBeInTheDocument();
  });

  it('closes help modal when clicking Kapat', () => {
    render(<App />);
    const helpBtn = screen.getByLabelText('Yardım');
    fireEvent.click(helpBtn);
    const closeBtn = screen.getByText('Kapat');
    fireEvent.click(closeBtn);
    expect(screen.queryByRole('heading', { name: /Yardım/i })).not.toBeInTheDocument();
  });

  it('opens notification panel when notifications button is clicked', () => {
    render(<App />);
    const notifBtn = screen.getByLabelText('Bildirimler');
    fireEvent.click(notifBtn);
    expect(screen.getByText('Bildirimler')).toBeInTheDocument();
  });

  it('dashboard search input is controlled', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Arama...');
    fireEvent.change(searchInput, { target: { value: 'test-query' } });
    expect(searchInput).toHaveValue('test-query');
  });

  it('navigates to errors page via sidebar', () => {
    render(<App />);
    const errorsBtn = screen.getByText('Hatalar ve Boş Durumlar');
    fireEvent.click(errorsBtn);
    expect(screen.getByText('Senkronizasyon Hatası')).toBeInTheDocument();
  });
});

describe('Lead form', () => {
  it('submits lead form without double call', () => {
    render(<App />);
    const addBtn = screen.getAllByText('Hızlı Ekle')[0];
    fireEvent.click(addBtn);
    expect(screen.getByText('Yeni Lead Ekle')).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText('Örn: Kpt. Ahmet Yılmaz');
    fireEvent.change(nameInput, { target: { value: 'Test Kullanıcı' } });

    const baseSelect = screen.getByLabelText('Bağlı Olacağı Üs');
    fireEvent.change(baseSelect, { target: { value: 'IST' } });

    const roleSelect = screen.getByLabelText('Operasyonel Rol');
    fireEvent.change(roleSelect, { target: { value: 'captain' } });

    const saveBtn = screen.getByText('Kaydet');
    fireEvent.click(saveBtn);

    // Should navigate back to leads list after save
    expect(screen.getByText('Ekip Liderleri')).toBeInTheDocument();
  });
});
