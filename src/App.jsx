import "./App.css";
// import ImageDisplay from "./Components/ImageDisplay/DisplayImage";
import NavBar from "./Components/Navbar/NavBar";
import DisplayContainer from "./Components/DisplayContainer/DisplayContainer";
function App() {
  return (
    <div className="root">
      <NavBar />
      <DisplayContainer />
    </div>
  );
}

export default App;
