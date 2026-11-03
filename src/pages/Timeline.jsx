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

const Highlights = ({ items, visibleCount, color }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = items.length - visibleCount > 1 ? visibleCount : items.length;
  const visible = items.slice(0, limit);
  const hidden = items.slice(limit);
  const fontSize = { base: "sm", md: "md" };

  const renderItem = (point, i) => (
    <ListItem key={i} display="flex" alignItems="flex-start">
      <ListIcon as={ChevronRight} color="brand.400" mt="3px" flexShrink={0} />
      <Text as="span">{point}</Text>
    </ListItem>
  );

  return (
    <Box>
      <List spacing={2} color={color} fontSize={fontSize}>
        {visible.map(renderItem)}
      </List>
      {hidden.length > 0 && (
        <>
          <Collapse in={expanded} animateOpacity>
            <List spacing={2} mt={2} color={color} fontSize={fontSize}>
              {hidden.map((point, i) => renderItem(point, i + limit))}
            </List>
          </Collapse>
          <Button
            mt={3}
            size="sm"
            variant="link"
            colorScheme="brand"
            rightIcon={
              expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />
            }
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show less" : `Show ${hidden.length} more`}
          </Button>
        </>
      )}
    </Box>
  );
};

const TimelineSection = ({ title, items, visibleCount, compact = false }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.100", "gray.700");
  const lineColor = useColorModeValue("gray.200", "gray.700");
  const pageBg = useColorModeValue("white", "gray.900");
  const mutedText = useColorModeValue("gray.600", "gray.300");
  const accentText = useColorModeValue("brand.500", "brand.300");
  const badgeVariant = useColorModeValue("subtle", "solid");

  return (
    <Box>
      <Heading size="md" mb={{ base: 5, md: 8 }}>
        {title}
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
        <VStack spacing={{ base: 5, md: compact ? 6 : 8 }} align="stretch">
          {items.map((item) => (
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
                lineHeight="short"
              >
                {item.date.split(" - ").map((part, i) => (
                  <Text as="span" display="block" key={part} fontWeight={i ? "medium" : "bold"} opacity={i ? 0.8 : 1}>
                    {i ? `– ${part}` : part}
                  </Text>
                ))}
              </Text>

              <Flex justify="center" pt={6}>
                <Box
                  w="16px"
                  h="16px"
                  rounded="full"
                  bg={compact ? lineColor : "brand.500"}
                  border="3px solid"
                  borderColor={pageBg}
                  boxShadow={`0 0 0 2px var(--chakra-colors-${
                    compact ? "gray-500" : "brand-400"
                  })`}
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
                _hover={{
                  boxShadow: "xl",
                  transform: { md: "translateY(-3px)" },
                }}
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
                    {item.meta && (
                      <Text fontSize="sm" color="gray.500" mt={0.5}>
                        {item.meta}
                      </Text>
                    )}
                  </Box>

                  {item.description && (
                    <Text color={mutedText} fontSize={{ base: "sm", md: "md" }}>
                      {item.description}
                    </Text>
                  )}

                  {item.highlights && (
                    <Highlights
                      items={item.highlights}
                      visibleCount={visibleCount}
                      color={mutedText}
                    />
                  )}

                  {item.skills && (
                    <Wrap spacing={2}>
                      {item.skills.map((skill) => (
                        <WrapItem key={skill}>
                          <Badge
                            colorScheme={compact ? "gray" : "brand"}
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
                  )}
                </VStack>
              </Box>
            </Grid>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

const Timeline = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.100", "gray.700");
  const mutedText = useColorModeValue("gray.600", "gray.300");
  const accentText = useColorModeValue("brand.500", "brand.300");
  const iconBg = useColorModeValue("brand.50", "whiteAlpha.100");

  const engineering = timeline.filter((t) => t.section === "engineering");
  const earlier = timeline.filter((t) => t.section === "earlier");

  return (
    <Container maxW="5xl" px={{ base: 4, md: 8 }} py={{ base: 10, md: 20 }}>
      <VStack spacing={{ base: 12, md: 16 }} align="stretch">
        <Box textAlign="center">
          <Heading size={{ base: "lg", md: "xl" }} mb={3}>
            Career Timeline
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color={mutedText}>
            My professional journey and key milestones
          </Text>
        </Box>

        <TimelineSection
          title="Engineering Experience"
          items={engineering}
          visibleCount={4}
        />

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
                  _hover={{
                    boxShadow: "xl",
                    transform: { md: "translateY(-3px)" },
                  }}
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
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      color={accentText}
                      mb={1}
                    >
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

        <TimelineSection
          title="Earlier Career"
          items={earlier}
          visibleCount={2}
          compact
        />
      </VStack>
    </Container>
  );
};

export default Timeline;
