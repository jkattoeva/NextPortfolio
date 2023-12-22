import Person from "@/components/UI/Person";
import cls from "@/styles/Home.module.scss";
export default function Home() {
  return (
    <>
      <div className={cls.home_page}>
        <Person />
      </div>
    </>
  );
}
