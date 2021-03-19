const express = require("express")
const cors = require("cors")
const stripe = require("stripe")(
   "Secret_key"
)
const port= process.env.PORT||9000;
//app config
const app = express()

//middlewares
app.use(cors({ origin: true }))
app.use(express.json())

//api routes
app.get("/densec", (req, res) => res.send("This is working🚀"))

app.post("/payment/create", async (req, res) => {
   const total = req.query.total
   console.log("payment req recieved 🔥🔥🔥", total)
   const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "inr",
   })
   res.status(201).send({
      clientSecret: paymentIntent.client_secret,
   })
})
//listening
app.listen(port,()=>{
   console.log("server running")
})

//http://localhost:5001/clone-react-29fa9/us-central1/api
