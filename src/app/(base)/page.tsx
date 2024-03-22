import Person from "@/components/UI/Person";
import Skills from "@/components/UI/Skills";
import Projects from "@/components/UI/Projects";
import cls from "@/styles/Home.module.scss";
import Intro from "./intro/page";
export default function Home() {
  return (
    <>
      <div className={cls.home_page}>
        <Intro />
        <Person />
        <Skills />
      </div>
    </>
  );
}
