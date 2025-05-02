import { MdOutlinePhonelink } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { GiLargeDress } from "react-icons/gi";
import { RiTShirt2Line } from "react-icons/ri";
import { FaShoppingBasket } from "react-icons/fa";
import { TbShoppingBagSearch } from "react-icons/tb";
export const aside = [
  { id: 0, icon: TbShoppingBagSearch, name: "All", path: "" },
  {
    id: 1,
    icon: MdOutlinePhonelink,
    name: "Electronics",
    path: "category/electronics",
  },
  {
    id: 2,
    icon: IoDiamond,
    name: "Jewellery",
    path: "category/jewelery",
  },
  {
    id: 3,
    icon: RiTShirt2Line,
    name: "Men's clothing",
    path: "category/men's clothing",
  },
  {
    id: 4,
    icon: GiLargeDress,
    name: "Women's clothing",
    path: "category/women's clothing",
  },
];
export const navbar = [
  {
    id: 1,
    icon: FaShoppingBasket,
  },
];
