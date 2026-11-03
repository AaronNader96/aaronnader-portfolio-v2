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
  SimpleGrid,
  Flex,
  useColorModeValue,
  Link,
  IconButton,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  Download,
  Linkedin,
  Github,
  MapPin,
  Mail,
  Briefcase,
  GraduationCap,
  Clock,
} from "lucide-react";
import { personalInfo, skills, timeline, education } from "../data.js";

const Home = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.100", "gray.700");
  const mutedText = useColorModeValue("gray.600", "gray.300");
  const accentText = useColorModeValue("brand.500", "brand.300");
  const badgeVariant = useColorModeValue("subtle", "solid");

  const currentRole = timeline[0];
  const degree = education.find((e) => e.kind === "degree");

  const glance = [
    {
      icon: Briefcase,
      label: "Current Role",
      value: `${currentRole.title} @ ${currentRole.company}`,
    },
    { icon: Clock, label: "Experience", value: "3+ years" },
    {
      icon: GraduationCap,
      label: "Education",
      value: `B.S. Computer Science, ${degree.school}`,
    },
    { icon: MapPin, label: "Location", value: personalInfo.location },
  ];

  return (
    <Container maxW="container.xl" px={{ base: 4, md: 8 }} py={{ base: 10, md: 20 }}>
      <VStack spacing={{ base: 12, md: 16 }} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <VStack spacing={{ base: 4, md: 6 }}>
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
            <Wrap justify="center" spacingX={5} spacingY={2} color="gray.500" fontSize="sm">
              <WrapItem alignItems="center" gap={1.5}>
                <MapPin size={16} />
                {personalInfo.location}
              </WrapItem>
              <WrapItem alignItems="center" gap={1.5}>
                <Mail size={16} />
                <Link href={`mailto:${personalInfo.email}`} color={accentText} wordBreak="break-all">
                  {personalInfo.email}
                </Link>
              </WrapItem>
            </Wrap>

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

            <Text fontSize="md" color="gray.500" px={{ base: 2, md: 0 }}>
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

        <Grid
          templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
          gap={{ base: 8, lg: 12 }}
          alignItems="start"
        >
          {/* About */}
          <GridItem>
            <Heading size="lg" mb={{ base: 4, md: 6 }}>
              About Me
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="tall" color={mutedText}>
              {personalInfo.intro}
            </Text>
          </GridItem>

          <GridItem>
            <Box
              bg={cardBg}
              border="1px solid"
              borderColor={cardBorder}
              p={{ base: 5, md: 6 }}
              rounded="xl"
              boxShadow="md"
            >
              <Heading size="sm" mb={5} textTransform="uppercase" letterSpacing="wider" color="gray.500">
                At a Glance
              </Heading>
              <VStack spacing={4} align="stretch">
                {glance.map(({ icon: Icon, label, value }) => (
                  <Flex key={label} gap={3} align="flex-start">
                    <Box color={accentText} pt="2px" flexShrink={0}>
                      <Icon size={18} />
                    </Box>
                    <Box minW={0}>
                      <Text fontSize="xs" color="gray.500">
                        {label}
                      </Text>
                      <Text fontWeight="semibold" fontSize="sm">
                        {value}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </VStack>
            </Box>
          </GridItem>
        </Grid>

        <Box>
          <Heading size="lg" mb={{ base: 4, md: 6 }}>
            Skills
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 4, md: 5 }}>
            {skills.map((group) => (
              <Box
                key={group.category}
                bg={cardBg}
                border="1px solid"
                borderColor={cardBorder}
                p={5}
                rounded="xl"
                boxShadow="md"
                transition="all 0.25s"
                _hover={{ boxShadow: "xl", transform: { md: "translateY(-3px)" } }}
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  color={accentText}
                  mb={3}
                >
                  {group.category}
                </Text>
                <Wrap spacing={2}>
                  {group.items.map((tech) => (
                    <WrapItem key={tech}>
                      <Badge
                        px={2.5}
                        py={1}
                        rounded="md"
                        fontSize="xs"
                        colorScheme="brand"
                        textTransform="none"
                        variant={badgeVariant}
                      >
                        {tech}
                      </Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;
