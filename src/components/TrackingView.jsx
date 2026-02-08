import { CheckCircle2, MapPin, Package, ShieldCheck, Ship } from "lucide-react";
import React from 'react';
import '../index.css'
import Header from "./Header";


const steps = [
    { id: 1, label: 'Colis Reçu', location: 'Dubaï, Entrepôt', date: '02 Feb, 10:30', status: 'completed', icon: <Package size={20}/> },
    { id: 2, label: 'En Transit Maritime', location: 'Océan Indien', date: '04 Feb, 15:45', status: 'current', icon: <Ship size={20}/> },
    { id: 3, label: 'Dédouanement', location: 'Port de Douala', date: 'En attente', status: 'upcoming', icon: <ShieldCheck size={20}/> },
    { id: 4, label: 'Prêt pour retrait', location: 'Agence Akwa', date: 'En attente', status: 'upcoming', icon: <MapPin size={20}/> },
]

const TrackingView = () =>{
    return(

        <>
            {/* Header & Search */}
                {/* <Header/> */}

            <div className="min-h-screen bg-white dark:bg-slate-900 pb-20">
                
                {/* Conteneur qui s'adapte : large sur PC, centré sur Mobile */}
                <div className="max-w-6xl mx-auto p-4 md:p-8">
                    
                    {/* Header : Simple sur mobile, étalé sur PC */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white italic">
                            NovaLogistics
                        </h1>
                        <p className="text-blue-600 font-bold">N° de suivi : NV-884-2026-XAF</p>
                    </div>
                    
                    {/* Barre de recherche qui prend moins de place sur PC */}
                    <div className="w-full md:w-96 bg-white dark:bg-slate-800 p-2 rounded-2xl flex items-center shadow-sm border border-slate-100 dark:border-slate-700">
                        <input 
                        type="text" 
                        placeholder="Chercher un autre colis..." 
                        className="bg-transparent border-none focus:ring-0 flex-1 px-4 text-sm font-bold dark:text-white"
                        />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl text-xs font-bold shadow-lg">
                        TRACKER
                        </button>
                    </div>
                    </div>

                    {/* GRILLE RESPONSIVE : 1 colonne sur Mobile, 2 colonnes sur PC */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Colonne de Gauche : La Timeline (Prend 2/3 sur PC) */}
                    <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 md:p-10 rounded-[2.5rem] shadow-sm">
                        <h2 className="text-xl font-bold mb-8 dark:text-white">Progression de la livraison</h2>
                        <div className="relative">
                            {/* On remet ici ton code des étapes (steps.map...) */}
                            {steps.map((step, index) => (
                                <div key={step.id} className="flex gap-4 mb-10 relative group">
                                    {/* Ligne de connexion */}
                                    {index !== steps.length - 1 && (
                                        <div className={`absolute left-5 top-10 w-0.5 h-16 ${step.status === 'completed' ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'}`} />
                                    )}
                                    <div className={`z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-transform group-hover:scale-110
                                        ${step.status === 'completed' ? 'bg-blue-600 text-white' : 
                                        step.status === 'current' ? 'bg-blue-100 text-blue-600 border-2 border-blue-600 animate-pulse' : 
                                        'bg-slate-100 text-slate-400 dark:bg-slate-700'}`}>
                                        {step.status === 'completed' ? <CheckCircle2 size={18}/> : step.icon}
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <h3 className={`font-bold ${step.status === 'upcoming' ? 'text-slate-400' : 'text-slate-900 dark:text-white'}`}>{step.label}</h3>
                                        <p className="text-xs text-slate-500">{step.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Colonne de Droite : Infos Additionnelles (Prend 1/3 sur PC) */}
                    <div className="space-y-6">
                        <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl">
                            <p className="text-blue-100 text-xs font-bold uppercase mb-2">Estimation d'arrivée</p>
                            <h3 className="text-3xl font-black italic">12 FÉV. 2026</h3>
                            <div className="mt-6 pt-6 border-t border-blue-500/50 flex justify-between items-center text-sm font-medium">
                                <span>Statut :</span>
                                <span className="bg-blue-400/30 px-3 py-1 rounded-full">EN TRANSIT</span>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-6 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700">
                            <h4 className="font-bold mb-4 dark:text-white">Détails de l'expédition</h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between"><span className="text-slate-500">Poids :</span> <span className="font-bold dark:text-white">12.5 kg</span></div>
                                <div className="flex justify-between"><span className="text-slate-500">Service :</span> <span className="font-bold dark:text-white">Air Cargo Express</span></div>
                                <div className="flex justify-between"><span className="text-slate-500">Origine :</span> <span className="font-bold dark:text-white">Canton, Chine</span></div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
        </>
        
    )
}
export default TrackingView;