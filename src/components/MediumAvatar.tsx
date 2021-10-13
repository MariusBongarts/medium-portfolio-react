import { FC } from "react";
import "./MediumAvatar.css";

interface MediumAvatarProps {
  image: string;
}

export const MediumAvatar: FC<MediumAvatarProps> = ({ image }) => {
  return <img className="avatar" src={image} alt="avatar" />;
};
