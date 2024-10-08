// Creates a standalone question from the chat-history and the current question
export const STANDALONE_QUESTION_TEMPLATE = `Given the following conversation
 and a follow up question, rephrase the follow up question to be a standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`;

// Actual question you ask the chat and send the response to client
export const QA_TEMPLATE = `You are an enthusiastic AI assistant.Just answers in VietNamese language.
Use the following pieces of context to answer the question at the end.List all relevant information.List information in as much detail as possible.
If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.

{context}

Question: {question}
Helpful answer in markdown:`;
