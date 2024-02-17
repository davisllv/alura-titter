import { RouterProvider } from "react-router-dom";
import router from "./routes";

// Esse aqui pode ser o layout e foda se

function App() {
  return <RouterProvider router={router} />;
}

export default App;
