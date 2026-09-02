import express from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5001;
const CORS_ORIGIN = process.env.CORS_ORIGIN ?? "http://localhost:3000";

app.use(
  cors({
    origin: CORS_ORIGIN,
  })
);

app.get("/api/profile", (req, res) => {
  res.json({
    name: "Vishal Kachhap",
    role: "Full Stack Developer",
    bio: "I love building beautiful web applications and learning new technologies.",
    skills: ["React", "Next.js", "Node.js", "Express", "Python"],
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});