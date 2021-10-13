import { FC, useState } from "react";
import "./ChangeUser.css";

interface ChangeUserProps {
  username: string;
  onChange: (username: string) => void;
}

export const ChangeUser: FC<ChangeUserProps> = ({ username, onChange }) => {
  const [user, setUser] = useState(username);

  const onSubmit = () => onChange(user);
  return (
    <div className="change-user">
      <input
        defaultValue={username}
        onChange={(value) => setUser(value.target.value)}
      />
      <button onClick={onSubmit}>Change username</button>
    </div>
  );
};
