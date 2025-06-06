export type RadioType = {
  id: string;
  label: string;
  value: string;
};

type RadioTypeArr = RadioType[];

export const radioOptions: RadioTypeArr = [
  { id: "repayment", label: "Repayment", value: "repayment" },
  { id: "variable", label: "Interest Only", value: "interest" },
];
