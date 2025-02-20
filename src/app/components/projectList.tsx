import { useState, useEffect } from "react";
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

  useEffect(() => {
    async function getProjects() {
      setLoading(true);
      const { data, error } = await supabase.from("project").select("*").order("id", { ascending: false });

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data);
      }
      setLoading(false);
    }
    getProjects();
  }, []);

  return (
    <div>
      {loading ? (
        <p className="mt-4">Loading projects...</p>
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
  );
}

export default ProjectList;
