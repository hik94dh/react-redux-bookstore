import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; // для того, чтобы не было много экшенов
import * as booksActions from '../actions/books';
import App from '../components/App';
import orderBy from 'lodash/orderBy'; // декл. подход, вытаскиваем то, что нужно

const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case 'all':
            return books;
        case 'price_high':
            return orderBy(books, 'price', 'desc');
        case 'price_low':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author', 'asc');
        default:
            return books;

    }
};

const mapStateToProps = ({ books }) => ({
    books: sortBy(books.items, books.filterBy),
    isReady: books.isReady
});

// тут объединяем объект с экшенами
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
