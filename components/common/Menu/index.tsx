import { menuItems } from "./menuItems";

type MenuType = {
  variant: "row" | "col";
};

const Menu = ({ variant }: MenuType) => {
  let style;
  variant === "row"
    ? (style =
        "hidden lg:flex flex-row items-center gap-6 text-md text-slate-900 font-semibold h-full")
    : (style =
        "flex flex-col items-start justify-center gap-4  text-slate-700");

  return (
    <ul className={style}>
      {menuItems.map((i) => (
        <nav
          className="wrapper text-slate-500 text-md cursor-pointer"
          key={i.id}
        >
          <span>{i.title}</span>
          <div className="underline" />
        </nav>
      ))}
    </ul>
  );
};

export default Menu;
