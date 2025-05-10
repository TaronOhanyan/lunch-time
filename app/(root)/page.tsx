import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductsGroupList,
  Stories,
  SortPopup,
} from "@/shared/components/shared";
import { Suspense } from "react";
import { GetSearchParams, findPizzas } from "@/shared/lib/find-pizzas";
import { FiltersDrawer } from "@/shared/components/shared/filters-drawer";

export default async function Home({
  searchParams,
}: {
  searchParams: GetSearchParams;
}) {
  const categories = await findPizzas(searchParams);

  return (
    <>
      <Container className="flex items-center justify-between pl-4 pt-4 pb-2">
        <Title text="Menu" size="lg" className="font-extrabold" />

        <SortPopup className="md:hidden" />
      </Container>

      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />

      <Stories />

      <Container className="mt-10 pb-4">
        <div className="flex flex-col md:flex-row md:p-4 gap-x-[100px]">
          {/* Filtration */}

          <FiltersDrawer />

          {/* List of products */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
