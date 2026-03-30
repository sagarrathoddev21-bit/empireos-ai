"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setReply(data.choices[0].message.content);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>EmpireOS AI</h1>
      <input value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      <p>{reply}</p>
    </div>
  );
}
