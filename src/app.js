import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Signin from "./components/Signin";
import Body from "./components/Body";
import { Provider} from "react-redux";
import appStore from "./utils/appStore";
import ItemsPage from "./components/ItemsPage";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const AppLayout = () => {
  
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Signin />,
      },
     {
      element:<ProtectedRoutes/>,
      children:[
          {
        path: "/itemList",
        element: <ItemsPage />,
      },
      {
        path: "/itemDetails",
        element: <ItemDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      ]
     }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
