import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import SearchForm from "../components/Form";

class Search extends Component {
  state = {
    title: "",
    books: [],
    results: [],
    error: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.search(title)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  loadBooks = () => {
    console.log(res.data.items);
    this.setState({
      toResults: true,
      results: res.data.items
    });
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Book Search</h1>
              <h2>search for and save books of interest!</h2>
            </Jumbotron>
            <SearchForm value={this.state.search} name="book" />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h2>Search Results</h2>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;

// explanation of file

// overview
// this file is essentially the home page of this application
// from this page the user should be able to input a book's title near the top of the page and the bottom of the page will be populated with results from a google api
// the user will be able to view or save a book from this page

// row with the book search form
// the users input is saved to the state object after every letter input because a function is called on every input change
// when the search button is clicked the state value is passed into handleFormSubmit, if a title exists then the value is passed as a query parameter to api search method
