import { useState, useContext } from 'react';
import BooksContext from '../context/books';
import BookEdit from './BookEdit'

export default function BookShow({book}){
  // State - show edit
  const [ showEdit, setShowEdit ] = useState(false);
  // context
  const { deleteBookById } = useContext(BooksContext);

  // handleDelete
  const handleDeleteClick = () =>{
    deleteBookById(book.id);
  }

  // handle Submit
  const handleSubmit = () =>{
    setShowEdit(false);
  }

  //show edit
  let content = <h3>{book.title}</h3>
  if(showEdit){
    content = <BookEdit onSubmit={handleSubmit} book={book} />
  }

  return(
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button
          className="edit"
          onClick={()=>setShowEdit(!showEdit)
        }>
          Edit
        </button>
        <button
          className="delete"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  )
}