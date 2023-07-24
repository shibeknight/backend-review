const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// app.get('/', (req,res) => {
//     console.log('route works')
//     res.send(200)
// })
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}`));
});
