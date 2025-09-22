// frontend/src/components/Skills.tsx
    function Skills() {
    const skills = [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 85 },
        { name: "Django", level: 75 },
        { name: "SQL", level: 80 },
        { name: "Linux", level: 70 },
        { name: "Software Testing", level: 80 },
    ];

    return (
        <section className="p-10 border border-gray-700 rounded-lg bg-gray-700 text-white mt-8">
        <h1 className="text-3xl font-bold mb-6">Skills</h1>
        <div className="space-y-6">
            {skills.map((skill) => (
            <div key={skill.name}>
                <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-3">
                <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: `${skill.level}%` }}
                ></div>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
    }

export default Skills;
