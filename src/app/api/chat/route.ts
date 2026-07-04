import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userMessage = body.message;

    if (!userMessage) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Initialize the SDK. It automatically picks up process.env.GEMINI_API_KEY
    const ai = new GoogleGenAI({});

    const systemInstruction = `You are L2E-Shield, Jezreal's AI proxy and assistant. 
You run on Jezreal Momoh's portfolio. 
You must strictly answer questions related to Jezreal's professional background, skills, and projects.
If a user asks something unrelated, politely decline and steer the conversation back to Jezreal's expertise.
Jezreal is a Full-Stack AI & Software Engineer and Cohort 1 Software Engineering Fellow at Learn2Earn NG.
He specializes in Go, Python, TypeScript, Next.js, and building secure AI Agentic architectures.

CRITICAL INSTRUCTION: You must respond in clear, conversational, humanized plain text. DO NOT use ANY markdown characters (like asterisks **, dashes -, hashes #) in your responses. Your output will be displayed directly as plain text in a chat bubble, so any markdown will look broken. Write as if you are a human typing a text message. Keep it brief and natural.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return NextResponse.json({ text: response.text });
  } catch (error: any) {
    console.error('L2E-Shield Error:', error);
    
    // Provide a graceful fallback error message
    return NextResponse.json(
      { error: 'L2E-Shield is currently experiencing high traffic or a configuration error. Please try again later.' },
      { status: 500 }
    );
  }
}
