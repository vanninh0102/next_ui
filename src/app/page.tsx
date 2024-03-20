"use client";

import MyApp from "@/components/toggle-mode";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <MyApp />
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <Button
        variant="contained"
        className="bg-blue-500 hover:bg-blue-700 text-red-800"
      >
        My Button
      </Button>
    </>
  );
}
