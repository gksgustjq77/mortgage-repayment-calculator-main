import Repayments from "./Repayments";

interface ResultProps {
  resultType: string;
}

const Result: React.FC<ResultProps> = ({ resultType }) => {
  const renderComponentType = () => {};
  return (
    <>
      <Repayments></Repayments>
    </>
  );
};

export default Result;
