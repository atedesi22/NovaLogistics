


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
          <div className="absolute z-0 inset-0 transition-transform duration-700 group-hover:scale-110"
            style={{
                    backgroundImage: `url('/bc.JPG')`, // Une image de port/entrepôt high-tech
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
            
            {/* L'OVERLAY (Le voile bleu NovaVerse pour la lisibilité) */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-900/90 via-blue-900/40 to-slate-900/90 shadow-inner"></div>

            {/* LE CONTENU (Doit être en z-20 pour être au-dessus de l'image) */}
            <div className="relative z-20">
                <div className="w-10 h-10 bg-white/20 jus backdrop-blur-md rounded-xl flex items-center justify-center mb-8 border border-white/30">
                    <span className="font-black italic text-sm">NV</span>
                </div>
                <h2 className="text-4xl font-black italic leading-tight">
                Accédez à <br /> l'écosystème <br /> 
                <span className="text-blue-400">NovaVerse.</span>
                </h2>
                <p className="mt-6 text-blue-100/80 font-medium max-w-xs leading-relaxed">
                Gérez vos flux logistiques mondiaux avec la précision d'une intelligence supérieure.
                </p>
            </div>

            <div className="relative z-20 flex items-center gap-4">
                <div className="text-[10px] font-black tracking-[0.2em] py-2 px-4 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                    MOD_LOGISTICS_V1.0
                </div>
            </div>

            {/* EFFET DE LUMIÈRE DYNAMIQUE */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-30 z-10"></div>
            </div>
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