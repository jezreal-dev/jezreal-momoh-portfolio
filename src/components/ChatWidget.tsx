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
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-96 h-[60vh] sm:h-[500px] max-h-[800px] bg-[#1C2B3A] border border-[#F5F0E8]/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right">
          {/* Header */}
          <div className="bg-[#0D0D0D] p-4 flex justify-between items-center border-b border-[#F5F0E8]/10 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FFBE0B] rounded-full animate-pulse"></div>
              <h3 className="text-[#F5F0E8] font-bold">Jezreal&apos;s AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#F5F0E8]/70 hover:text-[#FFBE0B] transition-colors p-1">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[#1C2B3A]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === "user" ? "bg-[#E8630A] text-[#F5F0E8] rounded-br-none" : "bg-[#0D0D0D] text-[#F5F0E8] border border-[#F5F0E8]/10 rounded-bl-none"}`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* FAQ Quick Replies */}
            {messages.length === 1 && !isLoading && (
              <div className="flex flex-col gap-2 mt-2 items-start pl-2">
                <p className="text-xs text-[#F5F0E8]/50 uppercase tracking-wider font-bold mb-1">Frequently Asked</p>
                {["What is your tech stack?", "How did you build this site?", "What does L2E Shield do?"].map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(faq)}
                    className="text-xs bg-[#0D0D0D] border border-[#E8630A]/30 text-[#F5F0E8]/80 px-3 py-2 rounded-full hover:bg-[#E8630A]/20 transition-colors text-left shadow-sm"
                  >
                    {faq}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#0D0D0D] p-3 rounded-2xl rounded-bl-none border border-[#F5F0E8]/10 flex gap-2 items-center">
                  <Loader2 className="animate-spin text-[#FFBE0B]" size={16} />
                  <span className="text-sm text-[#F5F0E8]/70">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-[#0D0D0D] border-t border-[#F5F0E8]/10 shrink-0">
            <form onSubmit={handleSend} className="flex items-center gap-2 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="w-full bg-[#1C2B3A] text-[#F5F0E8] placeholder:text-[#F5F0E8]/40 border border-[#F5F0E8]/10 rounded-full py-2.5 pl-4 pr-12 focus:outline-none focus:border-[#FFBE0B] text-sm transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#E8630A] text-[#F5F0E8] rounded-full hover:bg-[#FFBE0B] disabled:opacity-50 disabled:hover:bg-[#E8630A] transition-colors"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#E8630A] hover:bg-[#FFBE0B] text-[#F5F0E8] p-4 rounded-full shadow-xl hover:shadow-[#FFBE0B]/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
        >
          <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
        </button>
      )}
    </div>
  );
}
