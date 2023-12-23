import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index path="/" element={<Home/>} />
      </Route>
    </Routes>
  );
}

export default App;
