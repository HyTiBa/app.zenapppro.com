import { Button } from '@mui/material';
import React, { useState } from 'react'

const MoodTap = () => {
    const [selectedMood, setSelectedMood] = useState("");
    const [reflection, setReflection] = useState("");
  
    const moods = ["Calm", "Stressed", "Energetic", "Tired", "Happy", "Anxious"];
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-blue-600">Mood Tracker</h2>
            <div className="text-2xl text-blue-600">😊</div>
          </div>
  
          <div className="grid grid-cols-3 gap-4 mb-4">
            {moods.map((mood) => (
              <button
                key={mood}
                className={`py-2 
                ${                  selectedMood === mood
  ? "bg-blue-500 text-white"
  : "bg-gray-100 text-gray-700"

}
 rounded-md
                    `
              }
                onClick={() => {
                  setSelectedMood(mood)

                }}
              >
                {mood}
              </button>
            ))}
          </div>
  
          <textarea
            className="w-full h-24 bg-blue-50 rounded-xl p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Write your daily reflection..."
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
          />
  
          <div className="mt-4 flex justify-end">
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
              onClick={() => alert(`Mood: ${selectedMood}\nReflection: ${reflection}`)}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    );
}

export default MoodTap


