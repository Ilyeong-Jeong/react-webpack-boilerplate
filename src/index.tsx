import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.scss';

import App from './App';

const app = createRoot(document.getElementById('root')!);
app.render(
  <Suspense fallback={<div>loading</div>}>
    <App />
  </Suspense>,
);
