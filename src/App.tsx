import { ChakraProvider } from "@chakra-ui/react";
import { Header, Section, ButtonShow, Footer } from './components/Index'
import { ProductContextProvider } from "./context/ProductContext";




const App = () => {

  return (
    <ProductContextProvider>
      <ChakraProvider>
        <Header title={"Estampitiency"} />
        <Section />
        <ButtonShow />
        <Footer />
      </ChakraProvider>
    </ProductContextProvider>
  );
}

export default App;
