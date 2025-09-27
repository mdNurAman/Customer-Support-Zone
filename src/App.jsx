import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
