import React from 'react';
import ReactDOM from 'react-dom/client';

import { Elizabeth } from './pages/Elizabeth';


import './styles/reset.css';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Elizabeth />
    </React.StrictMode>,
);
