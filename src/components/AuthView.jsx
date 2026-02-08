


const AuthView = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // 👈 INDISPENSABLE : Empêche la page de se recharger
    
    // Ici, en phase de test, on ne vérifie pas l'email/password.
    // On appelle simplement la fonction onLogin reçue en props.
    onLogin(); 
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
        {/* Côté Gauche : Branding */}
        <div className="hidden md:flex bg-blue-600 p-12 flex-col justify-between text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black italic leading-tight">Accédez à l'écosystème NovaVerse.</h2>
            <p className="mt-4 text-blue-100 font-medium">Gérez vos flux logistiques mondiaux avec la précision d'une IA.</p>
          </div>
          <div className="text-sm font-bold opacity-50 z-10 italic">MOD_LOGISTICS_V1.0</div>
          {/* Un cercle décoratif pour le look futuriste */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
        </div>

        {/* Côté Droit : Formulaire */}
        <div className="p-8 md:p-16">
          <div className="mb-10 text-center md:text-left">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl mb-6 mx-auto md:mx-0 flex items-center justify-center text-white font-black italic">NV</div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white">Connexion</h1>
            <p className="text-slate-500 text-sm font-bold">Entrez vos identifiants d'agent Nova.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="email" placeholder="ID NovaVerse" className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl py-4 px-6 font-bold dark:text-white" />
            <input type="password" placeholder="Clé de sécurité" className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl py-4 px-6 font-bold dark:text-white" />
            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-blue-200 dark:shadow-none active:scale-95 transition-all">ACCÉDER AU TERMINAL</button>
          </form>
          <p className="mt-8 text-center text-xs text-slate-400 font-bold uppercase tracking-widest cursor-pointer hover:text-blue-600 transition-colors">Mot de passe oublié ?</p>
        </div>
      </div>
    </div>
  );
};
export default AuthView;