import { useState } from "react";
import Header from "./component/header/header";
import "./App.css";
import Herosection from "./pages/landingpage/herosection";
import Carousel from "./component/slides/carousel";
import Summeroff from "./pages/landingpage/summeroff";
import Services from "./pages/landingpage/services";
import Footer from "./pages/landingpage/footer";
import AboutUs from "./pages/aboutUs";
import Routers from "./routes/routers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routers />
    </>
  );
}

export default App;
