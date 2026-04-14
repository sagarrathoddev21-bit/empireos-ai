const sendMessage = async () => {
  if (!input) return;

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setReply(data.choices?.[0]?.message?.content || "No response");
  } catch (err) {
    console.error(err);
    setReply("Error occurred");
  }
};
