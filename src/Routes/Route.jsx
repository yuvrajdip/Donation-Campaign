import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from "../pages/Home"
import Donation from "../pages/Donation"
import Statistics from "../pages/Statistics"
import DonationDetails from '../components/DonationDetails/DonationDetails';
import ErrorPage from '../pages/ErrorPage';

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => {
        //   return fetch('/data.json') //* must provide / slash otherwise get relative path error
        // }
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/donationdetails/:id",
        element: <DonationDetails></DonationDetails>,
        loader: ()=> fetch('/data.json')
      }
    ]
  },
  
])

export default Route;