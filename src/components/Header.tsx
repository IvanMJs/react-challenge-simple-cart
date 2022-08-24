/* eslint-disable prettier/prettier */
import { Heading } from "@chakra-ui/react";
import { HeaderProps } from "../PropTypes/HeaderProps";

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <Heading
    textAlign={"center"}
  >{title}</Heading>;
};

export default Header;
