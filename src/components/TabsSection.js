import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  VStack,
  Text,
  Heading,
  SimpleGrid,
  Badge,
  HStack,
} from "@chakra-ui/react";

const TabsSection = () => (
  <Box mt={8}>
    <Heading size="lg" mb={6} textAlign="center" color="teal.400">
      My Portfolio
    </Heading>
    <Tabs variant="soft-rounded" colorScheme="teal" align="center">
      <TabList>
        <Tab>About Me</Tab>
        <Tab>Skills</Tab>
        <Tab>Projects</Tab>
        <Tab>Experience</Tab>
        <Tab>Education</Tab>
        <Tab>Hobbies</Tab>
      </TabList>

      <TabPanels>
        {/* About Me */}
        <TabPanel>
          <VStack spacing={6} align="start">
            <Text fontSize="lg" color="gray.500">
              I'm a React.js Developer with 2+ years of experience building
              scalable web apps using React, Redux, and TypeScript. I specialize
              in component optimization, REST API integration, and writing
              clean, testable code.
            </Text>
            <Text fontSize="lg" color="gray.500">
              I’ve collaborated with cross-functional teams, optimized app
              performance with lazy loading and memoization, and written
              automated tests using Jest and RTL. My passion lies in building
              responsive, accessible user interfaces.
            </Text>
          </VStack>
        </TabPanel>

        {/* Skills */}
        <TabPanel>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            <Badge colorScheme="teal" p={2}>
              React.js
            </Badge>
            <Badge colorScheme="blue" p={2}>
              JavaScript
            </Badge>
            <Badge colorScheme="purple" p={2}>
              TypeScript
            </Badge>
            <Badge colorScheme="green" p={2}>
              Redux
            </Badge>
            <Badge colorScheme="orange" p={2}>
              REST APIs
            </Badge>
            <Badge colorScheme="pink" p={2}>
              Jest
            </Badge>
            <Badge colorScheme="gray" p={2}>
              Docker
            </Badge>
            <Badge colorScheme="red" p={2}>
              PostgreSQL
            </Badge>
            <Badge colorScheme="cyan" p={2}>
              Git
            </Badge>
          </SimpleGrid>
        </TabPanel>

        {/* Projects */}
        <TabPanel>
          <VStack spacing={6} align="start">
            <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
              <Heading size="md" color="teal.400" mb={2}>
                Smart Inventory Management System
              </Heading>
              <Text color="gray.500" mb={2}>
                A feature-rich inventory system built with React.js, Redux, and
                REST APIs. Includes lazy loading, memoization, and unit testing
                with Jest.
              </Text>
              <HStack spacing={4}>
                <Badge colorScheme="teal">React</Badge>
                <Badge colorScheme="orange">Redux</Badge>
                <Badge colorScheme="blue">Jest</Badge>
              </HStack>
            </Box>

            <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
              <Heading size="md" color="teal.400" mb={2}>
                Personal Portfolio Website
              </Heading>
              <Text color="gray.500" mb={2}>
                A responsive React.js portfolio to showcase projects and blogs.
                Integrated GitHub previews, email services, and a theme toggle.
              </Text>
              <HStack spacing={4}>
                <Badge colorScheme="purple">React.js</Badge>
                <Badge colorScheme="green">EmailJS</Badge>
                <Badge colorScheme="gray">Chakra UI</Badge>
              </HStack>
            </Box>
          </VStack>
        </TabPanel>

        {/* Experience */}
        <TabPanel>
          <VStack spacing={6} align="start">
            <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
              <Heading size="md" color="teal.400" mb={2}>
                Programmer Analyst – Meditab Software Pvt. Ltd.
              </Heading>
              <Text color="gray.500" mb={2}>
                Jan 2023 – Present
              </Text>
              <Text color="gray.400" fontSize="sm">
                - Developed reusable React components and integrated RESTful
                APIs
                <br />
                - Used Redux and Context API for state management
                <br />
                - Applied performance optimizations (lazy loading, memoization)
                <br />
                - Implemented unit tests using Jest & React Testing Library
                <br />- Worked with cross-functional teams on responsive UI
              </Text>
            </Box>

            <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
              <Heading size="md" color="teal.400" mb={2}>
                Software Developer Intern – Tatvasoft
              </Heading>
              <Text color="gray.500" mb={2}>
                2022
              </Text>
              <Text color="gray.400" fontSize="sm">
                - Developed e-commerce platform features using React, .NET, and
                PostgreSQL
                <br />
                - Implemented shopping cart, payment integration, and order
                modules
                <br />- Participated in Agile development and team sprints
              </Text>
            </Box>
          </VStack>
        </TabPanel>

        {/* Education */}
        <TabPanel>
          <SimpleGrid columns={[1, 2]} spacing={6}>
            <Box>
              <Heading size="md" color="teal.400">
                B.E. – Information Technology
              </Heading>
              <Text color="gray.500">
                L.D. College of Engineering (2019 – 2023)
              </Text>
              <Text color="gray.400" fontSize="sm">
                CGPA: 8.06
              </Text>
            </Box>
            <Box>
              <Heading size="md" color="teal.400">
                Higher Secondary School
              </Heading>
              <Text color="gray.500">
                Alpha Vidhya Sankul, Junagadh (2017 – 2019)
              </Text>
              <Text color="gray.400" fontSize="sm">
                Science Stream
              </Text>
            </Box>
          </SimpleGrid>
        </TabPanel>

        {/* Hobbies */}
        <TabPanel>
          <VStack spacing={4} align="start">
            <Text fontSize="lg" color="gray.500">
              Outside of coding, I enjoy typing practice, learning new frontend
              tools, and contributing to open-source.
            </Text>
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);

export default TabsSection;
