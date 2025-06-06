import type { repaymentType } from "../type/calc/repaymentType";
import EmptyResult from "./EmptyResult";
import Repayments from "./Repayments";

interface ResultProps {
  resultType: string;
  props: repaymentType;
}

const Result: React.FC<ResultProps> = ({ props }) => {
  const resultRender = () => {
    if (props.monthlyPayment === null) return <EmptyResult />;
    else return <Repayments props={props}></Repayments>;
  };

  return <>{resultRender()}</>;
};

export default Result;
