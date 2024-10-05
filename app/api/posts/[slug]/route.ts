import { getPost } from "@/lib/posts";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const slug = request.nextUrl.pathname.split("/").pop() ?? ""; // Assurer que slug est une chaîne vide par défaut

  if (!slug) {
    return NextResponse.json({ error: "Slug not found" }, { status: 400 });
  }

  const post = await getPost(slug);

  return NextResponse.json(post);
};
