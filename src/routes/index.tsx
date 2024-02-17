import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import PublicPage from "../pages/PublicPage";

const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/post-page",
        element: <PublicPage />,
      },
    ],
  },
]);

export default router;
