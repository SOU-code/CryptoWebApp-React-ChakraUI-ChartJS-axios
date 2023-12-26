import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import imgCrypto from "../assets/cryptocurrency.png";
const Home = () => {
  return (
    <Box w={"full"} h={"85vh"} backgroundColor={"black"}>
      <Image
        w={"full"}
        h={"full"}
        objectFit={"contain"}
        src={imgCrypto}
      />
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={-40}>
        souCrypto
      </Text>
    </Box>
  );
};

export default Home;
