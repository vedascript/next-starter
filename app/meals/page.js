import Link from "next/link";
import React from "react";

const MealsPage = () => {
  return (
    <div>
      <p>Meals Page</p>
      <Link href="/share">Sharing Meals</Link>
      <Link href="meals/aaloo-chat">Aaloo Chat</Link>
      <Link href="meals/bhel">Bhel</Link>
    </div>
  );
};

export default MealsPage;
