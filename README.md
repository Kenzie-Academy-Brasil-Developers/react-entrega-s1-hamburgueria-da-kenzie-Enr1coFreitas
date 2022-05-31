# react-entrega-s1-hamburgueria-da-kenzie-Enr1coFreitas
react-entrega-s1-hamburgueria-da-kenzie-Enr1coFreitas created by GitHub Classroom


Componentização visual
Essa aplicação precisa de alguns componentes para sua construção. Veja abaixo um modelo de como componentizar essa aplicação:

Componentização da página
Componentes necessários para esta aplicação:
App: Responsável por centralizar os componentes e administrar o compartilhamento de informações por props;
ProductsList: Responsável por renderizar a lista de produtos;
Product: Responsável por apresentar as informações do produto: nome, categoria e preço, além de um button para adicionar ao carrinho;
Cart: Responsável por apresentar os produtos inseridos no carrinho e o valor total da compra.


Funções para esta aplicação:
showProducts: Responsável por filtrar (use o método filter) e mostrar apenas os produtos com o mesmo texto escrito no input de busca;
handleClick: Esta função deve receber por parâmetro o id e usar o método find para encontrar o item no array com o mesmo id do produto e será responsável por adicionar o produto selecionado no state currentSale.


States para esta aplicação (sugestão):
const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);
const [currentSale, setCurrentSale] = useState([])
const [cartTotal, setCartTotal] = useState(0)


No componente App:
Crie o statede produtos;
Utilize o useEffect com a sintaxe de montagem, faça uma requisição utilizando o fetch no endpoint da API da Hamburgueria da Kenzie; URI que deve ser usada no fetch -> https://hamburgueria-kenzie-json-serve.herokuapp.com/products
Importe o componente <ProductsList/> e passe por props esse state;
Crie a função showProducts;
Crie a função handleClick(productId);
No componente <ProductsList />:
Importe o componente <Product />;
Faça um map na lista de produtos que recebeu por props;
Passe cada elemento recebido como props para o componente <Product />.
No componente <Product />:
Aqui você vai precisar da função handleClick (criada no componente App) e passe por parâmetro o id do produto atual que será usado para adicionar ao carrinho;
Renderize a categoria, o nome e o preço, além de um button para adicionar ao carrinho;
No componente <Cart />:
Use o método reduce para mostra o total da venda;
Passe por props o state currentSale.
