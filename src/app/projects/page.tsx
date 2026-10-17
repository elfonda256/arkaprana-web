import React from "react";
import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Architectural Case Studies & Deployments | ARKAPRANA Technology Solutions",
  description:
    "Studi kasus arsitektur rekayasa teknologi, verifikasi metrik sebelum vs sesudah, kepatuhan regulasi POJK 11/2022 & UU PDP 2024 oleh PT ARKAPRANA TEKNOLOGI NUSANTARA."
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 min-h-screen">
      <ProjectsClient />
    </main>
  );
}
