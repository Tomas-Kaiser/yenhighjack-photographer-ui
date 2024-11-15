import {
  Box,
  Center,
  Divider,
  Heading as ChakraHeading,
  Text,
} from "@chakra-ui/react";

interface Props {
  headingText: string;
  subHeadingText?: string;
}

const Heading = ({ headingText, subHeadingText }: Props) => {
  return (
    <>
      <Center>
        <Box w="90%" pb={1} mt={50}>
          <Divider style={{ borderColor: "#176734" }} />
        </Box>
      </Center>
      <ChakraHeading
        as="h2"
        size="xl"
        textAlign="center"
        mb={5}
        mt="20px"
        color="#176734"
        letterSpacing={{ base: "2px", md: "3px" }}
      >
        {headingText}
      </ChakraHeading>
      <Text textAlign="center" color="#176734" mb={3}>
        {subHeadingText}
      </Text>
      <Center>
        <Box w="70%" pb={10} mt="8px">
          <Divider style={{ borderColor: "#176734" }} />
        </Box>
      </Center>
    </>
  );
};

export default Heading;
