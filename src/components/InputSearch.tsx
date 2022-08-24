import { Flex, Input } from "@chakra-ui/react";



interface Props {
    search: string;
    handleSearch: any;
}

const InputSearch = ({ search, handleSearch }: Props) => {
    return (

        <Flex placeContent={"center"} mt={"5%"}>

            <Input
                textAlign={"center"}
                bg={"azure"}
                w={"auto"}
                value={search}
                onChange={handleSearch}
                placeholder="Search..."
            />
        </Flex>

    );
};

export default InputSearch;