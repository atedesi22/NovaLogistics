import React from 'react';
import { Shield, Zap, Globe, ArrowRight, Package, Calculator, BarChart3 } from 'lucide-react';

const LandingPage = ({ onEnter }) => {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-blue-500 selection:text-white">
      
      {/* 1. Header Minimaliste */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black italic text-sm">NV</div>
          <span className="text-xl font-black italic tracking-tighter">NovaLogistics</span>
        </div>
        <button 
          onClick={onEnter}
          className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-6 py-2 rounded-full text-xs font-black hover:scale-105 transition-all active:scale-95"
        >
          CONNEXION
        </button>
      </nav>

      {/* 2. Hero Section : L'accroche Scorpion */}
      <section className="px-6 pt-12 pb-24 md:pt-24 md:pb-40 max-w-7xl mx-auto text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Zap size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Écosystème NovaVerse 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic leading-[1.1] mb-8">
              La Logistique <br />
              <span className="text-blue-600">Redéfinie.</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium max-w-lg mb-10">
              Maîtrisez vos flux mondiaux avec une précision algorithmique. Suivi, cotation et gestion unifiés dans un seul terminal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={onEnter}
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all"
              >
                DÉMARRER L'EXPÉDITION <ArrowRight size={18} />
              </button>
              <div className="flex items-center gap-3 px-6 py-4 grayscale opacity-50">
                <Globe size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Global Network Ready</span>
              </div>
            </div>
          </div>
          
          {/* Visuel Abstrait / Graphique */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-[3rem] blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 p-8 rounded-[3rem] shadow-2xl">
                <div className="space-y-4">
                    <div className="h-4 w-1/2 bg-blue-600/20 rounded-full"></div>
                    <div className="h-24 w-full bg-slate-200 dark:bg-slate-700/50 rounded-2xl animate-pulse"></div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-20 bg-slate-200 dark:bg-slate-700/50 rounded-2xl"></div>
                        <div className="h-20 bg-blue-600 rounded-2xl"></div>
                        <div className="h-20 bg-slate-200 dark:bg-slate-700/50 rounded-2xl"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section Features (Les Modules) */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Modules Intégrés</h2>
            <h3 className="text-3xl md:text-4xl font-black italic dark:text-white text-slate-900">Une infrastructure complète.</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Package />, title: "Tracking Précis", desc: "Suivi en temps réel de chaque mouvement, de l'entrepôt à la livraison finale." },
              { icon: <Calculator />, title: "Moteur de Cotation", desc: "Algorithmes avancés pour le calcul instantané du fret et des taxes douanières." },
              { icon: <BarChart3 />, title: "Terminal Admin", desc: "Gestion centralisée des stocks et des flux pour les transitaires modernes." }
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 dark:text-white italic">{feature.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Minimaliste */}
      <footer className="py-12 text-center border-t border-slate-100 dark:border-slate-900">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
          Part of the NovaVerse Universe &copy; 2026 — Designed for Excellence
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;