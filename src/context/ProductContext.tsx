
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import api from "../api";
import { Product } from "../types";
import productReducer, { initialState } from "../state/productReducer";




const ProductContext = createContext(initialState);

export function ProductContextProvider({ children }: any) {



  const [productsAll, setProductsAll] = useState<Product[]>([]);
  useEffect(() => {
    api.list().then(setProductsAll);
  }, []);

  const [state, dispatch] = useReducer(productReducer, initialState)

  const addProduct = (product: any) => {
    const updateProduct = state?.products?.concat(product)
    updatePrice(updateProduct)
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        product: updateProduct
      }
    })
  }

  const removeProduct = (product: any) => {
    const updateProduct = state?.products?.filter((currentProduct: any) => currentProduct.id !== product.id)
    updatePrice(updateProduct)
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: {
        product: updateProduct
      }
    })
  }

  const updatePrice = (products: any) => {
    let total = 0
    products?.forEach((product: { price: number; }) => total += product.price)
    dispatch({
      type: "UPDATE_PRODUCT",
      payload: {
        total
      }
    })
  }
  const value = {
    total: state.total,
    products: state.products,
    productsAll,
    addProduct,
    removeProduct
  }


  return <ProductContext.Provider value={value}>
    {children}
  </ProductContext.Provider>


}



const useProduct: any = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProduct must be used within ProductContext")
  }

  return context;
};

export default useProduct;