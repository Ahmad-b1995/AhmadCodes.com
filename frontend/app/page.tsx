import React from "react";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { getAllPosts } from "@/http/article.http";

const App = async () => {
  // const data = await getAllPosts().then((data) => {
  //   return data;
  // });

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <Main />
      {/* {222222222222222222222222222222222222 + data.toString()} */}
    </div>
  );
};

export default App;
