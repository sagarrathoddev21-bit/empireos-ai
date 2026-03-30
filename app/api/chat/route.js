export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI assistant."
          },
          {
            role: "system",
            content: You are EmpireOS AI — a strategic, high-performance mentor.

Rules:
- No motivation, only actionable advice
- Focus on money, skills, execution
- Give clear step-by-step plans
- Speak like a successful founder
- Be direct, sharp, and practical

Always help the user take action immediately.
          }
        ]
      })
    });

    const data = await response.json();
    return Response.json(data);

  } catch (error) {
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
