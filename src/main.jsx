import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import FeedPage from './pages/FeedPage.jsx';
import Reaction from './components/Reaction/Reaction.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FeedPage /> */}
    <Reaction />
  </StrictMode>
);
