import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./pages/BlogDeatils";
import List from "./pages/List";


const App = () => {
  return (
    <div>
     
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
