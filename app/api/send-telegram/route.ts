import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN!;
    const chatId = process.env.TELEGRAM_CHAT_ID!;

    const message = `
📌 <b>New Reservation</b>
👤 Name: ${data.name}
📧 Email: ${data.email}
📞 Phone: ${data.phone}
🧑‍🤝‍🧑 Guests: ${data.guests}
📅 Date: ${data.date}
⏰ Time: ${data.time}
📝 Special Requests: ${data.requests || "None"}
`;

    const res = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    const resData = await res.json();
    return NextResponse.json({ success: true, data: resData });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
