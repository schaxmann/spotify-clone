import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: string }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPaseword] = useState("");
  const [loading, setIsLoading] = useState("");
  const router = useRouter();

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex justify="center" align="center" height="100px">
        Hello
      </Flex>
      <Flex justify="center" align="center" height="calc(200vh-100px)">
        You
      </Flex>
    </Box>
  );
};

export default AuthForm;