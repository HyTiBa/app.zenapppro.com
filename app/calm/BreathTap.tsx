"use client";

import { Card, CardContent } from "@mui/material";
import { ChevronRight, Wind } from "lucide-react";
export default function BreathingExercises() {
  const exercises = [
    { title: "Box Breathing", duration: "4-4-4-4 seconds" },
    { title: "Long Exhale", duration: "4-7-8 seconds" },
    { title: "Equal Breathing", duration: "5-0-5 seconds" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-green-50 rounded-2xl shadow-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-green-600">
            Breathing Exercises
          </h2>
          <Wind className="text-2xl text-green-600" />
        </div>

        <div className="space-y-4">
          {exercises.map((exercise) => (
            <Card key={exercise.title} className="p-4 bg-white rounded-lg">
              <CardContent className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {exercise.title}
                  </h3>
                  <p className="text-sm text-gray-500">{exercise.duration}</p>
                </div>
                <ChevronRight className="text-gray-400" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}