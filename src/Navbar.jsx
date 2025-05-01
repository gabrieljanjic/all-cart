import { navbar } from "./data";
const Navbar = () => {
  return (
    <nav className="w-full h-14 bg-red-100 flex justify-between items-center p-4 ">
      <h1 className="text-3xl  font-bold">
        <span className="text-red-500">All</span>Cart
      </h1>
      <div className="flex gap-4">
        {navbar.map((navLink) => {
          const { id, name, href } = navLink;
          return (
            <a key={id} href={href}>
              {name}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
