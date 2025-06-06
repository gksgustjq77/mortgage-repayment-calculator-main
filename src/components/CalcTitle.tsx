interface CalcTitle {
  clear: () => void;
}

const CalcTitle: React.FC<CalcTitle> = ({ clear }) => {
  return (
    <>
      <div className="flex text-black items-center justify-between">
        <p className="text-[20px] font-semibold">Mortgage Calculator</p>
        <div className="underline text-gray-500 cursor-pointer" onClick={clear}>
          Clear All
        </div>
      </div>
    </>
  );
};

export default CalcTitle;
