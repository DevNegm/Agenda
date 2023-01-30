import React from "react";
import CookieConsent from "react-cookie-consent";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import EventDetails from "./Components/EventDetails";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cookies from "./Components/Cookies"
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/filter/:slug" element={<Events />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/event/:eventSlug" element={<EventDetails />} />
      </Routes>
      <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#F05537" }}
        buttonStyle={{ color: "#F05537", fontSize: "16px",borderRadius:"5px",backgroundColor:"#fff" }}
        expires={10}
      >
        Usamos cookies para ofrecerte el mejor servicio posible. Más información{" "}
        <Link className="text-white" to="/cookies">aquí.</Link>
      </CookieConsent>
      <Footer />
    </div>
  );
}

export default App;
