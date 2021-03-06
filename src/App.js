import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import About from "./components/About";
import NotFound from "./components/NotFound";
import SingleArticle from "./components/SingleArticle";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="new-post" element={<CreatePost />} />
        <Route path="about" element={<About />} />
        <Route path="posts/:id" element={<SingleArticle />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
