import "./App.css";
import About from "./com/About";
import Home from "./com/Home";
import Blogs from "./com/Blogs";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./com/Navbar";
import Notfound from "./com/Notfound";
import Detail from "./com/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="*" element={<Notfound />}></Route>
          <Route path="/home" element={<Navigate to="/"/>}></Route>
          <Route path="/info" element={<Navigate to="/about"/>}></Route>
          <Route path="/blog/:id" element={<Detail/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
