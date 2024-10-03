import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PageContent from "./Components/PageContent";
import { Space } from "antd";
import SideMenu from "./Components/SideMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sideMenuAndPC">
        <SideMenu />
        <PageContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
