import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './elements/hw_6/store';
import AddProduct from './elements/hw_6/AddProduct';
import ProductLists from './elements/hw_6/ProductLists';

function App() {
	return (
		<div className="container">
			<Provider store={store}>
				<h1>Каталог продуктов</h1>
				<AddProduct />
				<ProductLists />
			</Provider>
		</div>
	);
}

export default App;
