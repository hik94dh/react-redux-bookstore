import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; // для того, чтобы не было много экшенов
import * as booksActions from '../actions/books';
import * as filterActions from '../actions/filter';
import App from '../components/App';

const mapStateToProps = ({ books }) => ({
    books: books.items,
    isReady: books.isReady
});

// тут объединяем объект с экшенами
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
    ...bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
