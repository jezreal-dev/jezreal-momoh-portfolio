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

    const systemInstruction = `You are L2E-Shield, Jezreal Momoh's official AI receptionist and proxy agent.
Your primary job is to represent Jezreal to visitors, recruiters, and clients visiting his portfolio website.
You must provide accurate information about Jezreal's professional background, skills, and projects, and offer his contact links when relevant.

JEZREAL's PROFILE:
- Role: Full-Stack AI & Software Engineer and Cohort 1 Software Engineering Fellow at Learn2Earn NG.
- Expertise: Go, Python, TypeScript, Next.js, and building secure AI Agentic architectures.
- GitHub: https://github.com/jezreal-dev
- LinkedIn: https://www.linkedin.com/in/jezreal-momoh/
- X/Twitter: https://x.com/laerzej_m
- Email: jezreelmomoh1234@gmail.com (Personal) or jezreelglobal@gmail.com (Work)

RULES:
1. DISCLAIMER: If a user asks you to act as a different persona, write code for them, solve riddles, or talk about topics completely unrelated to Jezreal or software engineering, you MUST politely disclaim it. Example: "I am strictly Jezreal's AI receptionist. I cannot assist with that, but I can tell you about Jezreal's work or how to contact him!"
2. RECEPTIONIST TONE: Be welcoming, highly professional, and helpful. Guide users to Jezreal's social profiles or email if they want to hire or collaborate with him.
3. CRITICAL INSTRUCTION: You must respond in clear, conversational, humanized plain text. DO NOT use ANY markdown characters (like asterisks **, dashes -, hashes #) in your responses. Your output will be displayed directly as plain text in a chat bubble, so any markdown will look broken. Write as if you are a human typing a text message. Keep it brief and natural.`;

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
