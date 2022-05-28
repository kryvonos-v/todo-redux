export function FetchError({ message, retry }) {
  return (
    <div>
      <p>{ message }</p>
      <button onClick={retry}>Retry</button>
    </div>
  );
}
