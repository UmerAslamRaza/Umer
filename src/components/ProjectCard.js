import Image from 'next/image';
import Link from 'next/link';
import {withBasePath} from "@/utils/basePath";
import {router} from "next/client";

export default function ProjectCard({project, height}) {
    const handleClick = (e) => {
        if (e.ctrlKey || e.metaKey || e.button === 1) {
            // Prevent open in new tab via Ctrl+Click / Middle Click
            e.preventDefault();
            return;
        }
        router.push(`/portfolio/${project.id}`);
    };
    return (
        <div className="col-xl-6" key={project.id} onClick={handleClick}>
            <div>
                <div className="project-card">
                    <Link
                        className="thumb d-block"
                        href={`/portfolio/${project.id}`}
                        style={{
                            height,
                            display: 'block',
                            color: 'transparent',
                            width: '100%',
                            objectFit: 'cover',
                        }}
                        >
                        <div className="post-thumb">
                            <div className="post-thumb-inner">
                                <Image
                                    alt={project.title}
                                    loading="lazy"
                                    width={620}
                                    height={357}
                                    decoding="async"
                                    className="w-100 p-2"
                                    style={{color: 'transparent'}}
                                    src={withBasePath(project.thumbnail)}
                                />
                            </div>
                        </div>
                        {/* If this second image is a duplicate, remove one */}
                        <div className="post-thumb">
                            <div className="post-thumb-inner">
                                <Image
                                    alt={project.title}
                                    loading="lazy"
                                    width={620}
                                    height={357}
                                    decoding="async"
                                    className="w-100 p-2"
                                    style={{color: 'transparent'}}
                                    src={withBasePath(project.thumbnail)}
                                />
                            </div>
                        </div>
                    </Link>

                    <div className="d-flex justify-content-between gap-2 align-items-center pt-4 pt-md-8 px-3 px-md-6">
                        <div>
                            <div className="d-flex flex-wrap gap-1 gap-sm-2 align-items-center">
                                {project.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <Link
                                className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                                href={`/portfolio/${project.id}`}>
                                {project.title}
                            </Link>
                        </div>
                        <Link
                            className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                            href={`/portfolio/${project.id}`}>
                            <i className="n5-color">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 256 256"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"/>
                                </svg>
                            </i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
