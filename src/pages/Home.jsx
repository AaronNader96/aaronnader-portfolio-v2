import React from "react";
import {
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Box,
  Badge,
  Grid,
  GridItem,
  useColorModeValue,
  Link,
  IconButton,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Download, Linkedin, Github } from "lucide-react";
import { personalInfo, techStack } from "../data.js";

const Home = () => {
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Container maxW="7xl" py={20}>
      <VStack spacing={16} align="stretch">
        <Box textAlign="center">
          <VStack spacing={6}>
            <Heading
              size="2xl"
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
            >
              {personalInfo.name}
            </Heading>
            <Heading size="md" color="gray.500">
              {personalInfo.title}
            </Heading>
            <HStack spacing={4} justify="center">
              <IconButton
                as={Link}
                href={personalInfo.links.resume}
                target="_blank"
                icon={<Download size={20} />}
                aria-label="Download Resume"
                variant="outline"
                size="lg"
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.2s"
              />
              <IconButton
                as={Link}
                href={personalInfo.links.linkedin}
                target="_blank"
                icon={<Linkedin size={20} />}
                aria-label="LinkedIn Profile"
                variant="outline"
                size="lg"
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.2s"
              />
              <IconButton
                as={Link}
                href={personalInfo.links.github}
                target="_blank"
                icon={<Github size={20} />}
                aria-label="GitHub Profile"
                variant="outline"
                size="lg"
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.2s"
              />
            </HStack>
            <Text mt={4} fontSize="md" color="gray.500">
              You can view portfolio source code{" "}
              <Link
                href={personalInfo.links.sourceCode}
                color="brand.500"
                fontWeight="bold"
                isExternal
              >
                here
              </Link>
              .
            </Text>
          </VStack>
        </Box>

        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={16}>
          <GridItem>
            <VStack spacing={8} align="stretch">
              <Box>
                <Heading size="lg" mb={6}>
                  About Me
                </Heading>
                <Text
                  fontSize="lg"
                  lineHeight="tall"
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  {personalInfo.intro}
                </Text>
              </Box>
            </VStack>
          </GridItem>

          <GridItem>
            <Box
              bg={cardBg}
              p={8}
              rounded="xl"
              boxShadow="lg"
              _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
              transition="all 0.3s"
            >
              <Heading size="md" mb={6}>
                Tech Stack
              </Heading>
              <Wrap spacing={3}>
                {techStack.map((tech, index) => (
                  <WrapItem key={index}>
                    <Badge
                      px={3}
                      py={2}
                      rounded="full"
                      fontSize="sm"
                      colorScheme="brand"
                      variant={useColorModeValue("subtle", "solid")}
                      _hover={{ transform: "scale(1.05)" }}
                      transition="all 0.2s"
                    >
                      {tech}
                    </Badge>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Home;
