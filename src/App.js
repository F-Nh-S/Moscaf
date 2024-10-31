
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Main from './Main';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Gallery from './Routes/Gallery';
import Services from './Routes/Services';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path='*' />
        <Route index element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/services' element={<Services />} />
      </Route>
    )
  )
  return (

    <RouterProvider router={router} />

  );
}

export default App;
