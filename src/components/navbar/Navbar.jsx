import { NavLink} from "react-router-dom";

const Navbar = () => {
  
  return (
    <div>
      <nav className="flex flex-col gap-6 md:flex-row justify-between items-center py-20">
        <img src="/Logo.png" alt="" />
        <ul className="flex gap-12 text-lg font-normal">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold  underline" : ""
              }
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >Donation</NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >Statistics</NavLink>
          </li>
        </ul>
      </nav>
      
     
      
      
    </div>
  );
};

export default Navbar;
