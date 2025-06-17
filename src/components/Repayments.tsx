import { formatNumberWithCommas } from "../util/FormatUtil";
import type { repaymentType } from "../type/calc/repaymentType";

interface RepaymentsProps {
  props: repaymentType;
}

const Repayments: React.FC<RepaymentsProps> = ({ props }) => {
  return (
    <div
      className="flex flex-col gap-[3rem] bg-[hsl(202,55%,16%)] text-white 
      rounded-none sm:rounded-tr-[20px] sm:rounded-br-[20px] sm:rounded-tl-none sm:rounded-bl-none 
      lg:rounded-bl-[70px] sm:rounded-b-[20px]
      w-full sm:w-[500px] h-[100%] sm:h-[600px] p-4 sm:p-6"
    >
      <div className="flex flex-col gap-3 sm:gap-4">
        <p className="text-lg sm:text-xl font-semibold text-left">
          Your results
        </p>
        <p className="text-sm sm:text-base text-left text-[hsl(200,26%,54%)] leading-snug">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </p>
      </div>

      <div className="flex flex-col gap-6 bg-[#0e2431] text-left p-5 sm:p-7 rounded-[10px] relative shadow-[0_-4px_0_0_rgb(215,218,47)]">
        <div className="flex flex-col gap-3">
          <p className="text-sm sm:text-base text-[hsl(200,26%,54%)]">
            Your monthly repayments
          </p>
          <p className="text-[hsl(61,70%,52%)] font-bold text-3xl sm:text-5xl">
            £ {formatNumberWithCommas(String(props?.monthlyPayment)) || 0}
          </p>
        </div>

        <div className="h-px bg-[hsl(200,26%,54%)]" />

        <div className="flex flex-col gap-3">
          <p className="text-sm sm:text-base text-[hsl(200,26%,54%)]">
            Total you'll repay over the term
          </p>
          <p className="text-white font-bold text-2xl sm:text-3xl">
            £ {formatNumberWithCommas(String(props?.totalInterest)) || 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Repayments;
