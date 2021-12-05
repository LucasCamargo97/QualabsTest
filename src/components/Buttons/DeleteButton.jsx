import {BsTrash} from 'react-icons/bs'
function DeleteButton() {
    return (
        <div>
            <button className="deleteButton">Delete<BsTrash size="25px"/></button>
        </div>
    )
}

export default DeleteButton
