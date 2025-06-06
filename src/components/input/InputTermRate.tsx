interface InputTermRate {
  title: string;
  type: string;
  onChange: (value: number, type: string) => void;
  value: number | string;
}

const InputTermRate: React.FC<InputTermRate> = ({
  title,
  type,
  value,
  onChange,
}) => {
  const formattedValue =
    typeof value === "number"
      ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : value;
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-[hsl(200,26%,54%)] text-left mb-[10px]">{title}</h1>
        <div className="group flex border border-[hsl(200,26%,54%)] rounded-md h-12 overflow-hidden focus-within:border-[hsl(61,70%,52%)] transition-colors duration-200">
          <input
            type="number"
            className="text-[hsl(202,55%,16%)] font-bold bg-white w-full p-2 outline-none h-full appearance-none 
            [&::-webkit-inner-spin-button]:appearance-none 
            [&::-webkit-outer-spin-button]:appearance-none"
            onChange={(e) => {
              onChange(Number(e.target.value), type);
              if (e.target.value === "") {
                onChange(0, type);
              }
            }}
            value={formattedValue}
          />
          <span className="text-[hsl(202,55%,16%)] p-[20px] font-bold bg-[hsl(202,86%,94%)] flex items-center justify-center h-full transition-colors duration-200 group-focus-within:bg-[hsl(61,70%,52%)]">
            {type === "term" ? "years" : "%"}
          </span>
        </div>
      </div>
    </>
  );
};

export default InputTermRate;
