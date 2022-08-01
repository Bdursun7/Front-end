// important imports
import React from 'react'
import { BrowserRouter as Router,Route, Routes }
	from 'react-router-dom';
import './App.css';
import ShowTasks from './components/ShowTasks';
import Create from './components/Create';
import HomePage from './components/HomePage';
import Update from './components/Update';

function App() {
return (
	<div className='App'>

	<Router>
	<Routes>
		<Route path='/' element={<HomePage/>}/>
		<Route path='/ShowTasks' element={<ShowTasks/>}/>
		<Route path='/Create' element={<Create/>}/>
		<Route path='/Update' element={<Update/>}/>
	</Routes>
	</Router>
</div>
);

}

export default App;
