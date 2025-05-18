import React from "react";
import { Box, Button, useColorMode, VStack } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Header from "./components/Header";
import TabsSection from "./components/TabsSection";
import ContactSection from "./components/ContactSection";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "gray.50" : "gray.900"} minH="100vh" p={6}>
      <VStack align="end">
        <Button onClick={toggleColorMode} mb={4}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </VStack>
      <Header />
      <TabsSection />
      <ContactSection />
    </Box>
  );
}

export default App;
