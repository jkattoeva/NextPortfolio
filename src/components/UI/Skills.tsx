import cls from "@/styles/Skills.module.scss";

type skills = {
  name: string;
}[];

export default function Skills() {
  const skills: skills = [
    { name: "JavaScript" },
    { name: "Css" },
    { name: "Css" },
    { name: "Css" },
    { name: "Next Js" },
    { name: "Next Js" },
    { name: "Next Js" },
    { name: "Next Js" },
    { name: "Next Js" },
    { name: "Css" },
    { name: "Css" },
    { name: "Css" },
    { name: "Css" },
    { name: "Next Js" },
    { name: "Next Js" },
    { name: "Next Js" },
    { name: "Next Js" },
    { name: "Next Js" },
    { name: "Next Js" },
    { name: "Next Js" },
  ];
  return (
    <>
      <div className={cls.skills_page}>
        <h1>My Skills</h1>
        <div className={cls.skills}>
          {skills.map((skills, idx) => (
            <span key={idx}>{skills.name}</span>
          ))}
        </div>
      </div>
    </>
  );
}
