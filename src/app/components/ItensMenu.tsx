import Image from "next/image";

type Props = {
  name: string
}

export function ItensMenu({name}: Props ) {
  return (
    <button className="hover:text-gray-500 transition duration-300 ease-in-out">
      <span>{name}</span>
    </button>
  );
}
