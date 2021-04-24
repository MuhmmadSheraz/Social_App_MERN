import { Link } from "react-router-dom";
import "./index.css";
const Index = () => {
  return (
    <div className="flex justify-between px-10 pt-5 bg-gray-100 navBar_wrapper">
      <div className="items-center flex justify-center">
        <h1 className="cursor-pointer">Muhammad Shiraz</h1>
      </div>
      <div className="flex justify-center items-center">
        <h4 className="mx-5 cursor-pointer">About Me</h4>
        <h4 className="mx-5 cursor-pointer">Contact</h4>
        <h4 className="mx-5 cursor-pointer">
          <Link to="/sign-up">Sign Up</Link>
        </h4>
        <h4 className="mx-5 cursor-pointer">
          <Link to="/">Login </Link>
        </h4>
      </div>
    </div>
  );
};

export default Index;
