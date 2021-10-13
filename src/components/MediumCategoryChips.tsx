import { FC } from "react";
import { MediumCategoryChip } from "./MediumCategoryChip";

interface MediumCategoryChipsProps {
  categories: string[];
}

export const MediumCategoryChips: FC<MediumCategoryChipsProps> = ({
  categories,
}) => {
  return (
    <div className="chips">
      {categories.map((category) => (
        <MediumCategoryChip category={category} />
      ))}
    </div>
  );
};
