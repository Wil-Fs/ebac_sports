import { useSelector } from 'react-redux';
import { Produto as ProdutoType } from '../App';
import Produto from '../components/Produto';

import * as S from './styles';

import { RootReducer } from '../store';
import { useGetProdutosQuery } from '../services/api';

const ProdutosComponent = () => {
	const intesFavoritos = useSelector(
		(state: RootReducer) => state.favorito.itens
	);

	const { data: produtos, isLoading } = useGetProdutosQuery();

	const produtoEstaNosFavoritos = (produto: ProdutoType) => {
		const produtoId = produto.id;
		const IdsDosFavoritos = intesFavoritos.map((f) => f.id);

		return IdsDosFavoritos.includes(produtoId);
	};

	if (isLoading) return <h2>Carregando</h2>;

	return (
		<>
			<S.Produtos>
				{produtos?.map((produto) => (
					<Produto
						estaNosFavoritos={produtoEstaNosFavoritos(produto)}
						key={produto.id}
						produto={produto}
					/>
				))}
			</S.Produtos>
		</>
	);
};

export default ProdutosComponent;
