import { AlertCircle, Calculator, Plane, Ship } from "lucide-react";
import { useEffect, useState } from "react";



const CalculatorView = () => {

    const [weight, setWeight] = useState(1);
    const [origin, setOrigin] = useState('china');
    const [mode, setMode] = useState('air');
    const [total, setTotal] = useState('0');

    const rates = {
        china : {air: 8500, sea: 3000, customs: 0.25},
        dubai : {air: 7000, sea: 2500, customs: 0.2},
        europe : {air: 9500, sea: 3500, customs: 0.3},
    };

    const calculateEstimate = () => {
        const basePrice = weight * rates[origin][mode];
        const customsFees = basePrice * rates[origin].customs;
        const handlingFee = 15000; //Frais du dossier fixes
        setTotal(basePrice + customsFees + handlingFee);
    };

    // Calcul automatique lorsqu'il y'a changement de variable
    useEffect(() => {
        calculateEstimate();
    }, [weight, origin, mode]);
    
    return (
        
            <>
                <div className="max-w-4xl mx-auto p-4 md:p-8 animate-in fade-in duration-500">
                    <div className="mb-8">
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white italic">Moteur de Cotation</h1>
                        <p className="text-slate-500 text-sm">Précision algorithmique pour vos imports.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Panneau de Configuration */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="space-y-6">
                            {/* Origine */}
                            <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Origine du colis</label>
                            <select 
                                value={origin}
                                onChange={(e) => setOrigin(e.target.value)}
                                className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-4 px-6 font-bold dark:text-white focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="china">Canton / Yiwu (Chine)</option>
                                <option value="dubai">Dubaï (Émirats)</option>
                                <option value="europe">Paris / Anvers (Europe)</option>
                            </select>
                            </div>

                            {/* Poids */}
                            <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Poids estimé (KG)</label>
                            <input 
                                type="number" 
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-4 px-6 font-bold dark:text-white focus:ring-2 focus:ring-blue-500"
                            />
                            </div>

                            {/* Mode de Transport */}
                            <div className="grid grid-cols-2 gap-4">
                            <button 
                                onClick={() => setMode('air')}
                                className={`p-6 rounded-3xl border-2 flex flex-col items-center gap-2 transition-all ${mode === 'air' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'border-slate-100 dark:border-slate-800 text-slate-400'}`}
                            >
                                <Plane size={24} />
                                <span className="font-bold text-xs">AÉRIEN</span>
                            </button>
                            <button 
                                onClick={() => setMode('sea')}
                                className={`p-6 rounded-3xl border-2 flex flex-col items-center gap-2 transition-all ${mode === 'sea' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'border-slate-100 dark:border-slate-800 text-slate-400'}`}
                            >
                                <Ship size={24} />
                                <span className="font-bold text-xs">MARITIME</span>
                            </button>
                            </div>
                        </div>
                        </div>

                    {/* Resultats et breakdown  */}
                    <div className="bg-slate-100 dark:bg-slate-950 rounded-[2.5rem] p-8 text-slate-500 dark:text-slate-300 flex flex-col justify-between shadow-xl shadow-blue-200 dark:shadow-none">
                        <div>
                            <div className="flex justify-between items-start mb-10">
                                <div className="bg-blue-600 p-3 rounded-2xl"><Calculator className='text-white' size={24} /></div>
                                <div className="text-right">
                                    <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">Estimation Totale</p>
                                    <h2 className="text-4xl font-black italic">{total.toLocaleString()} FCFA</h2>
                                </div>
                                </div>

                            <div className="space-y-4">
                                <div className="flex justify-between text-sm border-b border-white/10 pb-4">
                                    <span className="text-slate-400 font-medium">Fret {mode === 'air' ? 'Aerien' : 'Maritime'}</span>
                                    <span className="font-bold">{(weight * rates[origin][mode]).toLocaleString()} FCFA</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-white/10 pb-4">
                                    <span className="text-slate-400 font-medium">Douane estimee ({(rates[origin].customs * 100)}%)</span>
                                    <span className="font-bold">{(weight * rates[origin][mode] * rates[origin].customs).toLocaleString()} FCFA</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400 font-medium">Frais fixes agence</span>
                                    <span className="font-bold">15,000 FCFA</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 p-4 bg-white/5 rounded-2xl gap-3 items-center">
                            <AlertCircle size={16} className="text-blue-400 shrink-0"/>
                            <p className="text-[10px] text-slate-400 italic">Prix basé sur le taux de change actuel. Sujet à modification après pesée finale en agence.</p>
                        </div>
                    </div>
                </div>
            </div>  
            </>
        
    )

};

export default CalculatorView;