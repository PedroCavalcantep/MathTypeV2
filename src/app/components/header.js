export default function Navbar() {
  return (
    <header className="w-full bg-corheader text-white py-4">
      <div className="w-full max-w-[1246px] px-[15px] mx-auto">
        <div className="flex items-center gap-14">
          <div>
            <button className=" text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gray-600">MathType</button>
          </div>
          <ul className="flex items-center gap-14">
            <li>
              <button className="hover:text-gray-500 transition duration-300 ease-in-out">
                <span>About</span>
              </button>
            </li>
            <li>
              <button className="hover:text-gray-500 transition duration-300 ease-in-out">
                <span>Contact</span>
              </button>
            </li>
            <li>
              <button className="hover:text-gray-500 transition duration-300 ease-in-out">
                <span>Donate</span>
              </button>
            </li>
            
          </ul>
        </div>
      </div>
    </header>
  );
}
