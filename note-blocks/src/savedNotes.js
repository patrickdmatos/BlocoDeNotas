import { AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai';

function Noteblock(params) {
    return (
        <div className="noteblock">
             <div className='action'><h5>maximo 23 caracteres.</h5> <AiOutlineEdit /> <AiOutlineDelete /></div>
             <div className='notepreview'>Text example for note preview</div>
        </div>
    )
}

export default Noteblock