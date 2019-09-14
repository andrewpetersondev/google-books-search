import React from "react";
import { DataList, DataListItem } from "../List";

// This file exports the Input, TextArea, and FormBtn components

// export function Input(props) {
//   return (
//     <div className="form-group">
//       <input className="form-control" {...props} />
//     </div>
//   );
// }

// export function FormBtn(props) {
//   return (
//     <button
//       {...props}
//       style={{ float: "right", marginBottom: 10 }}
//       className="btn btn-success"
//     >
//       {props.children}
//     </button>
//   );
// }

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search Book Title:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name={props.name}
          list="books"
          type="text"
          className="form-control"
          placeholder="Type in a book to search"
          id="book"
        />
        <datalist id="books">
          {props.books.map(book => (
            <DataListItem id={props.books.id} />
          ))}
        </datalist>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
