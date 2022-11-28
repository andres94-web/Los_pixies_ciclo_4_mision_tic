import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Loguin from "./pages/Loguin";
import Productos from "./pages/Productos";
import Home from "./pages/Home";
import Contacto from './pages/Contacto';

function App() {

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loguin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/contacto' element={<Contacto />} />
          {/* <Route path='/*' element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
