"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Zap } from "lucide-react";

type Message = {
  role: "bot" | "user";
  text: string;
};

const quickReplies = [
  "Membership plans?",
  "Free trial?",
  "Timings?",
  "Contact number?",
  "Personal training?",
];

function getResponse(input: string): string {
  const q = input.toLowerCase();

  if (q.includes("plan") || q.includes("price") || q.includes("fee") || q.includes("cost") || q.includes("membership")) {
    return "We have 4 plans:\n• Monthly — ₹1,200\n• Quarterly — ₹3,200\n• Half Yearly — ₹5,500 (Best Value)\n• Annual — ₹9,500\n\nCall 76740 14383 for student/couple discounts!";
  }
  if (q.includes("free") || q.includes("trial")) {
    return "Yes! We offer a FREE trial session for first-time visitors. Just walk in or call 76740 14383 to schedule it. No commitment required. 💪";
  }
  if (q.includes("time") || q.includes("hour") || q.includes("open") || q.includes("timing")) {
    return "📅 Timings:\n• Mon–Sat: 6:00 AM – 10:00 PM\n• Sunday: 8:00 AM – 8:00 PM\n\nWe're open 7 days a week!";
  }
  if (q.includes("women") || q.includes("female") || q.includes("ladies") || q.includes("girl")) {
    return "Yes! Women train at Salus Fitness. The gym has dedicated equipment areas and a comfortable, welcoming environment. Call 76740 14383 for more info! 💪";
  }
  if (q.includes("personal") || q.includes("pt") || q.includes("trainer") || q.includes("coach")) {
    return "Our certified trainers offer 1:1 Personal Training sessions. PT is included in Quarterly+ plans. Annual members get unlimited PT. Call 76740 14383 to book!";
  }
  if (q.includes("diet") || q.includes("nutrition") || q.includes("food")) {
    return "We provide personalized diet plans with Quarterly+ memberships. Our nutrition coach Anjali creates custom plans based on your body type, goals, and lifestyle.";
  }
  if (q.includes("contact") || q.includes("number") || q.includes("phone") || q.includes("call") || q.includes("whatsapp")) {
    return "📞 Call/WhatsApp:\n• 76740 14383\n• 86866 56564\n\n📸 Instagram: @salus_fitnessgym\n\nWe respond within 30 minutes during gym hours!";
  }
  if (q.includes("location") || q.includes("address") || q.includes("where") || q.includes("map")) {
    return "Visit us at Salus Fitness Gym! WhatsApp 76740 14383 and we'll share the exact Google Maps location. We have free parking for all members 🅿️";
  }
  if (q.includes("weight") || q.includes("fat") || q.includes("lose") || q.includes("slim")) {
    return "Our Weight Loss program is 8–12 weeks of targeted cardio + strength circuits. Members have lost up to 22 kg! Try our BMI Calculator on this page for a personalized plan. 🔥";
  }
  if (q.includes("muscle") || q.includes("bulk") || q.includes("build") || q.includes("gain")) {
    return "Our Muscle Building program is 12–16 weeks of progressive overload. Members have gained up to 9 kg of muscle. Includes diet plan + trainer guidance. 💪";
  }
  if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("hola")) {
    return "Hey there! 👋 Welcome to Salus Fitness! I'm your AI fitness assistant. Ask me about memberships, timings, trainers, programs, or anything else. How can I help you?";
  }
  if (q.includes("thank") || q.includes("thanks")) {
    return "You're welcome! Ready to start your transformation? 💪 Call 76740 14383 or just walk into Salus Fitness for a free trial session!";
  }
  if (q.includes("bmi") || q.includes("calculator") || q.includes("body")) {
    return "Use our FREE BMI Calculator on this page! Scroll to the BMI section — enter your height, weight, age, and gender to get your BMI, calorie needs, and a personalized membership recommendation.";
  }

  return "Great question! For the most accurate answer, reach us at 📞 76740 14383 or WhatsApp us. Our team is available Mon–Sat 6 AM–10 PM. Want to know about memberships, trainers, or programs?";
}

export function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! 👋 I'm your Salus Fitness AI assistant. Ask me anything about memberships, trainers, programs, timings, or facilities!",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = getResponse(text);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-[88px] right-4 md:bottom-8 md:right-8 z-[60] w-14 h-14 rounded-full bg-[#D4AF37] text-[#0A0A0A] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] cursor-pointer border-none pulse-ring"
        aria-label="Open AI Chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-[160px] right-4 md:bottom-28 md:right-8 z-[60] w-[min(calc(100vw-32px),360px)] md:w-96 bg-[#CDC9BC] border border-[rgba(150,105,10,0.25)] rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.3),0_0_30px_rgba(150,105,10,0.1)]"
          >
            {/* Header */}
            <div className="bg-[#CAC6B9] border-b border-[rgba(150,105,10,0.15)] px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[rgba(150,105,10,0.18)] flex items-center justify-center">
                <Bot size={15} className="text-[#96690A]" />
              </div>
              <div>
                <div className="font-sans font-semibold text-[#1C1914] text-sm">Salus AI Assistant</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A7A4E]" />
                  <span className="text-[#6B6658] text-xs font-body">Online · Replies instantly</span>
                </div>
              </div>
              <div className="ml-auto">
                <Zap size={12} className="text-[#96690A]" />
              </div>
            </div>

            {/* Messages */}
            <div className="h-60 md:h-72 overflow-y-auto p-4 space-y-3 hide-scrollbar">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-[rgba(150,105,10,0.12)] flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <Bot size={12} className="text-[#96690A]" />
                    </div>
                  )}
                  <div
                    className="max-w-[78%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line font-body"
                    style={
                      msg.role === "user"
                        ? { background: "#D4AF37", color: "#0A0A0A", borderRadius: "16px 4px 16px 16px" }
                        : { background: "#D3CFC2", color: "#2E2A22", borderRadius: "4px 16px 16px 16px" }
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[rgba(150,105,10,0.12)] flex items-center justify-center flex-shrink-0">
                    <Bot size={12} className="text-[#96690A]" />
                  </div>
                  <div className="bg-[#D3CFC2] px-4 py-3 rounded-2xl rounded-tl-none flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#6B6658]"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            <div className="px-3 pb-2 flex gap-1.5 overflow-x-auto hide-scrollbar">
              {quickReplies.map((qr) => (
                <button
                  key={qr}
                  onClick={() => sendMessage(qr)}
                  className="flex-shrink-0 text-[10px] font-semibold border border-[rgba(150,105,10,0.3)] text-[#96690A] px-3 py-1.5 rounded-full hover:bg-[rgba(150,105,10,0.1)] transition-all duration-200 cursor-pointer bg-transparent whitespace-nowrap"
                >
                  {qr}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-[rgba(150,105,10,0.15)] p-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask anything about Salus Fitness..."
                className="flex-1 bg-[#D3CFC2] border border-[#A29D8F] text-[#1C1914] text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-[rgba(150,105,10,0.5)] placeholder-[#8C8776] font-body transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => sendMessage(input)}
                className="w-9 h-9 rounded-xl bg-[#D4AF37] text-[#0A0A0A] flex items-center justify-center cursor-pointer border-none flex-shrink-0"
              >
                <Send size={14} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
