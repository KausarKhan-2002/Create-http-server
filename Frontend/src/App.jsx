import { Route, Routes } from "react-router-dom";
import Data from "./Components/Data";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header />

      <div style={{marginTop: "5rem"}}>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/items/:id" element={<Data />}/>
        {/* <Route path="/items/electronics" element={<Data />} />
        <Route path="/items/furniture" element={<Data />} />
        <Route path="/items/clothing" element={<Data />} />
        <Route path="/items/books" element={<Data />} />
        <Route path="/items/expensive" element={<Data />} /> */}
      </Routes>
      </div>
    </div>
  );
};

export default App;
