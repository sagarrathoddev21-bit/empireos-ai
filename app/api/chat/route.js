export async function POST(req) {
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
          content: "You are a powerful mentor who gives clear, practical advice."
        },
        {
          role: "user",
          content: message
        }
      ]
    })
  });

  const data = await response.json();
  return Response.json(data);
}
