import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import Footer from "./componets/Footer";
import Card from "./componets/Card";
import first from "./assets/1.svg";
import second from "./assets/2.svg";
import Third from "./assets/3.svg";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Home></Home>
        <div className="flex space-x-14 m-14 ">
          <Card photo={first} heading="Easy to Use" para="Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly."></Card>
          <Card photo={second} heading="Focus on What Matters" para="Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the docs directory."></Card>
          <Card photo={Third} heading="Powered by React" para="Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer."></Card>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
