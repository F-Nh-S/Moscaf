import {
  Route,
  createRoutesFromElements,
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import Main from './Main';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Gallery from './Routes/Gallery';
import Services from './Routes/Services';
import ErrorPage from './Pages/ErrorPage';

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route>
        <Route path='*' element={<ErrorPage/>}/>
        <Route index element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/services' element={<Services />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
