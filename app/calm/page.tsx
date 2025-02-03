"use client"
import TabsComponent from "@/components/CalmTabs";
import Main from "@/components/Main";
import { Button } from "@mui/material";
import { useState } from "react";
import MoodTap from "./MoodTap";
import BreatheTab from "./BreathTap";
import MeditationTab from "./MeditationTab";


export default function Home() {
  return (
    <Main>
      {<TabsComponent items={items} />}
    </Main>);
}




const items = [
  { title: "Mood", content: <MoodTap/> },
  { title: "Breathe", content: <BreatheTab/> },
  { title: "Meditate", content:< MeditationTab  /> },

]



