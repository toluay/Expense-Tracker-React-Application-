import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="693a5d25-4bdf-47a6-bd87-277a1eeb138d" language="en-US">
    <Provider> 
        <App />
    </Provider>
    </SpeechProvider>, 
     document.getElementById('root'),
    );