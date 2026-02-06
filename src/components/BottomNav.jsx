import { Calculator, LayoutDashboard, Package } from "lucide-react";

const BottomNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'track', label: 'Suivi', icon: <Package size={20} /> },
    { id: 'calc', label: 'Calculateur', icon: <Calculator size={20} /> },
    { id: 'admin', label: 'Gestion', icon: <LayoutDashboard size={20} /> },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-[2rem] p-2 flex justify-between items-center shadow-2xl z-50">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`  flex items-center gap-2 px-6 py-3 rounded-2xl transition-all ${
            activeTab === tab.id ? 'bg-blue-600  text-white' : 'text-slate-300 bg-blue-600 rounded-full'
          }`}
        >
          {tab.icon}
          {activeTab === tab.id && <span className="text-xs font-bold">{tab.label}</span>}
        </button>
      ))}
    </div>
  );
};

export default BottomNav;