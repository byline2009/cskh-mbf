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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // const { texts } = req.body;

  // if (!texts || !Array.isArray(texts)) {
  //   return res.status(400).json({ error: "Invalid input" });
  // }
  const body = await req.json();
  const question = body.message;

  const apiKey = process.env.OPENAI_API_KEY;
  const proxyUrl = process.env.PROXY_URL; // optional, use if you need a proxy

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/embeddings",
      {
        model: "text-embedding-3-large",
        input: question,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
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

    const embeddings = response.data.data.map((item) => item.embedding);
    console.log("embeddings", embeddings);
    return res.status(200).json({ message: embeddings });
    //     return NextResponse.json({ message: answers }, { status: 200 });
  } catch (error) {
    console.error("Error generating embeddings:", error);
    return res.status(500).json({ error: "Failed to generate embeddings" });
  }
}
