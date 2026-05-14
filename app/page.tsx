"use client";
import Image from "next/image";
import { Htag } from "./components/Htag/Htag";
import { Button } from "./components/Button/Button";
import { P } from "./components/P/P";
import { Tag } from "./components/Tag/Tag";
import { useState } from "react";

export default function Home() {
  const [Counter, setCounter] = useState<number>(10);

  return (
    <>
      <Htag tag="h1">Hello Next.JS! - {Counter}</Htag>
      <Button
        appearance="primary"
        onClick={() => setCounter((Counter) => Counter + 1)}
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
    </>
  );
}
