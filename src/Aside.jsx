import { useGlobalContext } from "./Context";
import { aside } from "./data";
const Aside = () => {
  const { setCategory, setExistence, setSingleProduct } = useGlobalContext();
  return (
    <aside className="w-80 flex flex-col gap-3 py-4 bg-gray-100 h-screen">
      {aside.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            className="cursor-pointer  flex items-center justify-center place-self-center rounded-2xl bg-gray-200 hover:bg-gray-300 p-2 px-6 w-60"
            onClick={() => {
              setCategory(item.path);
              setExistence(true);
              setSingleProduct([]);
            }}
          >
            <Icon className="text-3xl" />
            <span className="text-lg">{item.name}</span>
          </button>
        );
      })}
    </aside>
  );
};

export default Aside;
