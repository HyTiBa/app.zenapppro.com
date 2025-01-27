import { title } from "process";
import { JSX } from "react";
import Main from "../components/Main";
import TabsComponent from "../components/Tabs";

export default function Home() {
  return (
    <Main>
      {<TabsComponent items={items} />}
    </Main>);
}




const items = [
  { title: "Mood", content: MoodTab() },
  { title: "Breathe", content: BreatheTab() },
  { title: "Meditate", content: MeditateTab() },

]


function MoodTab() {
  return (
<div></div>
  )
}

function BreatheTab() {
  return (
    <div></div>
  )
}

function MeditateTab() {
  return (
    <div></div>
  )
}
