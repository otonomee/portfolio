import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

// stateless function component
export default function ServiceModal(props: any) {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)

    return (
        <Modal show={true}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{props.item.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{props.item.id}</p>
                    <p>{props.item.name}</p>
                    <p>{props.item.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    );
}