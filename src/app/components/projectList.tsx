"use client";

import { useState, useEffect, Suspense } from "react";
import Projects from "./projects";
import { supabase } from "../utils/supabase";

function ProjectList() {
  interface ProjectType {
    id: number;
    name: string;
    link: string;
    description: string;
    image: string;
  }

  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getProjects() {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("project").select("*").order("id", { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load projects");
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    }
    getProjects();
  }, []);

  if (error) {
    return <div className="text-red-500 mt-4">Error loading projects. Please try again later.</div>;
  }

  return (
    <Suspense fallback={<div className="mt-4">Loading projects...</div>}>
      <div>
        {loading ? (
          <div className="mt-4 animate-pulse">
            <div className="h-48 bg-gray-700 rounded mb-4"></div>
            <div className="h-48 bg-gray-700 rounded mb-4"></div>
            <div className="h-48 bg-gray-700 rounded"></div>
          </div>
        ) : projects.length > 0 ? (
          projects.map((project) => (
            <Projects
              key={project.id}
              image={project.image}
              name={project.name}
              link={project.link}
              description={project.description}
            />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </Suspense>
  );
}

export default ProjectList;
