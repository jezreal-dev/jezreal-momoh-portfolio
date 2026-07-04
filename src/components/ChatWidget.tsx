"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi there! I am L2E-Shield, Jezreal's AI proxy. I'm currently running in limited mode, but how can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const proxyUrl = "/api/chat";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", text: textToSend }]);
    setIsLoading(true);

    try {
      const response = await fetch(proxyUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend }),
      });

      if (!response.ok) {
        let errorText = "An error occurred. Please try again.";
        if (response.status === 429) {
          errorText = "Whoa there! You are sending messages too fast. Please slow down.";
        } else if (response.status === 400 || response.status === 500) {
          const errData = await response.json().catch(() => ({}));
          errorText = errData.error || "An error occurred. Please try again later.";
        }
        setMessages((prev) => [...prev, { role: "bot", text: errorText }]);
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      const botResponse = data?.text || "No response received.";
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);

    } catch (error) {
      console.error(error);
      // Graceful offline fallback
      setMessages((prev) => [
        ...prev, 
        { 
          role: "bot", 
          text: "I am currently experiencing high traffic or a network error. Please reach out to Jezreal directly at jezreelmomoh1234@gmail.com." 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input;
    setInput("");
    await sendMessage(text);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-96 h-[60vh] sm:h-[500px] max-h-[800px] bg-[#1C2B3A]/80 backdrop-blur-2xl border border-[#F5F0E8]/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right ring-1 ring-white/5">
          {/* Header */}
          <div className="bg-[#0D0D0D]/40 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-[#F5F0E8]/5 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-[#FFBE0B] rounded-full"></div>
                <div className="absolute w-2.5 h-2.5 bg-[#FFBE0B] rounded-full animate-ping opacity-75"></div>
              </div>
              <div>
                <h3 className="text-[#F5F0E8] font-bold text-sm">L2E-Shield</h3>
                <p className="text-[#F5F0E8]/50 text-[10px] uppercase tracking-widest font-mono">AI Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#F5F0E8]/50 hover:text-[#FFBE0B] hover:bg-[#F5F0E8]/5 rounded-full p-2 transition-all">
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div 
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed shadow-md
                    ${msg.role === "user" 
                      ? "bg-gradient-to-br from-[#E8630A] to-[#FF8C42] text-white rounded-2xl rounded-tr-sm" 
                      : "bg-[#0D0D0D]/60 backdrop-blur-md text-[#F5F0E8] border border-[#F5F0E8]/10 rounded-2xl rounded-tl-sm"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* FAQ Quick Replies */}
            {messages.length === 1 && !isLoading && (
              <div className="flex flex-col gap-2 mt-4 items-start animate-in fade-in slide-in-from-bottom-2 duration-500">
                <p className="text-[10px] text-[#F5F0E8]/40 uppercase tracking-widest font-mono mb-2 ml-1">Suggested Questions</p>
                {["What is your tech stack?", "How did you build this site?", "What does L2E Shield do?"].map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(faq)}
                    className="text-xs bg-[#0D0D0D]/40 backdrop-blur-sm border border-[#E8630A]/20 text-[#F5F0E8]/80 px-4 py-2.5 rounded-2xl hover:bg-[#E8630A]/20 hover:border-[#E8630A]/40 transition-all text-left shadow-sm hover:shadow-[#E8630A]/10 hover:-translate-y-0.5"
                  >
                    {faq}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#0D0D0D]/60 backdrop-blur-md px-4 py-3 rounded-2xl rounded-tl-sm border border-[#F5F0E8]/10 flex gap-3 items-center shadow-md">
                  <Loader2 className="animate-spin text-[#FFBE0B]" size={16} />
                  <span className="text-xs text-[#F5F0E8]/60 font-mono">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent shrink-0">
            <form onSubmit={handleSend} className="flex items-center gap-2 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message L2E-Shield..."
                className="w-full bg-[#0D0D0D]/60 backdrop-blur-xl text-[#F5F0E8] placeholder:text-[#F5F0E8]/30 border border-[#F5F0E8]/10 rounded-full py-3.5 pl-5 pr-14 focus:outline-none focus:border-[#E8630A]/50 focus:ring-1 focus:ring-[#E8630A]/50 text-sm transition-all shadow-inner"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2.5 bg-gradient-to-r from-[#E8630A] to-[#FF8C42] text-white rounded-full hover:shadow-[0_0_15px_rgba(232,99,10,0.5)] hover:scale-105 disabled:opacity-0 disabled:scale-90 transition-all duration-300"
              >
                <Send size={16} className="ml-0.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Toggle Chat"
          className="bg-gradient-to-br from-[#E8630A] to-[#FF8C42] hover:shadow-[0_0_30px_rgba(232,99,10,0.4)] text-white p-4 sm:p-5 rounded-full shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group ring-4 ring-[#1C2B3A]/50"
        >
          <MessageSquare size={24} className="group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}
    </div>
  );
}
