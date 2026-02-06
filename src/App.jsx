import { Calculator, LayoutDashboard, Package } from "lucide-react";
import TrackingView from "./components/TrackingView";
import './index.css'
import BottomNav from "./components/BottomNav";



function App() {
  return(
    <>
      <div className="App">
        <TrackingView/>
        <BottomNav/>
      </div>
    </>
    
  )

  
};


export default App;