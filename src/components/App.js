import React from "react";
import "../styles/App.css";
import NavBar from "./NavBar";
import SlideRoutes from "react-slide-routes";
import { Route, useLocation } from "react-router-dom";
import Home from "./routes/Home";

const Full = () => (
  <div>
    <h1>Full Download</h1>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <div>
      <NavBar />
      <SlideRoutes location={location} duration={500} pathList={["/", "/full"]}>
        <Route path="/" component={Home} exact />
        <Route path="/full" component={Full} />
      </SlideRoutes>
    </div>
  );
}

export default App;
