import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './elements/hw_6/store';
import AddProduct from './elements/hw_6/AddProduct';
import ProductLists from './elements/hw_6/ProductLists';
import TasksList from './elements/hw_7/TasksList';

function App() {
	return (
		<div className="container">
			<hr/><br/>
			<p>Homework_6</p>
			<br/><hr/><br/>
			<Provider store={store}>
				<h1>Каталог продуктов</h1>
				<AddProduct />
				<ProductLists />
				<br/><hr/><br/>
				<p>Homework_7</p>
				<br/><hr/><br/>
				<TasksList />
				<br/><hr/><br/>
			</Provider>
		</div>
	);
}

export default App;
