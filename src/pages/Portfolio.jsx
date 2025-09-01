import React from "react";
import {
  Container,
  VStack,
  Heading,
  Grid,
  GridItem,
  Box,
  Image,
  Text,
  Badge,
  HStack,
  Link,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data.js";

const Portfolio = () => {
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Container maxW="7xl" py={20}>
      <VStack spacing={12} align="stretch">
        <Box textAlign="center">
          <Heading size="xl" mb={4}>
            My Portfolio
          </Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.300")}>
            A showcase of my recent projects and technical achievements
          </Text>
        </Box>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={8}
        >
          {projects.map((project) => (
            <GridItem key={project.id}>
              <Box
                bg={cardBg}
                rounded="xl"
                overflow="hidden"
                boxShadow="lg"
                _hover={{ transform: "translateY(-8px)", boxShadow: "xl" }}
                transition="all 0.3s"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  h="200px"
                  w="100%"
                  objectFit="cover"
                />
                <Box p={6}>
                  <VStack spacing={4} align="stretch">
                    <Heading size="md">{project.title}</Heading>
                    <Text color={useColorModeValue("gray.600", "gray.300")}>
                      {project.description}
                    </Text>
                    <Box>
                      <Text fontSize="sm" fontWeight="semibold" mb={2}>
                        Technologies:
                      </Text>
                      <HStack wrap="wrap" spacing={2}>
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            colorScheme="brand"
                            variant="subtle"
                            fontSize="xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>
                    <HStack spacing={3} pt={2}>
                      <IconButton
                        as={Link}
                        href={project.github}
                        target="_blank"
                        icon={<Github size={18} />}
                        aria-label="View source code"
                        variant="outline"
                        size="sm"
                      />
                      <IconButton
                        as={Link}
                        href={project.demo}
                        target="_blank"
                        icon={<ExternalLink size={18} />}
                        aria-label="View live demo"
                        variant="outline"
                        size="sm"
                      />
                    </HStack>
                  </VStack>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Portfolio;
