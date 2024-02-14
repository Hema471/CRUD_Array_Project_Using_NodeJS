const express = require("express");
const welcomeRouter = require("./Routes/welcomeRoute");
const courseRouter = require("./Routes/coursesRoutes");
const app = express();
app.use(express.json());
app.use("/", welcomeRouter);
app.use("/api/courses", courseRouter);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});