import * as React from "react";
import "@fontsource/inter";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { Box, Button, Grid, Input, Textarea } from "@mui/joy";
import { sendMessage } from "./sendmessage";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    sendMessage(`${value.message}`, value.subject, value.email)
      .then(() => {
        setLoading(false);
        alert("Message sent successfully 👍");
      })
      .catch(() => {
        setLoading(false);
        alert("Sorry message was not sent.");
      });
    //console.log(value.email);
  };

  return (
    <CssVarsProvider>
      {/* must be used under CssVarsProvider */}
      <CssBaseline />
      <Box component="section" sx={{ p: 5 }}>
        <form onSubmit={submit}>
          <Grid container spacing={4} sx={{ flexGrow: 1 }}>
            <Grid xs={12} md={6}>
              <Input
                type="email"
                name="email"
                value={value.email}
                onChange={handleChange}
                placeholder="Receiver email"
                variant="soft"
                color="primary"
                size="lg"
                required
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Input
                type="text"
                name="subject"
                value={value.subject}
                onChange={handleChange}
                placeholder="Subject"
                variant="soft"
                color="primary"
                size="lg"
                required
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Textarea
                minRows={8}
                name="message"
                value={value.message}
                onChange={handleChange}
                placeholder="Type message"
                variant="soft"
                color="primary"
                size="lg"
                required
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Button
                fullWidth
                type="submit"
                loading={loading}
                loadingPosition="start"
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      {/* The rest of your application */}
    </CssVarsProvider>
  );
}

export default App;
