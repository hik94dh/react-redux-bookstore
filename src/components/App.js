import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react';
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';
import MenuComponent from '../containers/Menu';
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
          <Filter />
          <br />
          <Card.Group itemsPerRow={4} >
                {!isReady
                    ? 'Загрузка....'
                    : books.map((book) => (
                        <BookCard key={book.id} {...book} />
                    ))}
          </Card.Group>
        </Container>
    );
  }
}

export default App;
