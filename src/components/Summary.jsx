import React from "react";
import data from "../data/data.json";

const Summary = () => {
  return (
    <div>
      {/* <h3>Summary</h3> */}
      <ul>
        {data.map((result) => (
          <li>
            <img src={result.icon} />
            {result.category}
            <span>
              {result.score}
              <span> / 100</span>
            </span>
          </li>
        ))}
      </ul>
      <button>Continue</button>
    </div>
  );
};

export default Summary;
