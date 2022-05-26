import { connect } from 'react-redux';
import { FilterNew } from '../../components/filter-new/filter-new';
// import { Filter } from '../../components/filter/filter';

const filters = [
  {
    value: 'all',
    label: 'All'
  },
  {
    value: 'completed',
    label: 'Done'
  },
  {
    value: 'incompleted',
    label: 'Active'
  }
];

export const TodosFilter = connect(
  state => ({
    label: 'Show',
    items: filters
  })
)(FilterNew);
