// import { NextRequest, NextResponse } from "next/server";
// import { callChain } from "@/lib/langchain";
// import { generateAnswer, retrieveRelevantChunks } from "@/lib/generate-answer";

// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   const question = body.message;

//   if (!question) {
//     return NextResponse.json("Error: No question in the request", {
//       status: 400,
//     });
//   }

//   try {
//     const relevantChunks = await retrieveRelevantChunks(question);
//     const answers = await generateAnswer(question, relevantChunks);
//     return NextResponse.json({ message: answers }, { status: 200 });
//   } catch (error) {
//     console.error("Internal server error ", error);
//     return NextResponse.json("Error: Something went wrong. Try again!", {
//       status: 500,
//     });
//   }
// }

import axios from "axios";
import { ChatOpenAI } from "@langchain/openai";
import { Dispatcher, ProxyAgent } from "undici";
import { HttpsProxyAgent } from "https-proxy-agent";
import { NextRequest, NextResponse } from "next/server";

const agent = new HttpsProxyAgent("http://10.39.152.30:3128");
const proxyUrl = process.env.PROXY_URL; // optional, use if you need a proxy

const API_URL_PINECONE =
  "https://index-start-g8inah3.svc.aped-4627-b74a.pinecone.io/query";

export async function POST(req) {
  const body = await req.json();
  // const { texts } = req.body;

  // if (!texts || !Array.isArray(texts)) {
  //   return res.status(400).json({ error: "Invalid input" });
  // }
  const question = body.message;

  console.log("body", body);

  if (!question || !Array.isArray(question)) {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/embeddings",
        {
          model: "text-embedding-3-large",
          input: question,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          ...(proxyUrl && {
            proxy: {
              host: proxyUrl.split("//")[1].split(":")[0],
              port: proxyUrl.split(":")[2],
            },
          }),
        }
      );
      console.log("response.data", response.data);
        console.log("check", response.data.data[0].embedding);

        let embeddings = [];

        if (response.data.data[0].embedding) {
          embeddings = response.data.data[0].embedding;
        } else {
          embeddings = response.data.embedding;
        }
      // console.log("embeddings", embeddings[0]);

      // Send query request to Pinecone
      const response2 = await axios.post(
        API_URL_PINECONE,
        {
          vector: embeddings[0], // The embedding vector you are querying
          top_k: 5, // Return top 5 matches
          namespace: process.env.PINECONE_NAME_SPACE,
          include_metadata: true, // If you want metadata to be returned
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.PINECONE_API_KEY}`,
            "Content-Type": "application/json",
            "Api-Key": process.env.PINECONE_API_KEY,
          },
          ...(proxyUrl && {
            proxy: {
              host: proxyUrl.split("//")[1].split(":")[0],
              port: proxyUrl.split(":")[2],
            },
          }),
        }
      );
      const dataRes = response2.data.matches;
      // console.log("response.data.matches", dataRes);
      // Send the response back to the client
      const retrievedChunks = dataRes.map((match) => match.metadata.chunk);
      console.log("retrievedChunks", retrievedChunks);

      const llm = new ChatOpenAI(
        {
          model: "gpt-4o-mini",
        },
        { httpAgent: agent }
      );

      // Join retrieved chunks into a single context string
      const context = retrievedChunks.join(" ");

      // Construct the prompt with specific instructions
      const systemMessage = `You are an AI that answers questions strictly based on the provided context.
      If the context doesn't contain enough information, respond with "I do not have enough info to answer this question."`;

      const humanMessage = `Context: ${context}\n\nQuestion: ${question}`;

      // Invoke the LLM with the system and human messages
      const aiMsg = await llm.invoke([
        ["system", systemMessage],
        ["human", humanMessage],
      ]);

      // Extract the answer from the model's response
      const answer = aiMsg.content.trim();
      console.log("answer", answer);

      return NextResponse.json({ message: answer }, { status: 200 });
    } catch (error) {
      console.error("Error generating embeddings:", error);
      return NextResponse.status(500).json({
        error: "Failed to generate embeddings",
      });
    }
  } else {
    return NextResponse.json({ message: "" }, { status: 200 });
  }
}
