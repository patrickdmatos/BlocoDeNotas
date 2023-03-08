import Navbar from './components/navbar'
import Modal from './components/modal'
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <Navbar />
      <button onClick={() => {setOpenModal(true)}} >teste</button>
      <Modal isOpen={openModal}/>
    </div>
  );
}

export default App;