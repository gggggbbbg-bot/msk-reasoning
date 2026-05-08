import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-semibold text-brand-700">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="6" fill="#346552" />
            <path
              d="M8 22 L13 10 L16 17 L19 10 L24 22"
              stroke="#fff"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden sm:inline">MSK Reasoning</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <NavItem to="/">Cases</NavItem>
          <NavItem to="/progress">Progress</NavItem>
          <NavItem to="/about">About</NavItem>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `rounded-md px-3 py-1.5 transition ${
          isActive ? 'bg-brand-50 text-brand-700' : 'text-stone-600 hover:bg-stone-100'
        }`
      }
    >
      {children}
    </NavLink>
  );
}
