import Link from 'next/link';
import Image from 'next/image';
import projects, { Project } from '@/data/works';
import { NextSeo } from 'next-seo';

const WorksPage = () => {
    return (
        <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
            <NextSeo
                title="Works | Gauresh G Pai"
                description="Browse the portfolio of Gauresh G Pai, featuring web development projects built using React, Next.js, and Tailwind CSS. See real-world applications of modern frontend technologies."
                openGraph={{
                    title: "Works by Gauresh G Pai",
                    description:
                        "A curated portfolio showcasing the work of Gauresh G Pai—featuring interactive web apps and frontend solutions using React, Next.js, and Tailwind CSS.",
                    url: "https://gauresh.is-a.dev/works",
                    siteName: "Gauresh G Pai",
                    type: "website",
                    images: [
                        {
                            url: "https://gauresh.is-a.dev/logo.png",
                            width: 1200,
                            height: 630,
                            alt: "Works by Gauresh G Pai - Portfolio Preview",
                            type: "image/png",
                        },
                    ],
                }}
                twitter={{
                    handle: "@hseruag",
                    site: "@hseruag",
                    cardType: "summary_large_image",
                }}
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "Gauresh G Pai portfolio, Gauresh G Pai works, web development projects, React portfolio, frontend developer, Next.js, Tailwind CSS, JavaScript, personal website, developer showcase",
                    },
                    {
                        name: "author",
                        content: "Gauresh G Pai",
                    },
                    {
                        name: "robots",
                        content: "index, follow",
                    },
                    {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1",
                    },
                ]}
            />
            <div className='mx-auto max-w-7xl'>
                <h1 className="text-2xl font-semibold text-foreground md:text-4xl">Professional Work</h1>
                <div className="my-2">
                    <span className="text-sm text-muted-foreground">
                        These projects were developed as part of professional engagements with different companies.
                    </span>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-2">
                    {projects.map((project: Project, index: number) => (
                        <div key={`project-${index}-${project.title}`} className="relative dark:text-white overflow-hidden border rounded-xl p-6 shadow-sm dark:bg-zinc-800 transition-all duration-300 bg-white">
                            <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src={project.screenshot}
                                    alt={`${project.title} screenshot`}
                                    className="rounded-lg aspect-video object-cover transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    priority={index < 4}
                                />
                            </div>
                            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                            <p className="mb-3 test-justify">{project.description}</p>
                            <div className="text-xs mb-2 flex items-center gap-1">
                                <span className="font-medium">Tags:</span>
                                <span>{project.tags.length > 0 ? project.tags.join(', ') : 'None'}</span>
                            </div>
                            <div className="text-xs mb-2 flex items-center gap-1">
                                <span className="font-medium">Owner:</span>
                                <span className="capitalize">{project.owner}</span>

                            </div>
                            <div className="text-xs mb-2 flex items-center gap-1">
                                {project.collaborators.length > 0 && (
                                    <>
                                        <span className="font-medium">Collaborators:</span>
                                        <span className="capitalize">{project.collaborators.join(', ')}</span>
                                    </>
                                )}
                            </div>
                            <div className="text-xs mb-2 flex items-center gap-1">
                                <span className="font-medium">Company:</span>
                                <span>{project.company || 'None'}</span>
                            </div>
                            <div className="text-xs mb-4 flex items-center gap-1">
                                <span className="font-medium">Role:</span>
                                <span>{project.role || 'Developer'}</span>
                            </div>
                            <div className="flex justify-end">
                                {project.liveUrl && (
                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95"
                                    >
                                        <svg
                                            className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                        Live Demo
                                        <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorksPage;