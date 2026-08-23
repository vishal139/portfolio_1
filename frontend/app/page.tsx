"use client";

import { useState } from "react";
import axios from "axios";

type Profile = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
};

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);

const handleExplore = async () => {
  setLoading(true);

  try {
    const response = await axios.get(
      "http://localhost:5001/api/profile"
    );

    setProfile(response.data);
  } catch (error) {
    console.error("Failed to fetch profile:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="home">
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <div className="content">
        {!profile ? (
          <>
            <p className="intro">HELLO, I&apos;M</p>

            <h1>
              Vishal <span>Kachhap</span>
            </h1>

            <p className="subtitle">
              Full Stack Developer · Building beautiful experiences with code ✨
            </p>

            <button onClick={handleExplore} disabled={loading}>
              {loading ? "Loading..." : "Explore My World →"}
            </button>
          </>
        ) : (
          <div className="profile">
            <p className="intro">WELCOME TO MY WORLD ✨</p>

            <h1>
              {profile.name.split(" ")[0]}{" "}
              <span>{profile.name.split(" ")[1]}</span>
            </h1>

            <h2>{profile.role}</h2>

            <p className="subtitle">{profile.bio}</p>

            <div className="skills">
              {profile.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}