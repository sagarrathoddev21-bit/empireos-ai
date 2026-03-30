export async function POST(req) {
  try {
    // Get message from frontend
    const { message } = await req.json();

    // Call Groq API
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
            content: `
You are EmpireOS AI — a strategic, high-performance mentor.

Rules:
- No motivation, only actionable advice
- Focus on money, skills, execution
- Give clear step-by-step plans
- Speak like a successful founder
- Be direct, sharp, and practical

Always help the user take action immediately.
`
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    // Convert response to JSON
    const data = await response.json();

    // Return AI response
    return Response.json(data);

  } catch (error) {
    console.error("API Error:", error);

    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
