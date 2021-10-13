import { FC, useState } from "react";
import { PortfolioConfig } from "../Main";
import "./ChangeConfig.css";

interface ChangeConfigProps {
  config: PortfolioConfig;
  onChange: (config: PortfolioConfig) => void;
}

export const ChangeConfig: FC<ChangeConfigProps> = ({
  config: _config,
  onChange,
}) => {
  const [config, setConfig] = useState<PortfolioConfig>(_config);

  const onSubmit = () => onChange(config);

  return (
    <div className="change-user">
      <div>
        <span>Medium user: </span>
        <input
          defaultValue={config.username}
          onChange={(value) =>
            setConfig({ ...config, username: value.target.value })
          }
        />
      </div>
      <div>
        <span>Max articles: </span>
        <input
          defaultValue={config.maxArticles}
          type="number"
          min="0"
          max="10"
          onChange={(value) =>
            !isNaN(+value.target.value) &&
            setConfig({ ...config, maxArticles: +value.target.value })
          }
        />
      </div>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
