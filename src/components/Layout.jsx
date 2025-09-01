import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Container,
} from "@chakra-ui/react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Links = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Timeline", path: "/timeline" },
  { name: "Statistics", path: "/statistics" },
  { name: "Contact", path: "/contact" },
];

const NavLink = ({ children, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      as={RouterLink}
      to={path}
      px={2}
      py={1}
      rounded={"md"}
      fontWeight={isActive ? "bold" : "medium"}
      color={isActive ? "brand.500" : "inherit"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
        transform: "translateY(-1px)",
      }}
      transition={"all 0.2s"}
    >
      {children}
    </Link>
  );
};

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  // Helper for mobile nav link click
  const handleMobileNavClick = () => {
    onClose();
  };

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.900")} px={4} boxShadow="sm">
        <Container maxW="7xl">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"xs"}
              icon={isOpen ? <X size={28} /> : <Menu size={26} />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box fontWeight="bold" fontSize="xl">
                Aaron Nader
              </Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link.name} path={link.path}>
                    {link.name}
                  </NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Button onClick={toggleColorMode} variant="ghost" size="sm">
                {colorMode === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </Button>
            </Flex>
          </Flex>

          {/* Mobile Menu Overlay */}
          {isOpen && (
            <Box
              position="fixed"
              top={0}
              left={0}
              w="100vw"
              h="100vh"
              bg={useColorModeValue("whiteAlpha.900", "blackAlpha.900")}
              zIndex={20}
              display={{ md: "none" }}
            >
              <Flex
                direction="column"
                align="center"
                justify="center"
                h="100%"
                w="100%"
                position="relative"
              >
                <IconButton
                  icon={<X size={36} />}
                  aria-label="Close Menu"
                  position="absolute"
                  top={6}
                  right={6}
                  size="lg"
                  variant="ghost"
                  onClick={onClose}
                />
                <Stack spacing={8} as="nav">
                  {Links.map((link) => (
                    <NavLink key={link.name} path={link.path}>
                      <Box
                        fontSize="2xl"
                        fontWeight="bold"
                        cursor="pointer"
                        onClick={handleMobileNavClick}
                      >
                        {link.name}
                      </Box>
                    </NavLink>
                  ))}
                </Stack>
              </Flex>
            </Box>
          )}
        </Container>
      </Box>

      <Box minH="calc(100vh - 64px)">{children}</Box>
    </>
  );
};
export default Layout;
