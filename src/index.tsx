// @ts-ignore
import ReactDOMClient from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './App';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<App />);
