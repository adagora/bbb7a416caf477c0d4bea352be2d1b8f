import { ITodo } from "../@types/ITodo";
import "./DataDisplay.css";

interface DataDisplayProps {
  data: ITodo | null;
}

export const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
  return !data ? (
    <div className="data-display-empty-state">No data available</div>
  ) : (
    <div key={data.id} className="data-display">
      <h2 className="data-display-text">Fetched Data:</h2>
      <pre className="data-display-inner">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
