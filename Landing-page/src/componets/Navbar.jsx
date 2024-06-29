import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <div className="flex bg-white  items-center space-x-4  p-4 shadow-lg font-bold sticky top-0">
      <div className="flex items-center space-x-2">
        <img className="w-8 h-8" src={logo} alt="" />
        <a href="#">My Site</a>
      </div>
      <div>
        <ul className="flex space-x-4 text-slate-600">
          <li className="">Tutorials</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="ml-4 text-slate-600">Github</div>
    </div>
  );
};
export default Navbar;
