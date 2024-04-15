import { ChangeEvent, FC, useCallback, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { isValidEmail } from "../utils/validations";

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  console.log("email :::", email);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target?.value);
  }, []);

  return (
    <Box>
      <TextField
        placeholder="Enter a email"
        value={email}
        onChange={handleChange}
      />
      <Button variant="contained" disabled={!isValidEmail(email)}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
