export type InputType = {
  type: "principal" | "annualRate" | "years";
  title: string;
};

type InputTypeArr = InputType[];

export const inputOptions: InputTypeArr = [
  { type: "years", title: "Mortgage Term" },
  { type: "annualRate", title: "Interest Rate" },
];
