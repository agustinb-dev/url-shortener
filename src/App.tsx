import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./app/pages/routes.tsx";
import styles from "./app/templates/main.module.scss";
import 'normalize.css';

const router = createBrowserRouter(routes)
function App() {

  return (
    <div className={styles.main}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
