import { createContext, useState } from "react";
import axios from 'axios';

const URL_BOOKS = 'http://localhost:5175/books/'

const BooksContext = createContext();

function Provider({ children }){
  // State - for books
  const [ books, setBooks ] = useState([]);

  // Get Books -- Updates book state
  const fetchBooks = async() =>{
    const res = await axios.get(URL_BOOKS); // TODO: refactor data out
    setBooks(res.data);
  }

  // Create Book
  const createBook = async (title) =>{
    const res = await axios.post(URL_BOOKS, { // TODO: refactor data out
      title,
    });
    const updatedBooks = [...books, res.data];
    setBooks(updatedBooks);
  }

  // Update Books
  const editBookById = async(id, newTitle) =>{
    await axios.put(`${URL_BOOKS}${id}`,{
      title: newTitle
    });
    fetchBooks();
  }

  // Delete Books
  const deleteBookById = async(id) =>{
    await axios.delete(`${URL_BOOKS}${id}`);
    fetchBooks();
  }

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider  value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;