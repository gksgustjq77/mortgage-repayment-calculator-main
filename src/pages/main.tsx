import Calculator from "../components/Calculator";
import Result from "../components/Result";

const Main: React.FC = () => {
  return (
    <>
      <div className="flex sm:flex-col items-stretch justify-center sm:rounded-none bg-white md:rounded-[20px] overflow-hidden shadow-md">
        <Calculator></Calculator>

        {/* <Result resultType={""}></Result> */}
      </div>
    </>
  );
};

export default Main;
