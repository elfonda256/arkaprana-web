import React from "react";
import { notFound } from "next/navigation";
import { SOLUTIONS, getSolutionBySlug } from "@/lib/data";
import SolutionDetailClientView from "./SolutionDetailClientView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const shortSlugs = SOLUTIONS.map((sol) => ({ slug: sol.shortSlug }));
  const longSlugs = SOLUTIONS.map((sol) => ({ slug: sol.slug }));
  return [...shortSlugs, ...longSlugs];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const sol = getSolutionBySlug(slug);
  if (!sol) return {};
  return {
    title: `${sol.name} | ARKAPRANA Enterprise Solutions`,
    description: sol.description
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const sol = getSolutionBySlug(slug);

  if (!sol) {
    notFound();
  }

  return <SolutionDetailClientView slug={slug} />;
}
