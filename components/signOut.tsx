import { useState } from "react";
// react bootstrap
import { Button, Modal } from "react-bootstrap";
// material icons
import { Close } from "@styled-icons/evaicons-solid";
// cookie
import { logout } from "@lib/cookie";

const SignOutView = (props: any) => {
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  const handleSignOut = () => {
    logout();
  };

  return (
    <div>
      <Button variant="outline-primary" onClick={handleShow}>
        Logout
      </Button>

      <Modal
        show={modalShow}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-center"
        centered
      >
        <Modal.Body className="pb-0 px-4 border-bottom">
          <Modal.Title>
            <div className="d-flex align-items-center">
              <div className="">
                <h5 className="fw-bold">Log Out</h5>
              </div>
              <div className="ms-auto" onClick={props.onHide}>
                <Close className="icon-size" />
              </div>
            </div>
          </Modal.Title>
        </Modal.Body>
        <Modal.Body className="pb-0 px-4">
          <p className="lead">
            Are you sure you want to log out? press "No" to return to page or
            "Yes, Log out" to log out.
          </p>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-end">
          <Button variant="outline-secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={handleSignOut}>
            Yes, Log out
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignOutView;
