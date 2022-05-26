import './filter.css';
import { FilterButton, propTypes as buttonPropTypes, Value } from "../filter-button/filter-button";
import PropTypes, { shape, string } from 'prop-types';

export function Filter(props) {
  const { label, name, items, value, onChange } = props;

  return (
    <div className="filter">
      {label ? `${label} :` : '' }
      {items.map(item => (
        <FilterButton
          key={item.value}
          name={name}
          value={item.value}
          checked={item.value === value}
          onChange={() => onChange(item)}
        >
          {item.label}
        </FilterButton>
      ))}
    </div>
  );
}

const Item = shape({
  value: Value.isRequired,
  label: string.isRequired
});
const ItemList = PropTypes.arrayOf(Item);

Filter.propTypes = {
  label: string,
  name: string,
  items: ItemList.isRequired,
  value: Value.isRequired,
  ...buttonPropTypes,
};
