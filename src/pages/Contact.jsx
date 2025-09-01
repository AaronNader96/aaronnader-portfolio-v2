import React, { useState } from "react";
import {
  Container,
  VStack,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const cardBg = useColorModeValue("white", "gray.700");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://getform.io/f/ee2e3c81-93b7-4d1a-9979-ad9d7447c340",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxW="6xl" py={20}>
      <VStack spacing={12} align="stretch">
        <Box textAlign="center">
          <Heading size="xl" mb={4}>
            Get In Touch
          </Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.300")}>
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </Text>
        </Box>

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={16}>
          <GridItem>
            <Box bg={cardBg} p={8} rounded="xl" boxShadow="lg">
              <VStack spacing={6} align="stretch">
                <Heading size="md" mb={4}>
                  Let's Connect
                </Heading>
                <Text color={useColorModeValue("gray.600", "gray.300")}>
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology and
                  development.
                </Text>
                <Box>
                  <Text fontWeight="semibold" mb={2}>
                    Areas of Interest:
                  </Text>
                  <VStack align="start" spacing={1}>
                    <Text>• Full-stack development projects</Text>
                    <Text>• React and Node.js consulting</Text>
                    <Text>• Database optimization</Text>
                    <Text>• Tech mentorship</Text>
                    <Text>• Startup collaboration</Text>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </GridItem>

          <GridItem>
            <Box bg={cardBg} p={8} rounded="xl" boxShadow="lg">
              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      _focus={{
                        borderColor: "brand.500",
                        boxShadow: "0 0 0 1px brand.500",
                      }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      _focus={{
                        borderColor: "brand.500",
                        boxShadow: "0 0 0 1px brand.500",
                      }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      _focus={{
                        borderColor: "brand.500",
                        boxShadow: "0 0 0 1px brand.500",
                      }}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="brand"
                    size="lg"
                    width="full"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                    _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                    transition="all 0.2s"
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Contact;
