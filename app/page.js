"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive website to showcase my profile, skills, education and projects.",
    tech: "Next.js, React, CSS, JavaScript",
    link: "#contact",
  },
  {
    title: "Safe Flow",
    description: "A crowd management concept for improving entry, exit and emergency response.",
    tech: "React, JavaScript, UI Design",
    link: "#contact",
  },
  {
    title: "Student Management System",
    description: "An application concept for managing student information and academic records.",
    tech: "C Programming, Data Structures",
    link: "#contact",
  },
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main className={dark ? "site dark" : "site"}>
      <Navbar dark={dark} setDark={setDark} />

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
          <h1>Hello, I'm <span>Suraksha</span></h1>
          <h2>Information Science Engineering Student</h2>
          <p className="hero-text">
            I am an engineering student passionate about programming,
            web development and creating useful digital solutions.
          </p>
          <div className="hero-buttons">
            <a className="primary-btn" href="#projects">View My Projects</a>
            <a className="secondary-btn" href="#contact">Contact Me</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="avatar">S</div>
          <h3>Suraksha</h3>
          <p>Engineering Student</p>
          <span className="status">● Open to Learning</span>
        </div>
      </section>

      <section className="section" id="about">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-card">
          <p>
            I am pursuing a Bachelor of Engineering in Information Science
            Engineering. I am interested in technology, programming and
            software development. I enjoy learning new skills and improving
            my knowledge through practical projects.
          </p>
          <div className="about-details">
            <p><strong>Education:</strong> Bachelor of Engineering</p>
            <p><strong>Branch:</strong> Information Science Engineering</p>
            <p><strong>Interests:</strong> Web Development, Programming</p>
            <p><strong>Goal:</strong> To become a Software Engineer</p>
          </div>
        </div>
      </section>

      <section className="section alternate" id="skills">
        <p className="eyebrow">WHAT I AM LEARNING</p>
        <h2 className="section-title">My <span>Skills</span></h2>
        <div className="skills-grid">
          {["C Programming", "Python", "Java", "HTML", "CSS", "JavaScript", "React", "Next.js", "SQL", "Git & GitHub"].map((skill) => (
            <div className="skill-card" key={skill}>{skill}</div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <p className="eyebrow">MY WORK</p>
        <h2 className="section-title">My <span>Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="section alternate" id="experience">
        <p className="eyebrow">MY JOURNEY</p>
        <h2 className="section-title">Experience & <span>Learning</span></h2>
        <div className="about-card">
          <h3>Engineering Student</h3>
          <p>
            Currently pursuing Information Science Engineering and
            developing my technical skills through academic learning
            and practical projects.
          </p>
        </div>
      </section>

      <section className="section" id="achievements">
        <p className="eyebrow">MILESTONES</p>
        <h2 className="section-title">My <span>Achievements</span></h2>
        <div className="about-card">
          <p>• Learning programming and web development.</p>
          <p>• Working on academic and technical projects.</p>
          <p>• Improving problem-solving and technical skills.</p>
        </div>
      </section>

      <section className="section alternate" id="contact">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2 className="section-title">Contact <span>Me</span></h2>
        <div className="contact-card">
          <p>Have a question or want to connect? Send me a message.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button className="primary-btn" type="submit">Send Message</button>
            {sent && (
              <p className="success">
                Your message passed the form validation!
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}