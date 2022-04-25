import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import ContextProvider from "./context";

function App() {
  return (
      <div>
        <ToastContainer />
        <Header />
        <ContextProvider>
          <Shop />
        </ContextProvider>
        <Footer />
      </div>
    );
}

export default App;
