

const NewEntryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-black italic dark:text-white">Nouvel Enregistrement</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-red-500">✕</button>
        </div>
        
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Nom du Client" className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl text-sm font-bold dark:text-white border-none" />
            <input type="text" placeholder="Destination" className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl text-sm font-bold dark:text-white border-none" />
          </div>
          <input type="text" placeholder="Description du contenu" className="w-full bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl text-sm font-bold dark:text-white border-none" />
          
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
            <p className="text-[10px] font-black text-blue-600 uppercase mb-2">ID Généré Automatiquement</p>
            <p className="text-lg font-mono font-black dark:text-blue-400">NV-{Math.floor(1000 + Math.random() * 9000)}-2026</p>
          </div>

          <button type="button" onClick={onClose} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black shadow-lg">
            VALIDER ET IMPRIMER L'ÉTIQUETTE
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewEntryModal;