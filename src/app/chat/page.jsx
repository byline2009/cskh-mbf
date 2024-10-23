import React from "react";
import { Chat } from "@/components/chat";
import { getPineconeClient } from "../../lib/pinecone-client";

const Page = () => {
  // async function fetchData() {
  //   // You can await here
  //   const pc = await getPineconeClient();
  //   const listIndex = await pc.listIndexes();
  //   console.log(listIndex[0].name);

  //   // ...
  // }
  // fetchData();
  return (
    <div className="container">
      <div className=" p-4 flex h-14 items-center justify-between supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <span className="font-bold">Chat-with-MobiFone 7</span>
      </div>
      <div className="flex flex-1 py-4">
        <div className="w-full">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Page;
