import Calculator from "../components/Calculator";
import Result from "../components/Result";

const Main: React.FC = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-stretch justify-center bg-white rounded-[20px] overflow-hidden shadow-md">
        <Calculator></Calculator>

        <Result resultType={""}></Result>
      </div>
    </>
  );
};

export default Main;
