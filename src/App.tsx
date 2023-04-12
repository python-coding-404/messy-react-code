import { useState } from 'react'
import *  as R from "react-router-dom"
import Example from "./lol/Example"
import Doc from "./lol/Doc"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modall from './lol/Modal';

// This is the most messed up code I have written
// And I am never gonna give you a doc
// Set the counter on how much time wasted reading the code 
// time_spend_reading = 289999 (entire work day )   
function App() {
	const [color, setColor] = useState(0);

	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/example">Example</Nav.Link>
							<Nav.Link href="/doc">Doc</Nav.Link>
							<Nav.Link href="/modal">modal</Nav.Link>

						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<R.Routes>
				<R.Route element={<Doc />} path="/doc" />
				<R.Route element={<Example />} path="/example" />
				<R.Route element={<Modall />} path="/modal" />
			</R.Routes>
			<p>Hallo</p>
			<Button variant="primary" onClick={() => { let hallo = color + 1; setColor(hallo); }}   > count is {color} </Button>
			<Button variant="primary" onClick={() => { let hallo = color + 9.0000000000e+359; setColor(hallo); }}   > set count to 10000000000000 </Button>
			<br />
			


		</>


	)
}

export default App
