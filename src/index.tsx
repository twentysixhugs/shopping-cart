// @ts-ignore
import ReactDOMClient from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
);
