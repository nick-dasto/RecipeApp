import React from "react";

const Allergy = ({ nut }) => {
  return (
    <div className="allergies">
      <ul>
        {nut.map((a) =>
          a === "Tree-Nut-Free" ? (
            <li className="nutfree" key={Math.random() * 300000000}>
              {a}
            </li>
          ) : (
            <li key={Math.random() * 300000000}>{a}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default Allergy;
