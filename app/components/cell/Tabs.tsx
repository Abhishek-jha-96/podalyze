import { NavLink } from "react-router";

export default function Tabs() {
  return (
    <nav className="flex w-xl justify-around pr-16 text-lg font-mono font-medium">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/analytics" end>
        Analytics
      </NavLink>
      <NavLink to="/upload_url">Upload URL</NavLink>
    </nav>
  );
}
