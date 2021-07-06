// const express = require("express");
// const welcomeRouter = require("./welcome/welcome");
// const carsRouter = require("./routes/carRoutes");

// const server = express()
// const port = process.env.PORT || 6000

// server.use(express.json())
// server.use("/", welcomeRouter)
// server.use("/", carsRouter)

// server.use((err, req, res, next) => {
// 	console.log(err)
// 	res.status(500).json({
// 		message: "Something went wrong",
// 	})
// })

// server.listen(port, () => {
// 	console.log(`Server running at http://localhost:${port}`)
// })