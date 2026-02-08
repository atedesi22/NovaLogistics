import { Calculator, LayoutDashboard, Package } from "lucide-react";
import TrackingView from "./components/TrackingView";
import './index.css'
import BottomNav from "./components/BottomNav";
import { useState } from "react";
import Header from "./components/Header";
import CalculatorView from "./components/CalculatorView";



function App() {
  const [activeTab, setActiveTab] = useState('track');

  return(
    <>
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
        <main className="pb-24">
          {activeTab === 'track' && <TrackingView/>}
          {activeTab === 'calc' && <CalculatorView/>}
          {activeTab === 'admin' && (
            <div className="p-10 text-center font-bold dark:text-white">
              📊 Dashboard Gestionnaire en construction...
            </div>
          )}
        </main>
        {/* <TrackingView/> */}
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>
    </>
    
  )

  
};


export default App;