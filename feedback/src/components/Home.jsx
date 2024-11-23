import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import Image1 from "../assets/vivek.jpeg"
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', mt: 5, display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap", gap:2, p:2}}>
          <Box sx={{ width: "30%",  display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", flexDirection:"column" }}>
            <h6>This is me</h6>
            <h1>Vivek Kr Choubey</h1>
            <p>
              You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.
            </p>
            <Stack spacing={2} direction="row">
              <Button variant="contained" sx={{ background: "#2e4053" }}>DISCOVER NOW</Button>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={2} direction="row">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height={300}
                  width={300}
                  image={Image1}
                />
              </Card>
            </Stack>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
