import React from "react";
import emailjs from "emailjs-com";
import { useColorModeValue } from "@chakra-ui/react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  IconButton,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("black", "white");
  const inputBgColor = useColorModeValue("gray.200", "gray.700");
  const inputTextColor = useColorModeValue("black", "white");

  const handleSendMessage = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Failed to send message. Please try again later"));
  };

  return (
    <Box
      id="contact"
      mt={12}
      p={6}
      bg={bgColor}
      borderRadius="lg"
      color={textColor}
    >
      <Heading size="lg" mb={6} textAlign="center" color="teal.400">
        Get in Touch
      </Heading>
      <VStack spacing={4} align="center">
        <Text>
          Email:{" "}
          <Link href="mailto:dilipsindhav33@gmail.com" color="teal.300">
            dilipsindhav33@gmail.com
          </Link>
        </Text>
        <Text>Location: Ahmedabad, India</Text>

        <HStack spacing={4}>
          <Link
            href="https://linkedin.com/in/dilip-sindhav-77a690235"
            isExternal
          >
            <IconButton
              icon={<FaLinkedin />}
              aria-label="LinkedIn"
              colorScheme="teal"
            />
          </Link>
          <Link href="https://github.com/Dilipsinh333" isExternal>
            <IconButton
              icon={<FaGithub />}
              aria-label="GitHub"
              colorScheme="orange"
            />
          </Link>
          <Link href="mailto:dilipsindhav33@gmail.com">
            <IconButton
              icon={<FaEnvelope />}
              aria-label="Email"
              colorScheme="red"
            />
          </Link>
        </HStack>

        <Box w="100%" maxW="500px" mt={8}>
          <form onSubmit={handleSendMessage}>
            <VStack spacing={4}>
              <Input
                name="name"
                placeholder="Your Name"
                bg={inputBgColor}
                color={inputTextColor}
                size="lg"
              />
              <Input
                name="email"
                placeholder="Your Email"
                bg={inputBgColor}
                color={inputTextColor}
                size="lg"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                bg={inputBgColor}
                color={inputTextColor}
                size="lg"
                rows={5}
              />
              <Button type="submit" colorScheme="teal" size="lg" w="100%">
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
};

export default ContactSection;
