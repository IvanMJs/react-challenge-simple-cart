import { Button } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import useProduct from "../context/ProductContext";
import InputSearch from "./InputSearch";




const Section = () => {
  const { products, addProduct, removeProduct, productsAll } = useProduct()
  const [search, setSearch] = useState("");


  const filteredProduct = useMemo(
    () =>
      productsAll.filter((prod: any) => {
        const product = prod.title.toLowerCase().includes(search.toLowerCase());
        return product;
      }),
    [productsAll, search]
  );

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <InputSearch search={search} handleSearch={handleSearch} />
      <section>
        {filteredProduct?.map((product: any) => (
          <article key={product?.id}>
            <img src={product?.image} />
            <div>
              <p>{product?.title}</p>
              <p>{product?.description}</p>
            </div>
            <div>
              <Button backgroundColor={"#3e8dff"} disabled={products.includes(product)} onClick={() => addProduct(product)}>Agregar</Button>
              <Button backgroundColor={"#3e8dff"} onClick={() => removeProduct(product)}>Remover</Button>
            </div>
          </article>
        ))
        }
      </section >
    </>
  );
};

export default Section;
