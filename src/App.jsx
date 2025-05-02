import "./App.css";
import Aside from "./Aside";
import BottomLine from "./BottomLine";
import FetchingData from "./FetchingData";
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Aside />
        <FetchingData />
      </div>
      <BottomLine />
    </>
  );
}

export default App;
