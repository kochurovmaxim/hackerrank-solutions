import { NavLink } from "react-router";

export const Nav = () => {
  return (
    <nav className="sticky top-0 px-6 py-5 border-r border-r-gray-700">
      <h2 className="dark:text-white font-bold text-base mb-3">Pages</h2>
      <ul className="grid gap-2">
        <li>
          <NavLink
            to="/item-list-manager"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-sm dark:text-violet-400 cursor-default pointer-events-none"
                : "font-medium text-sm dark:text-gray-400 dark:hover:text-violet-400"
            }
          >
            Item List Manager
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/item-list-manager2"
            className="font-medium text-sm dark:text-gray-400 dark:hover:text-violet-400"
          >
            ItemListManager
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
