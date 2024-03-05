import { HashRouter, Route, Routes } from "react-router-dom";
import HomeV1 from "./pages/HomeV1";
import HomeV2 from "./pages/HomeV2";
import HomeV3 from "./pages/HomeV3";
import HomeV4 from "./pages/HomeV4";
import HomeV5 from "./pages/HomeV5";
import HomeV6 from "./pages/HomeV6";
import HomeV7 from "./pages/HomeV7";
import HomeV8 from "./pages/HomeV8";
import HomeV9 from "./pages/HomeV9";
import HomeV10 from "./pages/HomeV10";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeV1 />} />
        <Route path="/" element={<HomeV2 />} />
        <Route path="/" element={<HomeV3 />} />
        <Route path="/" element={<HomeV4 />} />
        <Route path="/" element={<HomeV5 />} />
        <Route path="/home-six" element={<HomeV6 />} />
        <Route path="/" element={<HomeV7 />} />
        <Route path="/" element={<HomeV8 />} />
        <Route path="/" element={<HomeV9 />} />
        <Route path="/" element={<HomeV10 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
