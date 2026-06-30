"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Users } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type ClassItem = {
  time: string;
  name: string;
  trainer: string;
  duration: string;
  spots: number;
  color: string;
};

type ScheduleData = {
  [key: string]: ClassItem[];
};

const schedule: ScheduleData = {
  Mon: [
    { time: "6:00 AM", name: "Morning HIIT", trainer: "Rahul", duration: "45 min", spots: 8, color: "#FF6B35" },
    { time: "8:00 AM", name: "Strength Training", trainer: "Vikram", duration: "60 min", spots: 12, color: "#D4AF37" },
    { time: "6:00 PM", name: "CrossFit", trainer: "Rahul", duration: "50 min", spots: 10, color: "#00E676" },
    { time: "8:00 PM", name: "Yoga", trainer: "Priya", duration: "60 min", spots: 15, color: "#64B5F6" },
  ],
  Tue: [
    { time: "6:00 AM", name: "Cardio Blast", trainer: "Vikram", duration: "45 min", spots: 10, color: "#FF4B8B" },
    { time: "9:00 AM", name: "Toning & Flex", trainer: "Priya", duration: "55 min", spots: 12, color: "#FF4B8B" },
    { time: "5:00 PM", name: "Zumba", trainer: "Anjali", duration: "60 min", spots: 20, color: "#E8CC5F" },
    { time: "7:30 PM", name: "Strength Training", trainer: "Rahul", duration: "60 min", spots: 12, color: "#D4AF37" },
  ],
  Wed: [
    { time: "6:00 AM", name: "HIIT", trainer: "Vikram", duration: "45 min", spots: 8, color: "#FF6B35" },
    { time: "8:00 AM", name: "CrossFit", trainer: "Rahul", duration: "50 min", spots: 10, color: "#00E676" },
    { time: "6:00 PM", name: "Yoga", trainer: "Priya", duration: "60 min", spots: 15, color: "#64B5F6" },
    { time: "8:00 PM", name: "Cardio", trainer: "Vikram", duration: "40 min", spots: 12, color: "#FF4B8B" },
  ],
  Thu: [
    { time: "6:00 AM", name: "Morning Yoga", trainer: "Priya", duration: "60 min", spots: 15, color: "#64B5F6" },
    { time: "9:00 AM", name: "Core & Flex", trainer: "Anjali", duration: "55 min", spots: 12, color: "#FF4B8B" },
    { time: "6:00 PM", name: "HIIT", trainer: "Rahul", duration: "45 min", spots: 8, color: "#FF6B35" },
    { time: "8:00 PM", name: "Strength", trainer: "Vikram", duration: "60 min", spots: 12, color: "#D4AF37" },
  ],
  Fri: [
    { time: "6:00 AM", name: "CrossFit", trainer: "Rahul", duration: "50 min", spots: 10, color: "#00E676" },
    { time: "8:00 AM", name: "Zumba", trainer: "Anjali", duration: "60 min", spots: 20, color: "#E8CC5F" },
    { time: "5:30 PM", name: "HIIT", trainer: "Vikram", duration: "45 min", spots: 8, color: "#FF6B35" },
    { time: "7:30 PM", name: "Yoga", trainer: "Priya", duration: "60 min", spots: 15, color: "#64B5F6" },
  ],
  Sat: [
    { time: "7:00 AM", name: "Outdoor Bootcamp", trainer: "Rahul", duration: "75 min", spots: 20, color: "#D4AF37" },
    { time: "10:00 AM", name: "Pilates & Tone", trainer: "Priya", duration: "55 min", spots: 12, color: "#FF4B8B" },
    { time: "5:00 PM", name: "Zumba", trainer: "Anjali", duration: "60 min", spots: 20, color: "#E8CC5F" },
  ],
  Sun: [
    { time: "8:00 AM", name: "Yoga & Meditation", trainer: "Priya", duration: "75 min", spots: 20, color: "#64B5F6" },
    { time: "10:00 AM", name: "Open Gym", trainer: "All Trainers", duration: "Open", spots: 30, color: "#D4AF37" },
    { time: "5:00 PM", name: "Stretch & Recovery", trainer: "Anjali", duration: "45 min", spots: 15, color: "#00E676" },
  ],
};

export function Schedule() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "short" }).slice(0, 3);
  const [activeDay, setActiveDay] = useState(
    days.includes(today) ? today : "Mon"
  );

  return (
    <section id="schedule" className="section-padding bg-[#0A0A0A] relative">
      <div className="container-wide relative">
        <SectionTitle
          label="Schedule"
          title="Class"
          highlight="Timetable"
          subtitle="Book your spot in advance and never miss a session."
        />

        {/* Day tabs */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-8 pb-2">
          {days.map((day) => (
            <motion.button
              key={day}
              onClick={() => setActiveDay(day)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 px-5 md:px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer border-none min-h-[44px] min-w-[56px]"
              style={
                activeDay === day
                  ? { background: "#D4AF37", color: "#0A0A0A" }
                  : { background: "#111", color: "#666", border: "1px solid #1E1E1E" }
              }
            >
              {day}
            </motion.button>
          ))}
        </div>

        {/* Classes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {schedule[activeDay].map((cls, i) => (
              <motion.div
                key={`${cls.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#111] border border-[#1E1E1E] rounded-2xl p-5 hover:border-[rgba(212,175,55,0.2)] transition-all duration-400 cursor-default relative overflow-hidden group"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: cls.color }}
                />

                <div className="flex items-center gap-2 mb-3">
                  <Clock size={12} style={{ color: cls.color }} />
                  <span className="text-xs font-mono font-bold" style={{ color: cls.color }}>
                    {cls.time}
                  </span>
                </div>

                <h4 className="font-sans font-bold text-white text-base mb-1 leading-snug">
                  {cls.name}
                </h4>
                <p className="text-[#555] text-xs mb-3">with {cls.trainer}</p>

                <div className="flex items-center justify-between text-xs text-[#444]">
                  <span>{cls.duration}</span>
                  <span className="flex items-center gap-1">
                    <Users size={10} />
                    {cls.spots} spots
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  className="mt-4 w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border-none min-h-[44px] opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                  style={{ background: `${cls.color}15`, color: cls.color }}
                >
                  Book Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
