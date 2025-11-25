import { useState } from "react";

const initialData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" }
];

export default function App() {
  const [data, setData] = useState(initialData);

  const sortByDate = () => {
    const sorted = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      // Primary sort: Date (latest first)
      if (dateB - dateA !== 0) {
        return dateB - dateA;
      }

      // Secondary sort: Views (higher first)
      return b.views - a.views;
    });

    setData(sorted);
  };

  const sortByViews = () => {
    const sorted = [...data].sort((a, b) => {
      // Primary sort: Views (higher first)
      if (b.views - a.views !== 0) {
        return b.views - a.views;
      }

      // Secondary sort: Date (latest first)
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });

    setData(sorted);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Date and Views Table</h1>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={sortByDate} style={{ marginRight: "10px" }}>
          Sort by Date
        </button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
