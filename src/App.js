
import {Routes, Route, Link} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import About from './components/About';
import NotFound from './components/NotFound';
import SingleArticle from "./stelios_comp/SingleArticle";

const contentful = require("contentful");
const client = contentful.createClient({
  space: "h5ckac8m4bnj",
  accessToken: "8QnCWCQ_AAFD1jgJtBYFzUeCK3qHz2zpZEhBrIb9oc4",
});
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='new-post' element={<CreatePost />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

client.getEntry("fOxW4tZa5qhXH19BD3ap4").then(function (entry) {
  // logs the entry metadata
  console.log(entry.sys);

  // logs the field with ID title
  console.log(entry.fields);
});
