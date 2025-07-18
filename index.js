const mongoose = require('mongoose')
const express = require('express')
const app = express()
const User = require('./models/User')


const PORT = process.env.PORT || 4000;

async function mong_connect(){
    try {
        let x = await mongoose.connect('mongodb+srv://marrbenn1:reuben123@cluster1.kx7dslo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
        console.log('Mongoose Success!')
        
    } catch (err) {
        console.log(`Mongo Error: ${err}`)
    }
    
   
}

mong_connect()

app.listen(PORT, () => {
    console.log("Server running on port 4000")
})

app.get('/', (req, res) => {
    res.send('Hello from backend!')
})

app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.json(users); // Send as JSON
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

