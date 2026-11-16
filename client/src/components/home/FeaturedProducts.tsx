import { useApi } from "../../hooks/useApi";
import type { ProductsResponse } from "../../types/api";
import ProductCard from "../product/ProductCard";
import SectionHeader from "../common/SectionHeader";

const FeaturedProducts = () => {
  const { data, error, loading, reload } = useApi<ProductsResponse>(
    "/products?tag=featured&sort=featured&limit=4",
  );
  const products = data?.products ?? [];

  return (
    <section aria-labelledby="featured-products-title">
      <SectionHeader
        eyebrow="Handpicked for you"
        title="Featured products"
        titleId="featured-products-title"
      />

      {error ? (
        <div
          role="alert"
          className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-danger-light p-4 text-sm text-danger"
        >
          <p>{error}</p>
          <button
            type="button"
            onClick={reload}
            className="font-semibold underline"
          >
            Try again
          </button>
        </div>
      ) : (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }, (_, index) => (
                <li
                  key={index}
                  aria-hidden="true"
                  className="aspect-3/5 animate-pulse rounded-3xl bg-surface shadow-card"
                />
              ))
            : products.map((product) => (
                <li key={product._id}>
                  <ProductCard product={product} />
                </li>
              ))}
        </ul>
      )}
    </section>
  );
};

export default FeaturedProducts;
