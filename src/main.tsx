import "reflect-metadata";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { buildContainer } from "./core/shared/infrastructure/DI/container.ts";
import App from "./App.tsx";
import './app/styles/app.scss'

// fonts
import './app/fonts/LilGrotesk/LilGrotesk-Regular.woff2'
import './app/fonts/LilGrotesk/LilGrotesk-Thin.woff2'
import './app/fonts/LilGrotesk/LilGrotesk-Medium.woff2'
import './app/fonts/LilGrotesk/LilGrotesk-Light.woff2'
import './app/fonts/LilGrotesk/LilGrotesk-Bold.woff2'
import './app/fonts/LilGrotesk/LilGrotesk-Black.woff2'

// DI
buildContainer();

// app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
