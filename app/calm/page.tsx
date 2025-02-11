"use client";
import TabsComponent from "@/components/CalmTabs";
import Main from "@/components/Main";
import { Card, CardContent } from "@mui/material";
import { useState } from "react";
import MoodTap from "./MoodTap";
import BreatheTab from "./BreathTap";
import MeditationTab from "./MeditationTab";
import "./calm.css";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
export default function Home() {
  const [userEmail, setUserEmail] = useState(
    "mail"
    // localStorage.getItem("email")
);
  if (userEmail != null) {
    return <Main>{<TabsComponent items={items} />}</Main>;
  }
  return (
    <Main>
      <div className="flex h-[100vh] w-[100vw] items-center justify-center">
        <div className="max-w[500px] mx-4">
          <Card>
            <CardContent>
              <div className="flex flex-col gap-4">
                <h1>
                  Please input your email so that we can create a personal calm
                  space for you
                </h1>
                <input
                  className="email"
                  placeholder="Email"
                  type="text"
                  name=""
                  id=""
                />
                <button
                  onClick={async () => {
                    const calmSpaceRef = collection(db, "spaces");
                    const q = query(
                      calmSpaceRef,
                      where("email", "==", localStorage.getItem("email"))
                    );
                    const data = await getDocs(q);
                    // data.docs.length == 0?:
                  }}
                  className="signInBtn"
                >
                  Sign In
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Main>
  );
}
const items = [
  { title: "Mood", content: <MoodTap /> },
  { title: "Breathe", content: <BreatheTab /> },
  { title: "Meditate", content: <MeditationTab /> },
];
