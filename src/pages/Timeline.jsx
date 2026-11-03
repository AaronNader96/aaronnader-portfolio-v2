import React, { useState } from "react";
import {
  Container,
  VStack,
  Heading,
  Box,
  Text,
  Badge,
  Flex,
  Grid,
  Wrap,
  WrapItem,
  List,
  ListItem,
  ListIcon,
  Button,
  Collapse,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Award,
} from "lucide-react";
import { timeline, education } from "../data.js";

const VISIBLE_HIGHLIGHTS = 4;

const Highlights = ({ items, color }) => {
  const [expanded, setExpanded] = useState(false);
  const visible = items.slice(0, VISIBLE_HIGHLIGHTS);
  const hidden = items.slice(VISIBLE_HIGHLIGHTS);

  const renderItem = (point, i) => (
    <ListItem key={i} display="flex" alignItems="flex-start">
      <ListIcon as={ChevronRight} color="brand.400" mt="3px" flexShrink={0} />
      <Text as="span">{point}</Text>
    </ListItem>
  );

  return (
    <Box>
      <List spacing={2} color={color} fontSize={{ base: "sm", md: "md" }}>
        {visible.map(renderItem)}
      </List>
      {hidden.length > 0 && (
        <>
          <Collapse in={expanded} animateOpacity>
            <List
              spacing={2}
              mt={2}
              color={color}
              fontSize={{ base: "sm", md: "md" }}
            >
              {hidden.map((point, i) => renderItem(point, i + VISIBLE_HIGHLIGHTS))}
            </List>
          </Collapse>
          <Button
            mt={3}
            size="sm"
            variant="link"
            colorScheme="brand"
            rightIcon={expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show less" : `Show ${hidden.length} more`}
          </Button>
        </>
      )}
    </Box>
  );
};

const Timeline = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.100", "gray.700");
  const lineColor = useColorModeValue("gray.200", "gray.700");
  const pageBg = useColorModeValue("white", "gray.900");
  const mutedText = useColorModeValue("gray.600", "gray.300");
  const accentText = useColorModeValue("brand.500", "brand.300");
  const badgeVariant = useColorModeValue("subtle", "solid");
  const iconBg = useColorModeValue("brand.50", "whiteAlpha.100");

  return (
    <Container maxW="5xl" px={{ base: 4, md: 8 }} py={{ base: 10, md: 20 }}>
      <VStack spacing={{ base: 10, md: 16 }} align="stretch">
        <Box textAlign="center">
          <Heading size={{ base: "lg", md: "xl" }} mb={3}>
            Career Timeline
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color={mutedText}>
            My professional journey and key milestones
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={{ base: 5, md: 8 }}>
            Experience
          </Heading>
          <Box position="relative">
            <Box
              position="absolute"
              top={3}
              bottom={3}
              left={{ base: "7px", md: "159px" }}
              w="2px"
              bg={lineColor}
              aria-hidden
            />
            <VStack spacing={{ base: 5, md: 8 }} align="stretch">
              {timeline.map((item) => (
                <Grid
                  key={item.id}
                  templateColumns={{ base: "16px 1fr", md: "140px 40px 1fr" }}
                  columnGap={{ base: 4, md: 0 }}
                  alignItems="start"
                >
                  <Text
                    display={{ base: "none", md: "block" }}
                    textAlign="right"
                    pr={4}
                    pt={6}
                    fontSize="sm"
                    fontWeight="bold"
                    color={accentText}
                  >
                    {item.date}
                  </Text>

                  <Flex justify="center" pt={6}>
                    <Box
                      w="16px"
                      h="16px"
                      rounded="full"
                      bg="brand.500"
                      border="3px solid"
                      borderColor={pageBg}
                      boxShadow="0 0 0 2px var(--chakra-colors-brand-400)"
                      position="relative"
                      zIndex={1}
                    />
                  </Flex>

                  <Box
                    bg={cardBg}
                    border="1px solid"
                    borderColor={cardBorder}
                    p={{ base: 5, md: 6 }}
                    rounded="xl"
                    boxShadow="md"
                    minW={0}
                    transition="all 0.25s"
                    _hover={{ boxShadow: "xl", transform: { md: "translateY(-3px)" } }}
                  >
                    <VStack spacing={4} align="stretch">
                      <Box>
                        <Badge
                          display={{ base: "inline-block", md: "none" }}
                          mb={2}
                          colorScheme="brand"
                          variant="outline"
                          fontSize="0.7em"
                        >
                          {item.date}
                        </Badge>
                        <Heading size={{ base: "sm", md: "md" }} mb={1}>
                          {item.title}
                        </Heading>
                        <Text fontWeight="semibold" color={accentText}>
                          {item.company}
                        </Text>
                      </Box>

                      <Text color={mutedText} fontSize={{ base: "sm", md: "md" }}>
                        {item.description}
                      </Text>

                      {item.highlights && (
                        <Highlights items={item.highlights} color={mutedText} />
                      )}

                      <Wrap spacing={2}>
                        {item.skills.map((skill) => (
                          <WrapItem key={skill}>
                            <Badge
                              colorScheme="brand"
                              variant={badgeVariant}
                              fontSize="xs"
                              px={2}
                              py={0.5}
                              rounded="md"
                              textTransform="none"
                            >
                              {skill}
                            </Badge>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </VStack>
                  </Box>
                </Grid>
              ))}
            </VStack>
          </Box>
        </Box>

        <Box>
          <Heading size="md" mb={{ base: 5, md: 8 }}>
            Education & Certifications
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 6 }}>
            {education.map((item) => {
              const Icon = item.kind === "certification" ? Award : GraduationCap;
              return (
                <Flex
                  key={item.id}
                  bg={cardBg}
                  border="1px solid"
                  borderColor={cardBorder}
                  p={5}
                  rounded="xl"
                  boxShadow="md"
                  gap={4}
                  align="flex-start"
                  transition="all 0.25s"
                  _hover={{ boxShadow: "xl", transform: { md: "translateY(-3px)" } }}
                >
                  <Flex
                    flexShrink={0}
                    w={10}
                    h={10}
                    rounded="lg"
                    align="center"
                    justify="center"
                    bg={iconBg}
                    color={accentText}
                  >
                    <Icon size={20} />
                  </Flex>
                  <Box minW={0}>
                    <Text fontSize="xs" fontWeight="bold" color={accentText} mb={1}>
                      {item.date}
                    </Text>
                    <Text fontWeight="semibold" lineHeight="short">
                      {item.title}
                    </Text>
                    {item.school && (
                      <Text fontSize="sm" color={mutedText} mt={1}>
                        {item.school}
                      </Text>
                    )}
                  </Box>
                </Flex>
              );
            })}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Timeline;
