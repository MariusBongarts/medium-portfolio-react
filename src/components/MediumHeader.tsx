import { FC } from "react";
import { MediumAvatar } from "./MediumAvatar";
import "./MediumHeader.css";

interface MediumHeaderProps {
  title: string;
  image: string;
}

export const MediumHeader: FC<MediumHeaderProps> = ({ title, image }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <MediumAvatar image={image} />
    </div>
  );
};
