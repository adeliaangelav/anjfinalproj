const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>IT 412 Final Project </h1>
        <h2>Angela Villanueva</h2>
        <h3> BA 4102 </h3>
        <p>"I can do all this through him who gives me strength. Philippians 4:13 "</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
