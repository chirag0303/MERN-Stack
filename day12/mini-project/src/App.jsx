import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { ViewPage } from "./pages/ViewPage";
import { NotFound } from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/> } />
      <Route path="/view" element={<ViewPage/>} />
      <Route path="/search" element={<SearchPage/>} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;