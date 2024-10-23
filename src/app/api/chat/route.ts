import { NextRequest, NextResponse } from "next/server";
import { callChain } from "@/lib/langchain";
import { generateAnswer, retrieveRelevantChunks } from "@/lib/generate-answer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const question = body.message;

  if (!question) {
    return NextResponse.json("Error: No question in the request", {
      status: 400,
    });
  }

  try {
    const relevantChunks = await retrieveRelevantChunks(question);
    const answers = await generateAnswer(question, relevantChunks);
    return NextResponse.json({ message: answers }, { status: 200 });
  } catch (error) {
    console.error("Internal server error ", error);
    return NextResponse.json("Error: Something went wrong. Try again!", {
      status: 500,
    });
  }
}
