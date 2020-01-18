import {connect} from 'react-redux';
import List from './List';

export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = state => ({
  columns: state.columns,
});

export default connect(mapStateToProps)(List);