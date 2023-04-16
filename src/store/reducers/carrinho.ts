import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produto } from '../../App';

type CarrinhoState = {
	itens: Produto[];
};

const initialState: CarrinhoState = {
	itens: []
};

const carrinhoSlice = createSlice({
	name: 'carrinho',
	initialState,
	reducers: {
		adicionar: (state, action: PayloadAction<Produto>) => {
			const produto = action.payload;

			state.itens.find((product) => product.id == produto.id)
				? alert('Produto já adicionado')
				: state.itens.push(produto);
		}
	}
});

export const { adicionar } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
