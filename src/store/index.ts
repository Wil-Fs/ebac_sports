import { configureStore } from '@reduxjs/toolkit';

import carrinhoReducer from '../store/reducers/carrinho';
import favoritoReducer from './reducers/favoritos';

export const store = configureStore({
	reducer: {
		carrinho: carrinhoReducer,
		favorito: favoritoReducer
	}
});

export type RootReducer = ReturnType<typeof store.getState>;
