import Image from "next/image";
import icon from "@/assets/next.svg";
import cls from "@/styles/Person.module.scss";

export default function Person() {
  return (
    <div className={cls.person}>
      <Image
        className={cls.image}
        src={icon}
        alt="icon"
        width={3000}
        height={100}
      />

      <div className={cls.text}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi laborum
          tempore reiciendis veritatis qui enim soluta, voluptatum ipsam error
          optio magnam omnis laudantium delectus molestiae asperiores! Inventore
          ipsa voluptas perspiciatis?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Non, nemo ratione enim, repellendus ipsum error quo
          iste adipisci fuga maiores numquam minim
        </p>
      </div>
    </div>
  );
}
