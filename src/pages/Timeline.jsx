import React from "react";
import {
  Container,
  VStack,
  Heading,
  Box,
  Text,
  Badge,
  HStack,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { timeline } from "../data.js";

const Timeline = () => {
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Container maxW="5xl" py={20}>
      <VStack spacing={12} align="stretch">
        <Box textAlign="center">
          <Heading size="xl" mb={4}>
            Career Timeline
          </Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.300")}>
            My professional journey and key milestones
          </Text>
        </Box>

        <VStack spacing={8} align="stretch">
          {timeline.map((item, index) => (
            <Flex key={item.id} align="start">
              <Box w="120px" flexShrink={0} textAlign="right" pr={8} pt={2}>
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  color={useColorModeValue("brand.500", "brand.300")}
                >
                  {item.date}
                </Text>
              </Box>

              <Box
                position="relative"
                _before={{
                  content: '""',
                  position: "absolute",
                  left: "-6px",
                  top: "24px",
                  w: "12px",
                  h: "12px",
                  bg: "brand.500",
                  borderRadius: "full",
                  zIndex: 2,
                }}
                _after={
                  index < timeline.length - 1
                    ? {
                        content: '""',
                        position: "absolute",
                        left: "-1px",
                        top: "36px",
                        w: "2px",
                        h: "calc(100% + 32px)",
                        bg: borderColor,
                      }
                    : {}
                }
              >
                <Box
                  bg={cardBg}
                  p={6}
                  rounded="xl"
                  boxShadow="lg"
                  ml={6}
                  _hover={{ transform: "translateX(8px)", boxShadow: "xl" }}
                  transition="all 0.3s"
                >
                  <VStack spacing={4} align="stretch">
                    <Box>
                      <Heading size="md" mb={1}>
                        {item.title}
                      </Heading>
                      <Text
                        fontWeight="semibold"
                        color={useColorModeValue("brand.500", "brand.300")}
                      >
                        {item.company}
                      </Text>
                    </Box>
                    <Text color={useColorModeValue("gray.600", "gray.300")}>
                      {item.description}
                    </Text>
                    <Box>
                      <Text fontSize="sm" fontWeight="semibold" mb={2}>
                        Key Skills:
                      </Text>
                      <HStack wrap="wrap" spacing={2}>
                        {item.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            colorScheme="brand"
                            variant="subtle"
                            fontSize="xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>
                  </VStack>
                </Box>
              </Box>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Timeline;
