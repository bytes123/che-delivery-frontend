import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Outlet,
  createBrowserRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../components/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import Banner from "../components/Banner/Banner";

const MainLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const ShopLayout = () => {
  return (
    <>
      <Header />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};

export default createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage debug={true} />,
    children: [
      {
        element: <ShopLayout />,
        children: [
          {
            element: (
              <>
                <Home />
              </>
            ),
            path: "/",
          },
        ],
      },
    ],
  },
]);
