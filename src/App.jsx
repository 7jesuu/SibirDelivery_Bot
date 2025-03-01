import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Title, Button } from "./App.styled";
import { WebApp } from "@twa-dev/sdk";

function App() {
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/data");
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    WebApp.ready();
    fetchData();
  }, []);

  return (
    <Container>
      <Title>{message}</Title>
      <Button onClick={fetchData}>Refresh</Button>
    </Container>
  );
}

export default App;
