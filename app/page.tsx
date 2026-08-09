import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden py-20 sm:py-28">
        <div className="grid-texture pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-50" />
        <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">
          <Reveal>
            <p className="eyebrow mb-6">Bonjour, je suis</p>
            <h1 className="display max-w-4xl">
              MAROUA
              <br />
              <span className="text-brand">RABI</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl font-medium leading-relaxed sm:text-2xl">
              Étudiante en Master d’Excellence en Intelligence Artificielle &
              Data Science.
            </p>
            <p className="body-lg mt-5 max-w-[46rem] leading-[1.65]">
              À l’intersection de l’intelligence artificielle, de la donnée et
              de l’ingénierie, j’allie innovation et expertise technique pour
              concevoir des solutions capables de répondre à des enjeux
              concrets et d’aller au-delà du simple prototype.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-brand px-6 py-3 font-bold text-white"
              >
                Découvrir mes projets
              </Link>
              <Link
                href="/parcours"
                className="rounded-full border border-line px-6 py-3 font-bold"
              >
                Mon parcours
              </Link>
              <a
                href="/cv/Maroua_RABI_CV.pdf"
                download
                className="link-arrow px-2"
              >
                <Download size={17} /> CV
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-5 text-sm text-muted">
              <span className="flex items-center gap-2">
                <MapPin size={15} />
                Casablanca, Maroc
              </span>
              <a href={profile.github}>GitHub</a>
              <a href={profile.linkedin}>LinkedIn</a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </Reveal>
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="card relative aspect-[4/5] bg-gradient-to-br from-[#e4eaf4] via-[#f5f3fa] to-[#cfdaf0]">
              <div className="grid-texture absolute inset-0" />
              <div className="absolute inset-[16%] rounded-full border border-brand/20" />
              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-2xl" />
              <p className="absolute bottom-8 left-8 right-8 text-sm leading-relaxed text-[#17365d]">
                Photo professionnelle
                <br />
                <span className="opacity-60">public/images/profile/</span>
              </p>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-line bg-paper/90 px-5 py-4 shadow-soft backdrop-blur">
              <p className="eyebrow">Focus</p>
              <p className="mt-1 font-bold">AI · Data · Cyber</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section border-y border-line">
        <div className="container-page grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <p className="eyebrow">Mon fil conducteur</p>
          <Reveal>
            <h2 className="heading">Entraîner un modèle n’est que le début.</h2>
            <p className="body-lg mt-6">
              À la FSBM — Université Hassan II de Casablanca, mon parcours m’a
              menée du Machine Learning au Deep Learning, puis vers le NLP, la
              Computer Vision, la Data Engineering, le MLOps et la
              cybersécurité. Mon ambition : relier ces disciplines pour livrer
              des solutions complètes, utiles et robustes.
            </p>
            <Link href="/about" className="link-arrow mt-7">
              En savoir plus sur mon parcours <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionTitle
            kicker="Projets sélectionnés"
            title="Des idées mises à l’épreuve du réel."
            text="Six projets qui racontent une évolution : comprendre les modèles, structurer les données, industrialiser puis sécuriser."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <Link href="/projects" className="link-arrow mt-10">
            Voir tous les projets <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="section bg-brand text-white">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow !text-blue-200">Expérience · SANLAM</p>
            <h2 className="heading mt-5">FrameworkAI-Pentest</h2>
            <p className="mt-6 text-lg leading-relaxed text-blue-100">
              Une plateforme d’automatisation du pentest Web qui orchestre
              plusieurs scanners, normalise leurs résultats et explore le
              scoring ML, le Federated Learning et l’Agentic AI.
            </p>
            <p className="mt-5 text-sm text-blue-200">
              Stage professionnel · Juin 2026 — Août 2026 · Casablanca
            </p>
            <Link
              href="/experience"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-brand"
            >
              Découvrir cette expérience <ArrowRight size={17} />
            </Link>
          </Reveal>
          <div className="grid gap-3 self-end">
            {[
              "Orchestration multi-outils",
              "AI Risk Scoring",
              "Federated Learning",
              "AI Reporting",
            ].map((x, i) => (
              <div
                key={x}
                className="flex items-center gap-5 border-t border-white/20 py-4"
              >
                <span className="text-xs text-blue-200">0{i + 1}</span>
                <span className="text-xl font-semibold">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionTitle
            kicker="Parcours"
            title="Une progression, pas une collection de technologies."
          />
          <div className="border-l border-line pl-6 md:ml-8">
            {education.map((e) => (
              <div
                className="relative mb-10 grid gap-2 md:grid-cols-[180px_1fr]"
                key={e.degree}
              >
                <span className="absolute -left-[30px] top-2 h-2 w-2 rounded-full bg-accent" />
                <p className="text-sm text-muted">{e.period}</p>
                <div>
                  <h3 className="text-xl font-bold">{e.degree}</h3>
                  <p className="mt-1 text-muted">{e.school}</p>
                </div>
              </div>
            ))}
            <div className="relative grid gap-2 md:grid-cols-[180px_1fr]">
              <span className="absolute -left-[32px] top-1 h-3 w-3 rounded-full bg-brand" />
              <p className="text-sm text-muted">2027</p>
              <div>
                <p className="eyebrow">Next chapter</p>
                <h3 className="mt-2 text-xl font-bold">France + Alternance</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section border-y border-line">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <SectionTitle
            kicker="Au-delà du code"
            title="La technique prend tout son sens quand elle se partage."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Club Soft Skills", "Secrétaire Générale · 2025—2026"],
              ["Blockchain Pioneers", "Responsable Média · 2024—2026"],
              ["MACC 2026", "1ère place FSBM · Top 21 national"],
              ["Poster FSBM", "2e prix · WMS augmenté par IA"],
            ].map((x) => (
              <div className="card p-5" key={x[0]}>
                <h3 className="font-bold">{x[0]}</h3>
                <p className="mt-2 text-sm text-muted">{x[1]}</p>
              </div>
            ))}
            <Link href="/beyond-tech" className="link-arrow mt-3">
              Découvrir cette dimension <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page rounded-[2rem] bg-[#e9edf5] px-7 py-16 text-center text-[#111827] sm:px-16">
          <p className="eyebrow">Objectif 2027 · France</p>
          <h2 className="heading mx-auto mt-5 max-w-3xl">
            Ce que je construis aujourd’hui prépare ce que je veux faire demain.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#536176]">
            Je suis ouverte aux opportunités d’alternance et aux échanges autour
            de l’IA, du MLOps, de la Data et de la cybersécurité.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 font-bold text-white"
          >
            Construisons la prochaine étape
          </Link>
        </div>
      </section>
    </>
  );
}
