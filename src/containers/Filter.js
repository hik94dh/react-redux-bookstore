import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/filter';
import Filter from '../components/Filter';

const mapStateToProps = ({ books }) => ({
    filterBy: books.filterBy,
});

// тут объединяем объект с экшенами
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
