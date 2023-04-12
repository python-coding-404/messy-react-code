import { useState } from 'react'
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

function Modall() {
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Button variant="primary" onClick={handleShow}>Modal</Button>
			<Modal show={show} onHide={handleClose} centered backdrop="static" >
				<Modal.Header closeButton >
					<Modal.Title>Header</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Wo hoo <b>Bold</b>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>

			</Modal>
			<Image src="/assets/react.svg" roundedCircle />
			

		</>
	)
}
export default Modall;