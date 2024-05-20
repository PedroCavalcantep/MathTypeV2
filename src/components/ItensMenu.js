export function ItensMenu(props) {
  return (
    <button className="hover:text-gray-500 transition duration-300 ease-in-out">
      <span>{props.name}</span>
    </button>
  );
}
