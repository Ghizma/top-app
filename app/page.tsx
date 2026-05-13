import Image from "next/image";
import { Htag } from "./components/Htag/Htag";
import { Button } from "./components/Button/Button";
import { P } from "./components/P/P";

export default function Home() {
  return (
    <>
      <Htag tag="h3">Hello Next.JS!</Htag>
      <Button appearance="primary">Butonul</Button>
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
    </>
  );
}
