
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text } from '@chakra-ui/react'
import useProduct from '../context/ProductContext';



const ButtonShow = () => {
    const { products, total } = useProduct()

    return (
        <aside>
            <Accordion defaultIndex={[1]} allowMultiple background={"tomato"} w={"max-content"}>
                <AccordionItem >
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                PRODUCTOS TOTAL: {products.length}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Flex justifyContent={"center"}>
                            <Box
                                display={"inline-table"}
                                textColor={"white"}
                                borderWidth='1px' borderRadius='md'
                                background={"#ff9d00"}
                                height={30}
                                alignItems={"center"}
                            >
                                {products?.map((product: any, index: any) => {
                                    return (
                                        <Box key={index}>
                                            <Text>Producto: {product.id} </Text>
                                            <Text>Precio: ${product.price}</Text>
                                        </Box>
                                    )
                                }
                                )}
                            </Box>
                        </Flex>
                        <Box textAlign={"center"}>
                            <Text>Precio Total: ${total}</Text>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </aside >
    );
}

export default ButtonShow;