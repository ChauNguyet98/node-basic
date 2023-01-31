import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
  let data = [];
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    data = results.map((row) => {
      return row;
    });
    return res.render("index.ejs", { dataUser: JSON.stringify(data) });
  });
};

module.exports = {
  getHomePage,
};
