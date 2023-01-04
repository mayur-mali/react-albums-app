import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddAlbum from "./pages/AddAlbum";
import UpdateAlbum from "./pages/UpdateAlbum";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App min-h-screen h-full bg-slate-50 pb-4 md:px-8 px-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addalbum" element={<AddAlbum />}></Route>
        <Route path="/update-album/:id" element={<UpdateAlbum />}></Route>
      </Routes>
    </div>
  );
}

export default App;
