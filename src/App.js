/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import { Box } from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const textStyle = css`
    font-size: 16px;
    padding: 5px 2px;
    width: 340px;
  `;

  const [url, setUrl] = useState("");

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        marginTop="20px"
        marginLeft="50px"
        justifyContent="center"
        alignItems="start"
        sx={{ width: "100%", height: "100%" }}
      >
        <h1>QR Code Generator</h1>
        <input
          css={textStyle}
          type="url"
          name="url"
          value={url}
          placeholder="(url)"
          onChange={(e) => setUrl(e.target.value)}
          onFocus={(e) => e.target.select()}
        />
        {url ? (
          <QRCodeCanvas
            value={url}
            size="100"
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#fff",
            }}
          />
        ) : (
          <p>ここにQRコードが表示されます</p>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
