import React from "react";
import { Heading, VStack, Text, Button, Link, Box } from "@chakra-ui/react";
import { ReactTyped } from "react-typed";

const Header = () => (
  <VStack align="center" spacing={6} mb={12} textAlign="center">
    <Heading size="2xl" color="teal.400">
      Hi, I'm Dilip Sindhav
    </Heading>
    <Text fontSize="lg" color="gray.500">
      <ReactTyped
        strings={["React.js Developer", "Programmer Analyst at Meditab"]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </Text>
    <Box>
      <Button
        as={Link}
        href="/resume.pdf"
        download
        colorScheme="teal"
        size="lg"
        mr={4}
      >
        Download Resume
      </Button>
      <Button
        as="a"
        href="#contact"
        colorScheme="gray"
        variant="outline"
        size="lg"
      >
        Contact Me
      </Button>
    </Box>
  </VStack>
);

export default Header;
