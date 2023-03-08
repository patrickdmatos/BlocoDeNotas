import '../CSS/modal.css';
import {AiOutlineBorder} from 'react-icons/ai';


// DECLARANDO PROPRIEDADES NO REACT
type props = {
    isOpen: Boolean
}

function Modal(props: props) {
    if (props.isOpen) {
        return (
        <div className="modal-back-fade">
            {/* <div className='divactions'>
                <AiOutlineBorder /> 
            </div> */}
            <div className="modal-wrapper">
                <input placeholder="Titulo..."></input>
                <textarea placeholder="Digite suas anotações aqui..."></textarea>
            </div>
        </div>
        )
    }
    return null
}

export default Modal