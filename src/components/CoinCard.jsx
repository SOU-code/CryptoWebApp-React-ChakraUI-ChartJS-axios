import React from "react";
import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, image, price, symbol, currencySymbol }) => {
  return (
    <Link to={`/${id}`}>
      <VStack
        w={52}
        shadow={"lg"}
        p={8}
        borderRadius={"lg"}
        m={4}
        transition={"all 0.4s"}
        css={{ "&:hover": { transform: "scale(1.1)" } }}>
        <Image src={image} w={"10"} h={"10"} objectFit={"contain"} />
        <Heading size={"md"} noOfLines={1}>
          {symbol}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
      </VStack>
    </Link>
  );
};

export default CoinCard;
