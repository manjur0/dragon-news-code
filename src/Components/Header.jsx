import logo from "../assets/logo.png";
import { Todate } from "../utility/date";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center my-4">
      <img width={471} src={logo} alt="Logo" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <Todate />
    </div>
  );
};

export default Header;
