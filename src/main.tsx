import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import *  as R from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>


		<R.BrowserRouter> <App /></R.BrowserRouter>

	</React.StrictMode>
)
