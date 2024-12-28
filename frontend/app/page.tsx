import React from "react";
import Header from "@/components/Header";
import Main from "@/components/Main";

const App = async () => {

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <Main />
    </div>
  );
};

export default App;
