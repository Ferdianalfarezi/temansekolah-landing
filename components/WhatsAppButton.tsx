"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6281281790149?text=Halo%2C%20saya%20tertarik%20dengan%20Teman%20Sekolah.%20Boleh%20info%20lebih%20lanjut%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-200 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-800 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat via WhatsApp
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </a>
  );
}
