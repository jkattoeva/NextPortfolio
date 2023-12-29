import Image from "next/image";
import icon from "@/assets/me.jpg";
import cls from "@/styles/Person.module.scss";

export default function Person() {
  return (
    <div className={cls.person}>
      <div className={cls.desc}>
        <h1 className={cls.title}>
          Hello , Im <span className={cls.name}>Janet Saral</span>
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi laborum
          tempore reiciendis veritatis qui enim soluta, voluptatum ipsam error
          optio magnam omnis laudantium delectus molestiae asperiores! Inventore
          ipsa voluptas perspiciatis?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Non, nemo ratione enim, repellendus ipsum error quo
          iste adipisci fuga maiores numquam minim
        </p>
      </div>
      <Image
        className={cls.image}
        src={icon}
        alt="icon"
        width={800}
        height={600}
      />
    </div>
  );
}
