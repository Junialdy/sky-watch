// /app/api/search/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }

  try {
    const weatherRes = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=${process.env.API_KEY}&q=${query}`,
    );
    const weatherData = await weatherRes.json();

    return NextResponse.json(weatherData);
  } catch (error) {
    console.error("API error:", error);

    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 },
    );
  }
}
