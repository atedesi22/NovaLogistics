import { AlertCircle, Calculator, Info, Plane, Ship } from "lucide-react";
import { useEffect, useState } from "react";



const CalculatorView = () => {

    const [weight, setWeight] = useState(1);
    const [origin, setOrigin] = useState('china');
    const [mode, setMode] = useState('air');
    const [total, setTotal] = useState(0);
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [isVolumetric, setIsVolumetric] = useState(false);



    const rates = {
        china : {air: 8500, sea: 3000, customs: 0.25},
        dubai : {air: 7000, sea: 2500, customs: 0.2},
        europe : {air: 9500, sea: 3500, customs: 0.3},
    };

    const calculateEstimate = () => {
        // Calcul du poids volumetrique 
        let volumetricWeight = (length * width * height) / 5000;

        if (isVolumetric) {
            const volWeight = (parseFloat(length) * parseFloat(width) * parseFloat(height)) / 5000;
            finalWeight = Math.max(finalWeight, volWeight);
        }
        
        const basePrice = finalWeight * rates[origin][mode];
        const customsFees = basePrice * rates[origin].customs;
        setTotal(basePrice + customsFees + 5000);
        
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
                            {/* Section Poids Volumétrique (Méthode Scorpion) */}
                            <div className="space-y-6">
                                {/* Sélecteur de Mode (Switch stylisé) */}
                                <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl">
                                    <button 
                                    onClick={() => setIsVolumetric(false)}
                                    className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${!isVolumetric ? 'bg-white dark:bg-slate-800 shadow-sm text-blue-600' : 'text-slate-400'}`}
                                    >
                                    POIDS SIMPLE
                                    </button>
                                    <button 
                                    onClick={() => setIsVolumetric(true)}
                                    className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${isVolumetric ? 'bg-white dark:bg-slate-800 shadow-sm text-blue-600' : 'text-slate-400'}`}
                                    >
                                    DIMENSIONS (L×l×h)
                                    </button>
                                </div>

                                {/* Formulaire Dynamique */}
                                <div className="animate-in slide-in-from-bottom-2 duration-300">
                                    {!isVolumetric ? (
                                    /* Vue Poids Simple */
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3 text-center">Poids du colis (KG)</label>
                                        <input 
                                        type="number" 
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-6 px-6 text-2xl text-center font-black dark:text-white focus:ring-2 focus:ring-blue-500"
                                        placeholder="0.00"
                                        />
                                    </div>
                                    ) : (
                                    /* Vue Dimensions */
                                    <div className="space-y-4">
                                        <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3 text-center">Dimensions du carton (cm)</label>
                                        <div className="grid grid-cols-3 gap-3">
                                        {['L', 'l', 'h'].map((dim, i) => (
                                            <div key={dim} className="flex flex-col items-center">
                                            <input 
                                                type="number" 
                                                placeholder={dim}
                                                onChange={(e) => {
                                                if(i === 0) setLength(e.target.value);
                                                if(i === 1) setWidth(e.target.value);
                                                if(i === 2) setHeight(e.target.value);
                                                }}
                                                className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-4 text-center font-black dark:text-white focus:ring-2 focus:ring-blue-500"
                                            />
                                            <span className="text-[10px] font-bold text-slate-400 mt-2 uppercase">{dim === 'L' ? 'Long' : dim === 'l' ? 'Larg' : 'Haut'}</span>
                                            </div>
                                        ))}
                                        </div>
                                        <p className="text-[10px] text-center text-slate-400 italic mt-2">
                                        Poids calculé : {((length * width * height) / 5000).toFixed(2)} kg
                                        </p>
                                    </div>
                                    )}
                                </div>
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