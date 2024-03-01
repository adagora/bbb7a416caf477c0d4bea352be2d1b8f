import { useState } from "react";
import "./App.css";
import { DataDisplay } from "./components/DataDisplay";
import { Spinner } from "./components/Spinner";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Todo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    try {
      const userId = Math.floor(Math.random() * 100) + 1;
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData: Todo = await response.json();

      // Simulate 2-second delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData(jsonData);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <div className="content-top">
          <button onClick={fetchData} disabled={loading}>
            {loading ? <Spinner /> : "Fetch Data"}
          </button>
        </div>

        {error ? <p>Error: {error}</p> : <DataDisplay data={data} />}
      </div>
    </div>
  );
}

export default App;
