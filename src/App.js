import "./App.css";
import Navigation from "./customer/components/navigations/Navigation";
import HomePage from "./customer/components/pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <Navigation className="z-1" />
      <div>
        <HomePage className="-z-1" />
      </div>
    </div>
  );
}

export default App;
