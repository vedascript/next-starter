import React from "react";

const MealInfoPage = ({ params }) => {
  const { slug } = params;
  return (
    <div>
      <p>MealInfoPage</p>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default MealInfoPage;
