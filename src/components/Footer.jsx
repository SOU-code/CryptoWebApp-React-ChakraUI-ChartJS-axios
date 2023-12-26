import { Box, Stack, Text, VStack, HStack, Link } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"20"}
      px={16}
      py={[16, 8]}>
      <VStack textAlign={"center"}>
        <Text>
          {/* Corrected copyright statement */}
          Copyright © 2018 - 2023 Crypto.com. All rights reserved.
        </Text>

        {/* Social media links */}
        <HStack spacing={4}>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            textDecoration={"underline"}>
            {/* Replace "#" with the actual link for your social media platform */}
            Facebook
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            textDecoration={"underline"}>
            {/* Replace "#" with the actual link for your social media platform */}
            Twitter
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            textDecoration={"underline"}>
            {/* Replace "#" with the actual link for your social media platform */}
            Instagram
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
