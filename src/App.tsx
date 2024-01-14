import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./pages/routes.tsx";

const router = createBrowserRouter(routes)
function App() {

  return (
        <RouterProvider router={router} />
  )
}

export default App
