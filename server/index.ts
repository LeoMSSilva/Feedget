import { app } from "./src/server";

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`HTTP server running on:\nhttp://localhost:${port}`);
});
