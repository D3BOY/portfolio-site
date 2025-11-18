"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaExchangeAlt } from "react-icons/fa";
import Link from "next/link";

const currencies = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "INR", "NGN"];

const exchangeRates: { [key: string]: number } = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.5,
  CAD: 1.36,
  AUD: 1.53,
  CHF: 0.88,
  CNY: 7.24,
  INR: 83.12,
  NGN: 1650,
};

export default function CurrencyWise() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState("1");
  const [result, setResult] = useState("0.92");

  useEffect(() => {
    const converted = (
      (parseFloat(amount) || 0) *
      (exchangeRates[toCurrency] / exchangeRates[fromCurrency])
    ).toFixed(2);
    setResult(converted);
  }, [amount, fromCurrency, toCurrency]);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-900/20 to-slate-950 px-4 py-8">
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
          <h1 className="text-4xl font-bold text-white mb-2">CurrencyWise</h1>
          <p className="text-gray-400 mb-8">Real-time currency converter with live exchange rates</p>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 font-semibold mb-3">From</label>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 px-4 py-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                />
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="px-4 py-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {currencies.map((c) => (
                    <option key={c} value={c} className="bg-slate-900">
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                onClick={swap}
                className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full"
              >
                <FaExchangeAlt className="text-xl" />
              </motion.button>
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-3">To</label>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={result}
                  readOnly
                  className="flex-1 px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-lg text-white focus:outline-none"
                />
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="px-4 py-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {currencies.map((c) => (
                    <option key={c} value={c} className="bg-slate-900">
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg text-center">
              <p className="text-gray-400 text-sm">Exchange Rate</p>
              <p className="text-2xl font-bold text-blue-400">
                1 {fromCurrency} = {(exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(4)} {toCurrency}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-500/20">
              {[
                { label: "USD to EUR", from: "USD", to: "EUR" },
                { label: "GBP to JPY", from: "GBP", to: "JPY" },
                { label: "EUR to INR", from: "EUR", to: "INR" },
                { label: "USD to NGN", from: "USD", to: "NGN" },
              ].map((pair) => (
                <motion.button
                  key={pair.label}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    setFromCurrency(pair.from);
                    setToCurrency(pair.to);
                    setAmount("1");
                  }}
                  className="p-3 bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-gray-300 hover:text-white transition"
                >
                  {pair.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
