import React from "react";
import "./class_results.css";

const classResults = [
  { id: 1, title: "Class 1 Results" },
  { id: 2, title: "Class 2 Results" },
  { id: 3, title: "Class 3 Results" },
  { id: 4, title: "Class 4 Results" },
  { id: 5, title: "Class 5 Results" },
  { id: 6, title: "Class 6 Results" },
  { id: 7, title: "Class 7 Results" },
  { id: 8, title: "Class 8 Results" },
  { id: 9, title: "Class 9 Results" },
  { id: 10, title: "Class 10 Results" },
];

const ExamResult = () => {
  return (
    <div className="container">
      {classResults.map((result) => (
        <div key={result.id} className="result-card">
          <h2>{result.title}</h2>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Roll Number</th>
                <th>Grade</th>
              </tr>
            </thead>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ExamResult;