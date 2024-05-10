/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import { Box } from "@mui/material";

const textStyle = css`
  font-size: 16px;
  padding: 5px 2px;
  width: 440px;
  background-color: black;
  color: #fff;
  padding: 5px;
  line-height: 24px;
`;

function MyTextbox({ onChange, url }) {
  return <textarea css={textStyle} rows="20" value={url} onChange={onChange} />;
}
function MyQRCodeCanvas({ url }) {
  return (
    <QRCodeCanvas
      value={url}
      size="300"
      style={{
        marginBottom: "20px",
        padding: "10px",
        backgroundColor: "#fff",
      }}
    />
  );
}

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

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
        {url ? (
          <MyQRCodeCanvas url={url} />
        ) : (
          <p>ここにQRコードが表示されます</p>
        )}

        <MyTextbox value={url} onChange={(e) => setUrl(e.target.value)} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
