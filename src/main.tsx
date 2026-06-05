import '@google/model-viewer';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const modelBaseUrl = `${import.meta.env.BASE_URL}models/`;

function App() {
  return (
    <main className="page">
      <section className="viewerPanel" aria-labelledby="page-title">
        <div className="copy">
          <p className="eyebrow">WebAR test</p>
          <h1 id="page-title">Тест 3D-модели в AR</h1>
          <p>
            Откройте страницу на телефоне, посмотрите модель в браузере и
            запустите AR-режим через кнопку внутри просмотрщика.
          </p>
          <a className="arHint" href="#viewer">
            Открыть в AR
          </a>
          <p className="phoneNote">
            AR лучше тестировать с телефона: Android использует Scene Viewer или
            WebXR, iPhone открывает Quick Look.
          </p>
        </div>

        <model-viewer
          id="viewer"
          className="model"
          src={`${modelBaseUrl}demo.glb`}
          ios-src={`${modelBaseUrl}demo.usdz`}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          auto-rotate
          shadow-intensity="1"
          alt="Тестовая 3D-модель для WebAR"
        >
          <button className="arButton" slot="ar-button">
            Открыть в AR
          </button>
        </model-viewer>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
