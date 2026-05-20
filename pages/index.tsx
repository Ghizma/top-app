import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import { useEffect, useState } from "react";
import { withLayout } from "../components/LayoutComp/LayoutComp";
import { GetStaticProps } from "next";
import axios from "axios";
import { Category } from "@/interfaces/category.interface";
import { ProductPage } from "./products";

function Home({ category }: HomeProps) {
  const [counter, setCounter] = useState<number>(1);

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
      <Htag tag="h1">Main Page Next.JS! - Counter - {counter}</Htag>
      <br />

      <Button
        appearance="primary"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        Butonul
      </Button>
      <br />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const { data: category } = await axios.get<Category[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/products/categories",
  );
  return {
    props: {
      category,
    },
  };
};

interface HomeProps {
  category: Category[];
}
