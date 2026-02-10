import { NavLink } from "react-router";

export const Nav = () => {
  return (
    <nav className="px-6 py-5 max-md:border-b md:border-r border-gray-700">
      <h2 className="dark:text-white font-bold text-base mb-3">Pages</h2>
      <ul className="grid gap-2">
        <li>
          <NavLink
            to="/item-list-manager"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-sm text-violet-500 dark:text-violet-400 cursor-default pointer-events-none"
                : "font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400"
            }
          >
            Item List Manager
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/code-review-feedback"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-sm text-violet-500 dark:text-violet-400 cursor-default pointer-events-none"
                : "font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400"
            }
          >
            Code Review Feedback
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/article-sorting"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-sm text-violet-500 dark:text-violet-400 cursor-default pointer-events-none"
                : "font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400"
            }
          >
            Article Sorting
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
