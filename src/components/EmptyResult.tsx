const EmptyResult: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-[50px] bg-[hsl(202,55%,16%)] text-white rounded-none lg:rounded-bl-[70px] lg:rounded-b-[20px]  w-full sm:w-[500px] h-[400px] sm:h-[600px] p-6">
        <div className="flex flex-col items-center justify-center gap-[15px]">
          <img src="/images/illustration-empty.svg"></img>
          <p className="text-[20px] font-semibold text-left">
            Results shown here
          </p>
          <p className="text-[15px] text-left text-[hsl(200,26%,54%)] text-center">
            Complete the form and click 'calculate repayments' to see what your
            monthly repayment wolud be.
          </p>
        </div>
      </div>
    </>
  );
};
export default EmptyResult;
