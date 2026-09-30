export function TechStack() {
    const stack = [
        {
            category: "Frontend",
            technologies: ["React.js", "Next.js", "Vue.js"],
        },
        {
            category: "Backend",
            technologies: ["Node.js", "Python", "Java"],
        },
        {
            category: "AI & Automation",
            technologies: ["Machine Learning", "Intelligent Workflows", "Data-driven Automation"],
        },
        {
            category: "Cloud",
            technologies: ["AWS", "Microsoft Azure", "Google Cloud"],
        },
        {
            category: "DevOps",
            technologies: ["Kubernetes", "CI/CD", "Docker"],
        },
        {
            category: "Databases",
            technologies: ["PostgreSQL", "Firebase", "MongoDB", "MSSQL", "MySQL"],
        },
    ];

    return (
        <section className="w-full bg-white py-[60px] md:py-[60px]">
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate max-w-3xl leading-tight mb-6">
                    The technology depends on the problem.
                </h2>
                <p className="text-xl text-slate/70 leading-relaxed max-w-2xl">
                    We work across modern application, AI, cloud, DevOps, and data
                    technologies. Technology choices should follow the business and product
                    context, not lead it.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
                    {stack.map((item) => (
                        <div key={item.category} className="group">
                            <h3 className="font-display font-semibold text-lg text-svaan-blue mb-6 pb-4 border-b border-canvas">
                                {item.category}
                            </h3>
                            <ul className="space-y-4">
                                {item.technologies.map((tech) => (
                                    <li key={tech} className="text-slate/80 font-medium text-lg hover:text-slate transition-colors">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
