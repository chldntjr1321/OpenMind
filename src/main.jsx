import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import InputTextArea from './components/InputTextArea/InputTextArea.jsx'
import InputField from './components/InputField/InputField.jsx'
createRoot(document.getElementById('root')).render(
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <InputTextArea /> */}
    <InputField />
  </StrictMode>,
)
