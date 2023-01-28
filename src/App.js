import { Home } from "./pages/Home";
import NavBar from "./components/NavBarComponent";
import PopupForm from "./components/PopupForm";


const App = () => {

  return (
    <div className="px-8 lg:px-32">
      <NavBar/>
      <Home/>
      <PopupForm/>
    </div>
  );
};

export default App;
