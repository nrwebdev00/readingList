import { useState, useContext } from 'react';
import BooksContext from '../context/books';

export default function BookEdit({book, onSubmit}){
  const [ title, setTitle ] = useState(book.title);
  const { editBookById } = useContext(BooksContext);

  // handle submit
  const handleSubmit = (e) =>{
    e.preventDefault();
    onSubmit();
    editBookById(book.id, title)
  }

  return(
    <form
      onSubmit={handleSubmit}
      className="book-edit"
    >
      <label>Title</label>
      <input
        type="text"
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  )
}