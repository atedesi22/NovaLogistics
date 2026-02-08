import React, { useState } from 'react';
// Importe tes composants ici
import AuthView from './components/AuthView';
import TrackingView from './components/TrackingView';
import CalculatorView from './components/CalculatorView';
import AdminDashboard from './components/AdminDashboard';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import LandingPage from './components/LandingPage';

const App = () => {
  // 1. Gestion des accès et de la navigation
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Mode déconnecté par défaut
  const [activeTab, setActiveTab] = useState('track'); // track, calc, admin
  const [view, setView] = useState('landing'); // landing, auth, dashboard

  // Fonction de login simulée pour le challenge
  const handleLogin = () => setIsAuthenticated(true);

      if (view === 'landing') {
      return <LandingPage onEnter={() => setView('auth')} />;
    }

    if (view === 'auth') {
      return <AuthView onLogin={() => setView('dashboard')} />;
    }
  // 2. Si l'utilisateur n'est pas connecté, on affiche uniquement l'Auth
  // (Plus tard, on ajoutera la Landing Page ici aussi)
  if (!isAuthenticated) {
    return <AuthView onLogin={handleLogin} />;
  }

  // 3. Interface une fois connecté (L'Univers NovaVerse)
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      
      {/* Navbar Desktop : cachée sur mobile via tailwind (hidden md:flex) */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Contenu Principal avec padding-bottom pour la BottomBar sur mobile */}
      <main className="pb-24 md:pb-10 md:pt-8">
        <div className="container mx-auto">
          
          {/* Switch de vues dynamique */}
          {activeTab === 'track' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <TrackingView />
            </div>
          )}

          {activeTab === 'calc' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <CalculatorView />
            </div>
          )}

          {activeTab === 'admin' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <AdminDashboard />
            </div>
          )}

        </div>
      </main>

      {/* Barre de navigation mobile : cachée sur PC (md:hidden) */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Bouton de déconnexion rapide (Mode Debug pour ton challenge) */}
      <button 
        onClick={() => setIsAuthenticated(false)}
        className="fixed bottom-28 right-6 bg-slate-200 dark:bg-slate-800 p-2 rounded-full opacity-30 hover:opacity-100 transition-opacity text-[8px] font-bold"
      >
        DÉCONNEXION
      </button>

    </div>
  );
};

export default App;