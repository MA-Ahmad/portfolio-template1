import * as React from 'react';
import {
  Box,
  useColorModeValue,
  Avatar,
  Heading,
  Img,
  Text,
  VStack,
  Stack,
  Link,
  IconButton,
  Divider,
  Flex,
  SlideFade,
} from '@chakra-ui/react';
import siteConfig from '../configs/site-config';
import brushYImage from '../assets/images/brush-yellow.png';
import brushCImage from '../assets/images/brush-cyan.png';
import { motion } from 'framer-motion';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true,
};

const variants = {
  initial: {
    opacity: 0,
    translateY: -20,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

const Home = () => {
  const image = useColorModeValue(brushYImage, brushCImage);

  return (
    <Box
      fontSize="xl"
      position="fixed"
      left={0}
      right={0}
      bottom={0}
      top={0}
      height="max-content"
      width="max-content"
      margin="auto"
      textAlign="left"
    >
      <SlideFade in>
        <VStack spacing={2} alignItems="flex-start">
          <Box position="relative">
            <motion.div variants={variants}>
              <Img src={image} width="400px" objectFit="cover" />
              <Box
                position="absolute"
                top="-11%"
                left="0"
                right="0"
                margin="0 auto"
                width="max-content"
              >
                <VStack spacing={4} alignItems="flex-start">
                  <Stack spacing={2}>
                    <Avatar
                      boxShadow="xl"
                      size={'xl'}
                      src={
                        'https://avatars2.githubusercontent.com/u/37842853?v=4'
                      }
                    />
                    <Text fontSize="sm">Muhammad Ahmad</Text>
                  </Stack>
                  <Heading
                    textAlign="left"
                    top="10%"
                    left="0"
                    right="0"
                    margin="0 auto"
                    width="25rem"
                    fontSize="3rem"
                  >
                    Full-Stack
                    <br /> Developer based <br /> in Pakistan
                  </Heading>
                  <Text>
                    Passionate about Tech. Lover of web and opensource.
                  </Text>
                  <Divider />
                  <Flex alignItems="center" justify="center" w="100%">
                    <Box textAlign="center">
                      {siteConfig.author.accounts.map((sc, index) => (
                        <IconButton
                          key={index}
                          as={Link}
                          isExternal
                          href={sc.url}
                          aria-label={sc.label}
                          size="lg"
                          colorScheme={sc.type}
                          icon={sc.icon}
                          {...iconProps}
                        />
                      ))}
                    </Box>
                  </Flex>
                </VStack>
              </Box>
            </motion.div>
          </Box>
        </VStack>
      </SlideFade>
    </Box>
  );
};

export default Home;
