import { useEffect } from "react";
import { formatNumberWithCommas } from "../util/FormatUtil";
import type { repaymentType } from "../type/calc/repaymentType";

interface RepaymentsProps {
  props: repaymentType;
}

const Repayments: React.FC<RepaymentsProps> = ({ props }) => {
  return (
    <div className="flex flex-col gap-[50px] bg-[hsl(202,55%,16%)] text-white lg:rounded-bl-[70px] rounded-b-[20px] sm:rounded-tr-[20px] sm:rounded-br-[20px] sm:rounded-tl-none sm:rounded-bl-none w-full sm:w-[500px] h-[400px] sm:h-[600px] p-6">
      <div className="flex flex-col gap-[15px]">
        <p className="text-[20px] font-semibold text-left">Your results</p>
        <p className="text-[15px] text-left text-[hsl(200,26%,54%)]">
          Your results are shown below based on the information you provided. To
          adjust the result the results, edit the form and click "calculate
          repayments" again.
        </p>
      </div>

      <div
        className="flex flex-col gap-[30px] bg-[#0e2431] text-left p-7 rounded relative shadow-[0_-4px_0_0_rgb(215,218,47)]
      opacity-[2]
      rounded-[10px]"
      >
        <div className="flex flex-col gap-[20px]">
          <p className="text-[15px] text-left text-[hsl(200,26%,54%)]">
            your monthly repayments
          </p>
          <p className="text-[hsl(61,70%,52%)] font-bold text-5xl">
            £ {formatNumberWithCommas(String(props?.monthlyPayment)) || 0}
          </p>
        </div>
        <div className="h-[1px] bg-[hsl(200,26%,54%)]"></div>
        <div className="flex flex-col gap-[20px]">
          <p className="text-[15px] text-left text-[hsl(200,26%,54%)]">
            Total you'll repay over the term
          </p>
          <p className="text-[15px] text-left text-[white] font-bold text-3xl">
            £ {formatNumberWithCommas(String(props?.totalInterest)) || 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Repayments;
