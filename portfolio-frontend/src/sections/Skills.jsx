import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LabelList,
} from "recharts";

import { skills } from "../data/skills";
import {
  toolsData,
  languagesData,
  projectDistribution,
} from "../data/analytics";

import SkillBar from "../components/ui/SkillBar";

const COLORS = ["#14b8a6", "#3b82f6", "#8b5cf6", "#ec4899"];

const ChartCard = ({ title, children, description }) => (
  <div className="w-full max-w-5xl mb-16">
    <h3 className="text-xl mb-4 text-white">{title}</h3>

    {/* Gradient border */}
    <div className="p-[1px] rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500">
      <div className="bg-[#020617]/90 backdrop-blur-xl p-6 rounded-2xl">
        {children}
      </div>
    </div>

    <p className="text-gray-400 mt-4 text-sm">{description}</p>
  </div>
);

const Skills = () => {
  return (
    <section className="px-6 py-20 min-h-screen flex flex-col items-center">
      
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-teal-400 mb-16">
        Skills & Analytics
      </h2>

      {/* 🔥 TOOLS */}
      <ChartCard
        title="Most Used Tools"
        description="React and Node.js dominate my workflow, showing strong full-stack development focus."
      >
        <div className="h-[300px]">
          <ResponsiveContainer>
            <BarChart data={toolsData} barSize={40}>
              
              <defs>
                {COLORS.map((color, i) => (
                  <linearGradient
                    key={i}
                    id={`grad${i}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor={color} />
                    <stop offset="100%" stopColor="#020617" />
                  </linearGradient>
                ))}
              </defs>

              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1e293b",
                  borderRadius: "10px",
                }}
              />

              <Bar dataKey="usage" radius={[12, 12, 0, 0]}>
                {toolsData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
                <LabelList dataKey="usage" position="top" fill="#ccc" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

<div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 mb-16 items-stretch">
      <ChartCard
        title="Programming Languages"
        description="JavaScript is my strongest language, supported by C# for backend and SQL for databases."
      >
        <div className="h-[300px] w-full">
          <ResponsiveContainer>
            <BarChart data={languagesData} barSize={40}>
              
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1e293b",
                  borderRadius: "10px",
                }}
              />

              <Bar dataKey="usage" radius={[12, 12, 0, 0]}>
                {languagesData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
                <LabelList dataKey="usage" position="top" fill="#ccc" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      {/* 🔥 PIE */}
      <ChartCard
        title="Project Distribution"
        description="My work is balanced between frontend and full-stack development, with some backend focus."
      >
        <div className="h-[300px] flex justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={projectDistribution}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {projectDistribution.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
</div>


      {/* 🔥 SKILL BARS */}
      <div className="w-full max-w-2xl">
        <h3 className="text-xl mb-4">Skill Proficiency</h3>

        {skills.map((skill, index) => (
          <SkillBar key={index} {...skill} />
        ))}

        <p className="text-gray-400 mt-4 text-sm">
          These bars represent my confidence and hands-on experience with each technology.
        </p>
      </div>
    </section>
  );
};

export default Skills;