import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";

function App() {
  return (
      <div>
        <ToastContainer />
        <Header />
        <Shop />
        <Footer />
      </div>
    );
}

export default App;
