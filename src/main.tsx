import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './utils/i18n';

import { store } from './state/store.ts';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
);
