import { Link } from "react-router-dom";
export function Nav() {
  return (
    <div className="flex justify-around bg-gray-600 p-4">
      <div className="flex gap-2 text-2xl">
        <Link to={"/"}>
          <h2>WorldInfo</h2>
        </Link>
      </div>
      <div className="text-xl">
        <Link to={"/search"}>Search</Link>
      </div>
    </div>
  );
}
