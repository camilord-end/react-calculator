export const Key = ({ keyData: { id, value }, handleInput }) => (
  <button id={id} onClick={() => handleInput(value)}>
    {value}
  </button>
);