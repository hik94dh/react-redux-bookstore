import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card } from 'semantic-ui-react';
import { setBooks } from './actions/books';
import MenuComponent from './components/Menu';
import BookCard from './components/BookCard';
import axios from 'axios'; // - библиотека, которая позволяет отправлять http-запросы

class App extends Component {
  componentWillMount() {
      const { setBooks } = this.props;
      axios.get('/books.json').then(({ data }) => {
          setBooks(data)
      })
  }

  render() {
    const { books, isReady } = this.props;
    return (
        <Container>
          <MenuComponent />
          <br />
          <Card.Group itemsPerRow={4} >
                {!isReady ? 'Загрузка....' :
                    books.map(book => (
                        <BookCard key={book.id} {...book} />
                    ))}
          </Card.Group>
        </Container>
    );
  }
}

const mapStateToProps = ({ books }) => ({
    books: books.items,
    isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
