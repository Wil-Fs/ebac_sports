import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produto } from '../../App';

type FavoritoState = {
	itens: Produto[];
};

const initialState: FavoritoState = {
	itens: []
};

const favoritoSlice = createSlice({
	name: 'favorito',
	initialState,
	reducers: {
		favoritar: (state, action: PayloadAction<Produto>) => {
			const favorito = action.payload;
			const favoritosSemProduto = state.itens.filter(
				(products) => products.id !== favorito.id
			);
			state.itens.find((product) => product.id === favorito.id)
				? favoritosSemProduto.push(favorito)
				: state.itens.push(favorito);
		}
	}
});

export const { favoritar } = favoritoSlice.actions;
export default favoritoSlice.reducer;
