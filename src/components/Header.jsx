import { Bell, Calculator, LayoutDashboard, Package, Search, User2 } from "lucide-react"



const Header = ({activeTab, setActiveTab}) => {
    return(
        <>
            <nav className="hidden md:flex sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-8 py-4 justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('track')}>
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 dark:shadow-none">
                        <Package size={24} />
                    </div>
                    <span className="text-xl font-black text-slate-900 dark:text-white italic tracking-tighter">
                        NovaLogistics
                    </span>
                </div>

                <div className="flex items-center gap-8">
                    {[
                        {id: 'track', label: 'Suivi de Colis', icon: <Package size={18}/>},
                        {id: 'calc', label: 'Calculateur', icon: <Calculator size={18}/>},
                        {id: 'hangar', label: 'Mon Hangar', icon: <LayoutDashboard size={18}/>},
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)} 
                            className={`flex items-center ap-2 font-bold text-sm transition-colors ${activeTab === item.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                            >
                            {item.icon} {item.label}
                        </button>
                    ))
                    }
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative group hidden lg:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16}/>
                        <input type="text" 
                            placeholder="Rechercher un Num..."
                            className="pl-10 -px-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-full text-xs font-bold focus:ring-blue-500 transition-all w-48 group-hover:w-64 dark:text-white"
                        />
                    </div>

                    <button className="p-2 text-slate-400 hover:text-blue-600 active:text-blue-600 transition-colors">
                        <Bell size={20}/>
                    </button>

                    <button className="bg-blue-600 dark:bg-white dark:text-slate-900 text-white p-2 rounded-full text-xs font-black active:scale-95 transition-all">
                        <User2 size={20}/>
                    </button>
                </div>
            </nav>
            <nav className="lg:hidden justify-between flex p-3">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('track')}>
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 dark:shadow-none">
                        <Package size={24} />
                    </div>
                    <span className="text-xl font-black text-slate-900 dark:text-white italic tracking-tighter">
                        NovaLogistics
                    </span>
                </div>
                <div className=" gap-4">
                    <button className="p-2 text-slate-400 hover:text-blue-600 active:text-blue-600 transition-colors">
                        <Bell size={20}/>
                    </button>

                    <button className="bg-blue-600 dark:bg-white dark:text-slate-900 text-white p-2 rounded-full text-xs font-black active:scale-95 transition-all">
                        <User2 size={20}/>
                    </button>
                </div>
            </nav>
        </>
        
    )
}

export default Header;