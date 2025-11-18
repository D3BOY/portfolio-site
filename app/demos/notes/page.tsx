"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaPlus, FaTrash, FaSearch } from "react-icons/fa";
import Link from "next/link";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function QuickNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("notes");
    if (saved) setNotes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes, mounted]);

  const addNote = () => {
    if (!title.trim() || !content.trim()) return;
    const newNote: Note = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date().toLocaleDateString(),
    };
    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.content.toLowerCase().includes(search.toLowerCase())
  );

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/#projects">
          <motion.button
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 font-semibold"
          >
            <FaArrowLeft /> Back to Portfolio
          </motion.button>
        </Link>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-1 glass rounded-xl p-6 border border-blue-500/20 h-fit"
          >
            <h2 className="text-xl font-bold text-white mb-4">Create Note</h2>
            <div className="space-y-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Note title..."
                className="w-full px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your thoughts..."
                rows={6}
                className="w-full px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={addNote}
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <FaPlus /> Add Note
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2"
          >
            <div className="glass rounded-xl p-6 border border-blue-500/20">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-4">Your Notes</h2>
                <div className="relative">
                  <FaSearch className="absolute left-4 top-3.5 text-gray-500" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search notes..."
                    className="w-full pl-10 pr-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredNotes.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    {notes.length === 0 ? "No notes yet. Create one!" : "No notes match your search."}
                  </p>
                ) : (
                  filteredNotes.map((note) => (
                    <motion.div
                      key={note.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg group hover:bg-blue-500/10 transition"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-white text-lg">{note.title}</h3>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => deleteNote(note.id)}
                          className="text-red-400 opacity-0 group-hover:opacity-100 transition"
                        >
                          <FaTrash />
                        </motion.button>
                      </div>
                      <p className="text-gray-300 text-sm mb-2 line-clamp-2">{note.content}</p>
                      <p className="text-xs text-gray-500">{note.createdAt}</p>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
