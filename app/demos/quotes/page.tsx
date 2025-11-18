"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaArrowLeft, FaCopy, FaTwitter } from "react-icons/fa";
import Link from "next/link";

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
];

export default function QuoteMind() {
  const [quote, setQuote] = useState<Quote>(quotes[0]);
  const [copied, setCopied] = useState(false);

  const getRandomQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnTwitter = () => {
    const text = `"${quote.text}" - ${quote.author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900/20 to-slate-950 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/#projects">
          <motion.button
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 font-semibold"
          >
            <FaArrowLeft /> Back to Portfolio
          </motion.button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 border border-blue-500/20"
        >
          <h1 className="text-4xl font-bold text-white mb-2">QuoteMind</h1>
          <p className="text-gray-400 mb-12">Inspirational quotes to motivate and inspire</p>

          <motion.div
            key={quote.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-8 md:p-12 border border-blue-500/30 mb-8 text-center"
          >
            <FaQuoteLeft className="text-4xl text-blue-400 mx-auto mb-6 opacity-50" />
            <p className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-relaxed">
              {quote.text}
            </p>
            <p className="text-lg text-cyan-400 font-semibold">— {quote.author}</p>
          </motion.div>

          <div className="flex gap-3 flex-wrap justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={getRandomQuote}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold"
            >
              New Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={copyToClipboard}
              className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold flex items-center gap-2 hover:bg-cyan-500/10 transition"
            >
              <FaCopy /> {copied ? "Copied!" : "Copy"}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={shareOnTwitter}
              className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-500/10 transition"
            >
              <FaTwitter /> Share
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
