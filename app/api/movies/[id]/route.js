import { getMoviesById } from "@/database/data"
import { NextResponse } from "next/server"

export async function GET(request, {params}){
    const movieId = params?.id
    console.log(movieId)
    const data = await getMoviesById(movieId)
    return NextResponse.json(data)
}