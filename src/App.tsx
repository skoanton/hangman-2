import Gameview from "./components/GameView/Gameview";
import CategoryMenu from "./components/CategoryMenu/CategoryMenu";
import MainMenu from "./components/MainMenu/MainMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Provider from "./components/ProviderContext/Provider";
function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route index element={<MainMenu />} />
            <Route path="/categoryMenu" element={<CategoryMenu />} />
            <Route path="/gameView" element={<Gameview />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
