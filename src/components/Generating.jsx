import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div className={`flex items-center h-[3rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}>
      <img className="w-6 h-6 mr-4 object-cover" src={loading} alt="Loading" />
      <span>Anamika's Rationale Tranquillity</span>
    </div>
  );
};

export default Generating;
