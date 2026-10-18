import React from "react";
import { notFound } from "next/navigation";
import { INSIGHTS } from "@/lib/data";
import InsightDetailClientView from "./InsightDetailClientView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  INSIGHTS.forEach((post) => {
    params.push({ slug: post.slug });
    if (post.id && post.id !== post.slug) {
      params.push({ slug: post.id });
    }
  });
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = INSIGHTS.find((p) => p.slug === slug || p.id === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ARKAPRANA Insights`,
    description: post.snippet
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = INSIGHTS.find((p) => p.slug === slug || p.id === slug);

  if (!post) {
    notFound();
  }

  return <InsightDetailClientView slug={slug} />;
}
