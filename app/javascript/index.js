import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

document.addEventListener("turbo:load", () => {
    const rootElement = document.body.appendChild(document.createElement("div"));

    rootElement.style.minHeight = '100%';
    rootElement.style.display = 'flex';
    rootElement.style.flexDirection = 'column';
    rootElement.style.overflow = 'hidden';

    const root = createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
});
