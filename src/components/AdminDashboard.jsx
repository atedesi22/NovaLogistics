import { useState } from "react";
import NewEntryModal from "./NewEntryModal";



const AdminDashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-black dark:text-white italic text-slate-900">Terminal Gestionnaire</h1>
                <button onClick={() => setIsModalOpen(true)} className="bg-slate-900 dark:bg-blue-600 text-white px-6 py-3 rounded-2xl font-black text-xs flex items-center gap-2">
                <span>+</span> NOUVEL ENREGISTREMENT
                </button>
            </div>

            {/* Barre de Recherche Scorpion */}
                <div className="relative mb-8 group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input 
                    type="text" 
                    placeholder="Rechercher un colis par ID, Nom ou Destination..." 
                    className="w-full bg-white dark:bg-slate-800 border-none rounded-[2rem] py-6 pl-16 pr-8 shadow-sm text-sm font-bold dark:text-white focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                />
                <div className="absolute inset-y-0 right-4 flex items-center">
                    <span className="text-[10px] font-black bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-lg text-slate-400">CMD + K</span>
                </div>
                </div>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                { label: 'Colis en transit', val: '124', color: 'text-blue-600' },
                { label: 'Alertes Retard', val: '03', color: 'text-orange-500' },
                { label: 'Revenu Hebdo', val: '2.4M', color: 'text-green-600' }
                ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className={`text-3xl font-black ${stat.color}`}>{stat.val}</p>
                </div>
                ))}
            </div>

            {/* Liste des Colis (Tableau Moderne) */}
            <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="p-6 border-b border-slate-50 dark:border-slate-700 flex justify-between items-center">
                    <h3 className="font-bold dark:text-white italic">Mouvements Récents</h3>
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full font-bold">MAJ 15:42</span>
                </div>
                <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-900/50 text-[10px] font-black text-slate-400 uppercase">
                    <tr>
                        <th className="px-6 py-4">ID Colis</th>
                        <th className="px-6 py-4">Client</th>
                        <th className="px-6 py-4">Statut</th>
                        <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm">
                    {[1, 2, 3, 4].map((id) => (
                        <tr key={id} className="border-b border-slate-50 dark:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4 font-bold dark:text-white">NV-77{id}-2026</td>
                        <td className="px-6 py-4 text-slate-500">Kouamé Jean-Pierre</td>
                        <td className="px-6 py-4">
                            <span className="bg-blue-100 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full">EN TRANSIT</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                            <button className="text-blue-600 font-black text-xs">ÉDITER</button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>

        {/* 4. La Modal */}
    <NewEntryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
export default AdminDashboard;