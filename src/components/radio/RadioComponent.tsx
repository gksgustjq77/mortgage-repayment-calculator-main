// RadioComponent.tsx
interface RadioProps {
  label: string;
  value: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioComponent: React.FC<RadioProps> = ({
  label,
  value,
  name,
  checked,
  onChange,
}) => {
  return (
    <label
      className={`
      flex items-center p-4 rounded-md border cursor-pointer transition-colors duration-200 space-x-3
      ${
        checked
          ? "bg-[hsl(61,70%,90%)] border-[hsl(61,70%,52%)]"
          : "bg-white border-[hsl(200,26%,54%)]"
      }
    `}
    >
      <div className="relative w-5 h-5">
        <input
          type="radio"
          value={value}
          name={name}
          checked={checked}
          onChange={onChange}
          className="peer appearance-none w-5 h-5 border-2 border-[hsl(200,26%,54%)] rounded-full checked:border-[hsl(61,70%,52%)]"
        />
        {/* 안쪽 작은 원 */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[hsl(61,70%,52%)] rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 peer-checked:scale-100" />
      </div>
      <span className="text-[hsl(202,55%,16%)] font-semibold">{label}</span>
    </label>
  );
};

export default RadioComponent;
