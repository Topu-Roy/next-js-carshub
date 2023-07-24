import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || "",
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || "",
    model: searchParams.model || "",
  });

  const isDataEmpty =
    !Array.isArray(allCars) ||
    allCars.length === 0 ||
    !allCars ||
    allCars == null ||
    allCars == undefined;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div
        className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto"
        id="discover"
      >
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="flex mt-12 w-full justify-between items-center flex-wrap gap-5">
          <SearchBar />
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <p>we don't have cars</p>
        )}
      </div>
    </main>
  );
}
