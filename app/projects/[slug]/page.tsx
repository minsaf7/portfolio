
import { notFound } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects, type Project } from "@/lib/data";
import { AnimatedContainer } from "@/components/AnimatedContainer";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug);

  // const { slug } = useParams();
  // const [project, setProject] = useState<Project | null>(null);


  // useEffect(() => {
  //   if (typeof slug !== "string") {
  //     notFound();
  //     return;
  //   }

  //   const foundProject = projects.find((p) => p.id === slug);
  //   if (!foundProject) {
  //     notFound();
  //     return;
  //   }

  //   setProject(foundProject);
  //   setLoading(false);
  // }, [slug]);

  

  if (!project) {
    return notFound();
  }

  return (
    <div className="relative min-h-screen">
      <div className="container max-w-4xl mx-auto px-4 py-16 relative z-10">
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        > */}
        <AnimatedContainer>
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-muted-foreground mb-6">{project.period}</p>

            <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
              {project.mediaType === "image" ? (
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <video
                  // width="640" height="360"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source src={project.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {/* <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              /> */}
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {project.fullDescription || project.description}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {project.features && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.architecture && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Architecture</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.architecture.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.services && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.services.map((service, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                          {service.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4 mt-8">
              {/* {project.github && (
                <Button asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Github size={16} className="mr-2" />
                    <span>View on GitHub</span>
                  </a>
                </Button>
              )} */}
              {/* {project.link && (
                <Button variant="outline" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    <span>Visit Website</span>
                  </a>
                </Button>
              )} */}
            </div>
          </div>
          {/* </motion.div> */}
        </AnimatedContainer>
      </div>
    </div>
  );
}
