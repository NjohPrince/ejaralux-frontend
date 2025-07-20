export type CategoryButtonProps = {
  label: string;
  active?: boolean
  index?: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
};
