import "./App.css";
import Aside from "./Aside";
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
    </>
  );
}

export default App;
