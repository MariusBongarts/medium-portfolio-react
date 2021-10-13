import { FC } from "react";
import "./MediumCategoryChip.css";

interface MediumCategoryChipProps {
  category: string;
}

export const MediumCategoryChip: FC<MediumCategoryChipProps> = ({
  category,
}) => {
  return <div className="chip card-category">{category}</div>;
};
