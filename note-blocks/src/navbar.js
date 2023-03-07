import { AiOutlineFileAdd } from 'react-icons/ai';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  return(
    <>

    </>
  )
}

function Navbar() {
  return (
    <div className="navbar">
      <image>LOGO</image>
      <b>Note Life</b>
      <a href='#' variant="primary" onClick={() => setShow(true)}><AiOutlineFileAdd /></a>
    </div>
  );
}

export default Navbar;
