
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { ResumeData } from '../types';
import { getGeminiResponse } from '../services/gemini';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

interface AIAssistantProps {
  resume: ResumeData;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ resume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: `I'm Pravin's AI agent. Since the profile is in "Snapshot Mode," I'm here to provide the full details. What technical area should we dive into?` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "Full Tech Stack?",
    "Banking Logic?",
    "Available for Hire?",
    "Project Details?"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;
    
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsTyping(true);

    const response = await getGeminiResponse(textToSend, resume);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'bot', text: response || "I'm offline. Email Pravin!" }]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-[350px] sm:w-[400px] h-[550px] bg-[#1a1a20] rounded-[2.5rem] shadow-2xl border border-white/5 flex flex-col mb-4 overflow-hidden animate-in zoom-in-95 duration-300">
          {/* Header */}
          <div className="bg-indigo-600 p-6 text-white flex justify-between items-center relative overflow-hidden">
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-none mb-1">Deep Intelligence</h4>
                <p className="text-[10px] uppercase tracking-widest text-indigo-200 font-black">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors relative z-10">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0a0a0c]/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-[13px] font-medium leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none' 
                    : 'bg-[#25252b] text-slate-300 border border-white/5 rounded-bl-none shadow-xl'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#25252b] border border-white/5 p-4 rounded-3xl rounded-bl-none shadow-sm flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-1 h-1 bg-indigo-500 rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1 h-1 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          {!isTyping && (
            <div className="px-6 pb-2 flex flex-wrap gap-2">
              {quickQuestions.map((q, i) => (
                <button 
                  key={i}
                  onClick={() => handleSend(q)}
                  className="px-3 py-1.5 bg-[#25252b] border border-white/5 text-slate-400 text-[10px] font-black uppercase tracking-tighter rounded-full hover:border-indigo-600 hover:text-white transition-all"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-6 bg-[#1a1a20] border-t border-white/5">
            <div className="flex items-center gap-2 bg-[#0a0a0c] p-1.5 rounded-2xl border border-white/5">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask for more detail..."
                className="flex-1 bg-transparent border-none px-4 py-2 text-sm font-medium focus:ring-0 outline-none text-white"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center hover:bg-indigo-700 transition-all disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-16 rounded-full shadow-2xl shadow-indigo-500/10 transition-all duration-300 flex items-center gap-3 px-6 ${
          isOpen ? 'bg-[#1a1a20] text-white' : 'bg-indigo-600 text-white hover:scale-105 active:scale-95'
        }`}
      >
        <MessageSquare size={24} />
        {!isOpen && <span className="font-black text-sm uppercase tracking-widest">Query AI</span>}
      </button>
    </div>
  );
};

export default AIAssistant;
