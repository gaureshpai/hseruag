import Link from 'next/link';
import Image from 'next/image';
import projects, { Project } from '@/data/works';

const WorksPage = () => {
    return (
        <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
            <h1 className="text-2xl font-semibold text-foreground md:text-4xl">Professional Work</h1>
            <div className="my-2">
                <span className="text-sm text-muted-foreground">
                    These projects were developed as part of professional engagements with different companies.
                </span>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
                {projects.map((project: Project, index: number) => (
                    <div key={`project-${index}-${project.title}`} className="group relative overflow-hidden border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:scale-[1.02]">
                        <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
                            <Image
                                width={1920}
                                height={1080}
                                src={project.screenshot}
                                alt={`${project.title} screenshot`}
                                className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                priority={index < 4}
                            />
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h2>
                        <p className="text-gray-600 mb-3 test-justify">{project.description}</p>
                        <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                            <span className="font-medium">Tags:</span>
                            <span>{project.tags.length > 0 ? project.tags.join(', ') : 'None'}</span>
                        </div>
                        <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                            <span className="font-medium">Owner:</span>
                            <span className="capitalize">{project.owner}</span>

                        </div>
                        <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                            {project.collaborators.length > 0 && (
                                <>
                                    <span className="font-medium">Collaborators:</span>
                                    <span className="capitalize">{project.collaborators.join(', ')}</span>
                                </>
                            )}
                        </div>
                        <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                            <span className="font-medium">Company:</span>
                            <span>{project.company || 'None'}</span>
                        </div>
                        <div className="text-xs text-gray-500 mb-4 flex items-center gap-1">
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
        </section>
    );
};

export default WorksPage;