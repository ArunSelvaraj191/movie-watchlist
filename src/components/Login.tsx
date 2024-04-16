import { ChangeEvent, FC, useCallback, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../utils/validations";

const Login: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  console.log("email :::", email);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target?.value);
  }, []);

  const handleLogin = useCallback(() => {
    navigate("/watchlist");
  }, [navigate]);

  return (
    <Box>
      <h1>Login</h1>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          placeholder="Enter a email"
          value={email}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          disabled={!isValidEmail(email)}
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
