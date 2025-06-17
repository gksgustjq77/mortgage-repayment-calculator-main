import Calculator from "../components/Calculator";

const Main: React.FC = () => {
  return (
    <>
      <div className="flex sm:flex-col items-stretch justify-center sm:rounded-none bg-white md:rounded-[20px] overflow-hidden shadow-md">
        <Calculator></Calculator>
      </div>
    </>
  );
};

export default Main;
