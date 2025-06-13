import { useState } from "react";
import CalcTitle from "./CalcTitle";
import InputGate from "./InputGate";
import RadioComponent from "./radio/RadioComponent";
import { radioOptions } from "../type/calc/radioType";
import { inputOptions } from "../type/input/inputType";
import Button from "./button/Button";
import Result from "./Result";
import type { repaymentType } from "../type/calc/repaymentType";

const Calculator: React.FC = () => {
  const [selectedType, setSelectedType] = useState("repayment");

  const [loanInfo, setLoanInfo] = useState({
    principal: 0, // 원금
    annualRate: 0.0, // 연이자율
    years: 0.0, // 상환 기간
  });

  const [repaymentInfo, setRepaymentInfo] = useState<repaymentType>({
    monthlyPayment: null as number | null,
    totalPayment: null as number | null,
    totalInterest: null as number | null,
  });

  const updateLoanInfo = (key: keyof typeof loanInfo, value: number) => {
    setLoanInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const Repayments = () => {
    const { principal, annualRate, years } = loanInfo;
    if (!principal || !annualRate || !years) {
      alert("모든 입력값을 채워주세요.");
      return;
    }

    const r = annualRate / 100 / 12; // 월 이자율
    const n = years * 12; // 총 개월 수

    let monthly = 0;
    let total = 0;
    let interest = 0;

    if (selectedType === "repayment") {
      monthly = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      total = monthly * n;
      interest = total - principal;
    } else if (selectedType === "interest") {
      monthly = principal * r;
      total = monthly * n;
      interest = total;
    }

    console.log(monthly.toFixed(2));
    setRepaymentInfo({
      monthlyPayment: Number(monthly.toFixed(2)),
      totalPayment: Number(total.toFixed(2)),
      totalInterest: Number(interest.toFixed(2)),
    });
  };

  const clearCalc = () => {
    setLoanInfo({
      principal: 0, // 원금
      annualRate: 0.0, // 연이자율
      years: 0.0, // 상환 기간
    });
  };

  return (
    <>
      <div className="md:flex md:flex-row sm:flex-col">
        <div className="flex flex-col gap-[20px] bg-white rounded-t-[20px] sm:rounded-none sm:rounded-tl-[20px] sm:rounded-bl-[20px] sm:rounded-tr-none sm:rounded-br-none w-full sm:w-[500px] sm:h-[600px] p-6">
          <CalcTitle clear={clearCalc}></CalcTitle>

          <InputGate
            type="principal"
            title="Mortgage Amount"
            value={loanInfo.principal}
            onChange={(value, type) =>
              updateLoanInfo(type as keyof typeof loanInfo, value)
            }
          />

          <div className="flex gap-4">
            {inputOptions.map((option) => (
              <InputGate
                key={option.type}
                type={option.type}
                title={option.title}
                value={loanInfo[option.type]}
                onChange={(value, type) =>
                  updateLoanInfo(type as keyof typeof loanInfo, value)
                }
              />
            ))}
          </div>

          <div>
            <h1 className="text-[hsl(200,26%,54%)] text-left mb-[10px]">
              {"Mortgage Type"}
            </h1>
            <div className="flex flex-col gap-4">
              {radioOptions.map((option) => (
                <RadioComponent
                  key={option.id}
                  label={option.label}
                  value={option.value}
                  name="interestType"
                  checked={selectedType === option.value}
                  onChange={(e) => setSelectedType(e.target.value)}
                />
              ))}
            </div>
          </div>
          <div className="mt-[20px]">
            <Button
              title={"Calculate Repayments"}
              onClick={Repayments}
            ></Button>
          </div>
        </div>
        <Result resultType={""} props={repaymentInfo}></Result>
      </div>
    </>
  );
};
export default Calculator;
