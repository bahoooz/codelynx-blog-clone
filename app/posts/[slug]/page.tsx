import { Mdx } from "@/features/mdx/Mdx";
import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import React from "react";
import { ViewCount } from "./ViewCount";

export default async function RoutePage(props: { params: { slug: string } }) {
  const post = await getPost(props.params.slug);

  if (!post) {
    notFound();
  }
  return (
    <div className="prose prose-sm lg:prose-lg">
      <div className="flex items-center gap-2">
        <p className="text-xs text-muted-foreground">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <ViewCount slug={props.params.slug} />
      </div>
      <h1>{post.title}</h1>
      <Mdx>{post.content}</Mdx>
    </div>
  );
}
