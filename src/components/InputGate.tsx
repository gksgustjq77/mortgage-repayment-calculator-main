import { useState } from "react";
import InputAmount from "./input/InputAmount";
import InputTermRate from "./input/InputTermRate";
interface InputGateProps {
  title: string;
  type: "principal" | "annualRate" | "years";
  value: string | number;
  onChange: (
    value: number,
    field: "principal" | "annualRate" | "years"
  ) => void;
}

const InputGate: React.FC<InputGateProps> = ({
  type,
  value,
  title,
  onChange,
}) => {
  const [amount, setAmount] = useState<number>(0);

  const handleChange = (value: number) => {
    setAmount(value);
    onChange(value, type);
  };

  const renderInputType = () => {
    if (type === "principal") {
      return (
        <InputAmount
          amount={amount}
          onChange={handleChange}
          title={title}
          type={type}
          value={value}
        />
      );
    }

    return (
      <InputTermRate
        type={type}
        title={title}
        value={value}
        onChange={handleChange}
      />
    );
  };

  return <>{renderInputType()}</>;
};

export default InputGate;
