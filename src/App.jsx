import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import Report from '../pages/Report';
import { CreateUserContext } from '../utils/Context';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'report',
        element: <Report />
      }
    ]
  }
])

const App = () => {
  return (
    <CreateUserContext>
      <Toaster />
      <RouterProvider router={router} />
    </CreateUserContext>
  )
}

export default App