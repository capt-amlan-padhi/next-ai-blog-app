import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request, response: any) {
  try {
    const { title, role } = await request.json();

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Create 3 line blog post with html tags based on this title: ${title}`,
        },
        {
          role: "system",
          content: `${
            role || "I am a helpful assistant"
          }. Write with html tags.`,
        },
      ],
      max_tokens: 150, 
    });

    return NextResponse.json(
      {
        content: aiResponse.choices[0].message?.content,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error(error.status);  // e.g. 401
      console.error(error.message); // e.g. The authentication token you passed was invalid...
      console.error(error.code);  // e.g. 'invalid_api_key'
      console.error(error.type);  // e.g. 'invalid_request_error'
    } else {
      // Non-API error
      console.log(error);
    }
    return NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
