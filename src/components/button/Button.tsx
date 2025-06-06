interface ButtonPros {
  title: string;
  onClick: () => void;
}

const Button: React.FC<ButtonPros> = ({ title, onClick }) => {
  return (
    <>
      <div className="">
        <button
          onClick={onClick}
          className="flex justify-center pr-12 pl-12 p-4 rounded-full text-center text-[hsl(202,55%,16%)] text-center text-left font-bold bg-[hsl(61,70%,52%)]"
        >
          <img src="/images/icon-calculator.svg" className="mr-[10px]"></img>
          {title}
        </button>
      </div>
    </>
  );
};

export default Button;
