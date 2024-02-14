import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <NotFound />,
  },
]);

export default router;
