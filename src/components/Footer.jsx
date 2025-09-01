import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      as="footer"
      w="100%"
      py={4}
      px={4}
      mt={12}
      bg={useColorModeValue("brand.50", "brand.900")}
      color={useColorModeValue("brand.700", "brand.200")}
      textAlign="center"
      borderTop="1px"
      borderColor={useColorModeValue("brand.200", "brand.700")}
      fontSize="sm"
      fontWeight="medium"
      letterSpacing="normal"
    >
      © {year} Aaron Nader. All rights reserved. Redesigned with Chakra UI
    </Box>
  );
};
export default Footer;
