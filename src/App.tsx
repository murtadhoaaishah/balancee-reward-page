import "./App.css";
import Aside from "./components/Aside";
import RewardSystem from "./pages/RewardSystem";
import Header from "./components/Header";

function App() {
  return (
    <div className="grid grid-cols-[18rem_1fr] overflow-hidden">
      <Aside />
      <main>
        <Header />
        <RewardSystem />
      </main>
    </div>
  );
}

export default App;
