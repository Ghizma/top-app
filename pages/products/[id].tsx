import { withLayout } from "../../components/LayoutComp/LayoutComp";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { Category } from "@/interfaces/category.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductsResponse } from "@/interfaces/page.interface";
import { Product } from "@/interfaces/product.interfaces";
import { useRouter } from "next/router";

// Props pentru pagina produsului
interface ProductPageProps {
  category: Category[];
  product: Product;
}

// Componenta paginii
function ProductPage({ category, product }: ProductPageProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {/* Categorii */}
      {/* <ul>
        {category.map((el) => (
          <li key={el.slug}>{el.name}</li>
        ))}
      </ul> */}

      {/* Produs singular */}
      <div>
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <p>Price: {product.price}$</p>

        <p>Rating: {product.rating}</p>

        <img src={product.thumbnail} alt={product.title} width={300} />
      </div>
    </>
  );
}

export default withLayout(ProductPage);

// Generăm toate path-urile statice:
// /products/1
// /products/2
// /products/3
export const getStaticPaths: GetStaticPaths = async () => {
  // Luăm toate produsele
  const { data } = await axios.get<ProductsResponse>(
    process.env.NEXT_PUBLIC_DOMAIN + "/products",
  );

  return {
    // Transformăm produsele în paths
    paths: data.products.map((p) => ({
      params: {
        id: p.id.toString(),
      },
    })),

    // Permite generarea paginilor care nu există încă
    fallback: true,
  };
};

// Datele pentru o pagină singulară
export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  // Dacă nu există params => 404
  if (!params?.id) {
    return {
      notFound: true,
    };
  }

  // Categorii
  const { data: category } = await axios.get<Category[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/products/categories",
  );

  // Produs singular
  const { data: product } = await axios.get<Product>(
    process.env.NEXT_PUBLIC_DOMAIN + "/products/" + params.id,
  );

  return {
    props: {
      category,
      product,
    },
  };
};
