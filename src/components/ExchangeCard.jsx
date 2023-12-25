import React from "react";
import { VStack, Image, Heading, Text } from "@chakra-ui/react";

const ExchangeCard = ({ name, image, url, rank }) => {
  return (
    <a href={url} target={"blank"}>
      <VStack
        w={52}
        backgroundColor={"blackAlpha.100"}
        shadow={"lg"}
        p={8}
        borderRadius={"lg"}
        m={4}
        transition={"all 0.4s"}
        css={{ "&:hover": { transform: "scale(1.1)" } }}>
        <Image src={image} w={"10"} h={"10"} objectFit={"contain"} />
        <Heading size={"md"} noOfLines={1}>
          {rank}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  );
};

export default ExchangeCard;
