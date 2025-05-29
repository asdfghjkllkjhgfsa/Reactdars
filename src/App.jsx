import { useState } from "react";
import "./App.css";
import kitoblar from "./data.js";
function App() {
  const box = document.getElementById("box");
  const [show, setShow] = useState(false);
  const [book, setBook] = useState({
    title: "",
    author: "",
    image: "",
    description: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  }
  function handleClick() {
    setShow(true);
    box.style.filter = "blur(20px)";
  }
  function closeModal() {
    setShow(false);
    box.style.filter = "blur(0px)";
  }
  function saveBook(e) {
    e.preventDefault();
    kitoblar.push(book);
    box.style.filter = "blur(0px)";
    setShow(false);
  }
  return (
    <div className="body">
      <div className="container" id="box">
        <h1>MY Books</h1>
        <button id="btn" onClick={handleClick}>
          Add book
        </button>
        <div className="ota">
          {kitoblar.map((kitob, i) => {
            return (
              <div className="card" key={i}>
                <img src={kitob.image} alt="zcxzx" />
                <div>
                  <h3>{kitob.title}</h3>
                  <span>{kitob.author}</span>
                  <p>{kitob.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {show && (
        <div id="modal">
          <button id="close" onClick={closeModal}>
            X
          </button>
          <input
            type="text"
            value={book.title}
            placeholder="name"
            name="title"
            onChange={handleChange}
          />
          <input
            type="text"
            name="author"
            value={book.author}
            placeholder="Author"
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            value={book.image}
            placeholder="img url"
            onChange={handleChange}
          />
          <textarea
            name="description"
            value={book.description}
            placeholder="description"
            onChange={handleChange}
          ></textarea>
          <button id="save-book" onClick={saveBook}>
            Save Book
          </button>
        </div>
      )}
    </div>
  );
}

export default App;