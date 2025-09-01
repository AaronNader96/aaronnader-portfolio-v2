import React, { useState, useEffect } from "react";
import {
  Container,
  VStack,
  Heading,
  Grid,
  GridItem,
  Box,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
} from "@chakra-ui/react";
import { personalInfo, techStack, projects } from "../data.js";

const Statistics = () => {
  const [age, setAge] = useState(0);
  const [websiteAge, setWebsiteAge] = useState({ days: 0, seconds: 0 });
  const cardBg = useColorModeValue("white", "gray.700");

  // Static value (need to covnert to github API later.)
  const linesOfCode = 2847;

  useEffect(() => {
    const updateCounters = () => {
      const now = new Date();
      const birthday = new Date(personalInfo.birthday);
      const websiteCreated = new Date(personalInfo.websiteCreated);

      // Calculate age in milliseconds and convert to years with precision
      const ageInMs = now - birthday;
      const preciseAge = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
      setAge(preciseAge);

      // Calculate website age
      const websiteAgeInMs = now - websiteCreated;
      const days = Math.floor(websiteAgeInMs / (1000 * 60 * 60 * 24));
      const remainingMs = websiteAgeInMs % (1000 * 60 * 60 * 24);
      const seconds = Math.floor(remainingMs / 1000);

      setWebsiteAge({ days, seconds });
    };

    updateCounters();
    const interval = setInterval(updateCounters, 100);

    return () => clearInterval(interval);
  }, []);

  const formatAge = (ageValue) => {
    return ageValue.toFixed(9);
  };

  return (
    <Container maxW="6xl" py={20}>
      <VStack spacing={12} align="stretch">
        <Box textAlign="center">
          <Heading size="xl" mb={4}>
            Live Statistics
          </Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.300")}>
            Real-time metrics and personal data
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
          <GridItem>
            <Box
              bg={cardBg}
              p={8}
              rounded="xl"
              boxShadow="lg"
              _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
              transition="all 0.3s"
            >
              <Stat>
                <StatLabel fontSize="md" fontWeight="semibold">
                  Current Age
                </StatLabel>
                <StatNumber fontSize="2xl" color="brand.500" fontFamily="mono">
                  {formatAge(age)}
                </StatNumber>
                <StatHelpText>years old (live counter)</StatHelpText>
              </Stat>
            </Box>
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
              <Stat>
                <StatLabel fontSize="md" fontWeight="semibold">
                  Website Age
                </StatLabel>
                <StatNumber fontSize="xl" color="brand.500">
                  {websiteAge.days} days
                </StatNumber>
                <StatHelpText fontFamily="mono" fontSize="sm">
                  +{websiteAge.seconds.toLocaleString()} seconds
                </StatHelpText>
              </Stat>
            </Box>
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
              <Stat>
                <StatLabel fontSize="md" fontWeight="semibold">
                  Lines of Code
                </StatLabel>
                <StatNumber fontSize="2xl" color="brand.500" fontFamily="mono">
                  {linesOfCode.toLocaleString()}
                </StatNumber>
                <StatHelpText>in this portfolio</StatHelpText>
              </Stat>
            </Box>
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
              <Stat>
                <StatLabel fontSize="md" fontWeight="semibold">
                  Coffee Consumed
                </StatLabel>
                <StatNumber fontSize="2xl" color="brand.500">
                  ∞
                </StatNumber>
                <StatHelpText>cups (estimated)</StatHelpText>
              </Stat>
            </Box>
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
              <Stat>
                <StatLabel fontSize="md" fontWeight="semibold">
                  Projects Completed
                </StatLabel>
                <StatNumber fontSize="2xl" color="brand.500">
                  {projects.length}
                </StatNumber>
                <StatHelpText>and counting</StatHelpText>
              </Stat>
            </Box>
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
              <Stat>
                <StatLabel fontSize="md" fontWeight="semibold">
                  Technologies Mastered
                </StatLabel>
                <StatNumber fontSize="2xl" color="brand.500">
                  {techStack.length}
                </StatNumber>
                <StatHelpText>core technologies</StatHelpText>
              </Stat>
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Statistics;
