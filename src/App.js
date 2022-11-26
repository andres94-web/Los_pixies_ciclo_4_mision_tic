import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Loguin from "./pages/Loguin";
import Productos from "./pages/Productos";
import Home from "./pages/Home";

function App() {

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loguin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/productos' element={<Productos />} />
          {/* <Route path='/*' element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
