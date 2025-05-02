import { useGlobalContext } from "./Context";
import { navbar } from "./data";
import { FaOpencart } from "react-icons/fa";
const Navbar = () => {
  const { setSingleProduct, setExistence, setCartVisibility } = useGlobalContext();
  return (
    <nav className="w-full h-10 bg-red-100 flex justify-between items-center py-10 p-6 ">
      <div className="gap-3 flex justify-center items-center">
        <h1 className="text-4xl  font-bold">
          <span className="text-orange-700">All</span>Cart
        </h1>
        <FaOpencart className="text-4xl" />
      </div>

      <div className="flex gap-4">
        {navbar.map((navLink) => {
          const { id } = navLink;
          const Icon = navLink.icon;
          return (
            <Icon
              key={id}
              className="text-4xl cursor-pointer
          "
              onClick={() => {
                setSingleProduct([]);
                setExistence(false), setCartVisibility(true);
              }}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
