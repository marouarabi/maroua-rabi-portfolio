import { Award } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionTitle } from "@/components/section-title";

export default function Certifications() {
  return (
    <div className="container-page section">
      <SectionTitle kicker="Certifications" title="Apprendre en continu." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification) => (
          <article className="card p-6" key={certification.name}>
            <Award className="text-accent" />
            <p className="eyebrow mt-8">
              {certification.year || "Année à renseigner"}
            </p>
            <h2 className="mt-3 text-xl font-bold">{certification.name}</h2>
            <p className="mt-2 text-sm text-muted">{certification.issuer}</p>
            {certification.description && (
              <p className="mt-3 text-sm text-muted">
                {certification.description}
              </p>
            )}
            {certification.credentialUrl && (
              <a
                className="link-arrow mt-5"
                href={certification.credentialUrl}
              >
                View credential →
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
