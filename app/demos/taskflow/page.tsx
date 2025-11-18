"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTrash, FaPlus, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function TaskFlow() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, mounted]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now().toString(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-8">
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
          <h1 className="text-4xl font-bold text-white mb-2">TaskFlow</h1>
          <p className="text-gray-400 mb-8">A powerful task management app with local storage persistence</p>

          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTask()}
                placeholder="Add a new task..."
                className="flex-1 px-4 py-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={addTask}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold flex items-center gap-2"
              >
                <FaPlus /> Add
              </motion.button>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              {tasks.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No tasks yet. Add one to get started!</p>
              ) : (
                tasks.map((task) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg group hover:bg-blue-500/10 transition"
                  >
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="w-5 h-5 rounded cursor-pointer"
                    />
                    <span className={`flex-1 ${task.completed ? "line-through text-gray-500" : "text-white"}`}>
                      {task.text}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => deleteTask(task.id)}
                      className="text-red-400 opacity-0 group-hover:opacity-100 transition"
                    >
                      <FaTrash />
                    </motion.button>
                  </motion.div>
                ))
              )}
            </div>

            <div className="pt-4 text-sm text-gray-400 border-t border-blue-500/20">
              <p>{tasks.filter(t => !t.completed).length} active · {tasks.filter(t => t.completed).length} completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
