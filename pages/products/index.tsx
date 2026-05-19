import { withLayout } from "../../components/LayoutComp/LayoutComp";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { Category } from "@/interfaces/category.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductsResponse } from "@/interfaces/page.interface";
import { Product } from "@/interfaces/product.interfaces";
import styles from "./index.module.css";

// Props pentru pagina produsului
interface ProductPageProps {
  category: Category[];
  page: ProductsResponse;
}

// Componenta paginii
function ProductPage({ page }: ProductPageProps) {
  return (
    <>
      <h1>Products</h1>
      <ul className={styles.products}>
        {page.products.map((product) => (
          <li key={product.id} className={styles.card}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className={styles.image}
            />

            <div className={styles.content}>
              <h2>{product.title}</h2>

              <p>{product.description}</p>

              <div className={styles.meta}>
                <span>Category: {product.category}</span>

                <span>Brand: {product.brand}</span>
              </div>

              <div className={styles.info}>
                <span>⭐ {product.rating}</span>

                <span>Stock: {product.stock}</span>
              </div>

              <div className={styles.footer}>
                <strong>${product.price}</strong>

                <button>View Product</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: category } = await axios.get<Category[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/products/categories",
  );

  const { data: page } = await axios.get<ProductsResponse>(
    process.env.NEXT_PUBLIC_DOMAIN + "/products/",
  );

  return {
    props: {
      category,
      page,
    },
  };
};

export default withLayout(ProductPage);
