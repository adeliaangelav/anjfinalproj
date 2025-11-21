const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <div style="
    font-family: 'Poppins', sans-serif;
    max-width: 650px;
    margin: 60px auto;
    padding: 35px;
    border-radius: 15px;
    background: white;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    border: 3px solid;
    border-image: linear-gradient(to right, #ff7e5f, #feb47b, #6dd5ed) 1;
  ">
    <h1 style="margin-bottom: 25px; font-weight: 600; font-size: 28px; color: #333;">IT 412 Final Project | Personal Profile</h1>
    
    <p style="font-size: 18px; margin-bottom: 12px;">
      <strong>Full name:</strong> Villanueva, Angela A.
    </p>
    
    <p style="font-size: 18px; margin-bottom: 25px;">
      <strong>Class section:</strong> BA 4102
    </p>
    
    <p style="font-size: 17px; font-style: italic; color: #555;">
      “In order to write about life, first, you must live it.” — Ernest Hemingway 
    </p>
  </div>
`);

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
