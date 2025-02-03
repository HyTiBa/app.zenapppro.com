"use client";

import { Moon, Bell, Activity, Calendar } from "lucide-react";

export default function Meditation() {
  const meditationOptions = [
    { title: "Sleep", icon: <Moon className="text-purple-500 w-6 h-6" /> },
    { title: "Anxiety", icon: <Bell className="text-purple-500 w-6 h-6" /> },
    { title: "Focus", icon: <Activity className="text-purple-500 w-6 h-6" /> },
    { title: "Relaxation", icon: <Calendar className="text-purple-500 w-6 h-6" /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-purple-50 rounded-2xl shadow-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-purple-600">Meditation</h2>
          <Moon className="text-2xl text-purple-600" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {meditationOptions.map((option) => (
            <div
              key={option.title}
              className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-4 hover:bg-purple-100 transition"
            >
              {option.icon}
              <p className="text-sm font-medium text-gray-800 mt-2">
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
