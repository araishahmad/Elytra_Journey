import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import NavBar from './components/NavBar'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <div>
          <NavBar />
          <Home />
        </div>
      )
    },

    {
      path: '/About',
      element: (
        <div>
          <NavBar />
          <About />
        </div>
      )
    },

    {
      path: '/Product/:id',
      element: (
        <div>
          <NavBar />
          <ProductDetails />
        </div>
      )
    },
  ]
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
