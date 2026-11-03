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
import { personalInfo, skills } from "../data.js";

const Home = () => {
  const cardBg = useColorModeValue("white", "gray.700");
  const badgeVariant = useColorModeValue("subtle", "solid");

  return (
    <Container maxW="container.xl" px={{ base: 4, md: 8 }} py={20}>
      <VStack spacing={16} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <VStack spacing={6}>
            <Heading
              size={{ base: "xl", md: "2xl" }}
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
            >
              {personalInfo.name}
            </Heading>
            <Heading size="md" color="gray.500">
              {personalInfo.title}
            </Heading>
            <Text color="gray.500" fontSize="sm">
              {personalInfo.location} ·{" "}
              <Link href={`mailto:${personalInfo.email}`} color="brand.500">
                {personalInfo.email}
              </Link>
            </Text>

            {/* Social buttons */}
            <HStack spacing={4} justify="center" flexWrap="wrap">
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

            <Text mt={4} fontSize="md" color="gray.500" px={{ base: 2, md: 0 }}>
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

        {/* Grid */}
        <Grid
          templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
          gap={{ base: 8, lg: 16 }}
        >
          {/* About */}
          <GridItem>
            <VStack spacing={8} align="stretch">
              <Box>
                <Heading size="lg" mb={6}>
                  About Me
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight="tall"
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  {personalInfo.intro}
                </Text>
              </Box>
            </VStack>
          </GridItem>

          {/* Tech Stack */}
          <GridItem>
            <Box
              bg={cardBg}
              p={{ base: 6, md: 8 }}
              rounded="xl"
              boxShadow="lg"
              _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
              transition="all 0.3s"
            >
              <Heading size="md" mb={6}>
                Skills
              </Heading>
              <VStack spacing={5} align="stretch">
                {skills.map((group) => (
                  <Box key={group.category}>
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      textTransform="uppercase"
                      letterSpacing="wide"
                      color="gray.500"
                      mb={2}
                    >
                      {group.category}
                    </Text>
                    <Wrap spacing={2}>
                      {group.items.map((tech) => (
                        <WrapItem key={tech} maxW="100%">
                          <Badge
                            px={3}
                            py={1}
                            rounded="full"
                            fontSize="xs"
                            colorScheme="brand"
                            whiteSpace="normal"
                            textAlign="center"
                            variant={badgeVariant}
                            _hover={{ transform: "scale(1.05)" }}
                            transition="all 0.2s"
                          >
                            {tech}
                          </Badge>
                        </WrapItem>
                      ))}
                    </Wrap>
                  </Box>
                ))}
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Home;
