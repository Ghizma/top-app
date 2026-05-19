"use client";
import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import { P } from "../components/P/P";
import { Tag } from "../components/Tag/Tag";
import { useEffect, useState } from "react";
import { Rating } from "../components/Rating/Rating";
import { withLayout } from "../components/LayoutComp/LayoutComp";
import { GetStaticProps } from "next";
import axios from "axios";
import { Category } from "@/interfaces/category.interface";

function Home({ menu, firstCategory }: HomeProps) {
  const [counter, setCounter] = useState<number>(10);

  useEffect(() => {
    console.log("Counter" + counter);
    return function cleanup() {
      console.log("Effect Cleanup");
    };
  });

  useEffect(() => {
    console.log("Mounted");
  }, []);

  const [rating, setRating] = useState(3);

  return (
    <>
      <Htag tag="h1">Hello Next.JS! - {counter}</Htag>
      <Button
        appearance="primary"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        Butonul
      </Button>
      <Button appearance="primary" arrow="right">
        Butonul
      </Button>
      <Button appearance="ghost">Butonul</Button>
      <Button appearance="ghost" arrow="right">
        Butonul
      </Button>
      <Button appearance="ghost" arrow="down">
        Butonul
      </Button>
      <br />
      <br />
      <P size="s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        beatae iusto optio accusantium odio ad deserunt praesentium laudantium
        ipsam atque laborum harum vero quisquam possimus laboriosam, distinctio
        animi veniam cupiditate.
      </P>
      <br />
      <P size="m">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        beatae iusto optio accusantium odio ad deserunt praesentium laudantium
        ipsam atque laborum harum vero quisquam possimus laboriosam, distinctio
        animi veniam cupiditate.
      </P>
      <br />
      <P size="l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        beatae iusto optio accusantium odio ad deserunt praesentium laudantium
        ipsam atque laborum harum vero quisquam possimus laboriosam, distinctio
        animi veniam cupiditate.
      </P>
      <br />
      <Tag size="s">Small</Tag>
      <Tag size="m">Medium</Tag>
      <Tag size="s" color="red">
        Small
      </Tag>
      <Tag size="m" color="red">
        Medium
      </Tag>

      <Tag size="s" color="grey">
        Small
      </Tag>
      <Tag size="m" color="grey">
        Medium
      </Tag>

      <Tag size="s" color="green">
        Small
      </Tag>
      <Tag size="m" color="green">
        Medium
      </Tag>

      <Tag size="s" color="primary">
        Small
      </Tag>
      <Tag size="m" color="primary">
        Medium
      </Tag>

      <Tag size="s" color="primary" href="Lorem">
        Small
      </Tag>
      <Tag size="m" color="primary" href="Lorem">
        Medium
      </Tag>
      <br />
      <Rating rating={rating} setRating={setRating} isEditable />
      <ul>
        {menu.map((el, i) => (
          <li key={el.slug}>{el.name}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.get<Category[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/products/categories",
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps {
  menu: Category[];
  firstCategory: number;
}
