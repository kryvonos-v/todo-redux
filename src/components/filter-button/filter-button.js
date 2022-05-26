import PropTypes, { bool, func, number, string } from 'prop-types';

export function FilterButton(props) {
  const { name, value, checked, onChange, children } = props;

  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{children}</span>
    </label>
  )
}

export const Value = PropTypes.oneOfType([string, number]);

export const propTypes = {
  name: string,
  value: Value.isRequired,
  checked: bool,
  onChange: func.isRequired
};

FilterButton.propTypes = propTypes;
