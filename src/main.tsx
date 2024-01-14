import "reflect-metadata";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { buildContainer } from "./core/shared/infrastructure/DI/container.ts";
import App from "./App.tsx";

buildContainer();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
