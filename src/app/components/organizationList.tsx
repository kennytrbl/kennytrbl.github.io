import { useState, useEffect, use } from "react";
import Organizations from "./organizations";
import { supabase } from "../utils/supabase";

function OrganizationList() {
  interface OrganizationType {
    id: number;
    image: string;
    link: string;
    description: string;
  }

  const [organizations, setOrganizations] = useState<OrganizationType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getOrganizations() {
      setLoading(true);
      const { data, error } = await supabase.from("organization").select("*");

      if (error) {
        console.error("Error fetching organizations:", error);
      } else {
        setOrganizations(data);
      }
      setLoading(false);
    }
    getOrganizations();
  }, []);

  return (
    <div>
      {loading ? (
        <p className="mt-4">Loading organizations...</p>
      ) : organizations.length > 0 ? (
        organizations.map((organization) => (
          <Organizations
            key={organization.id}
            image={organization.image}
            link={organization.link}
            description={organization.description}
          />
        ))
      ) : (
        <p>No organizations found.</p>
      )}
    </div>
  );
}

export default OrganizationList;
