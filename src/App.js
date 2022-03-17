import {Routes, Route, Link} from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<div>All Posts</div>} />
        <Route path='new-post' element={<div>Create Post</div>} />
        <Route path='about' element={<div>About</div>} />
      </Route>
    </Routes>
  );
};

export default App;
