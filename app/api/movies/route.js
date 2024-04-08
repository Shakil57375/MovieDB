import { getMovies } from "@/database/data";
import { NextResponse } from "next/server";

export async function GET() {
    const data = getMovies()
    return NextResponse.json(data)
}
