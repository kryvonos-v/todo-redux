import { NavLink } from 'react-router-dom';
import '../filter/filter.css';

export function FilterNew(props) {
  const { label, items } = props;
  
  return (
    <div className="filter">
      <span>{label ? `${label}: ` : '' }</span>
      <div className="filter-items">
        {items.map(item => (
          <NavLink
            className="filter-link"
            key={item.value}
            to={`/${item.value}`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
