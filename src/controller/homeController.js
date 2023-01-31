import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
  let data = [];
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    data = results.map((row) => {
      return row;
    });
    return res.render("index.ejs", { dataUser: data, test: "List User" });
  });
};

module.exports = {
  getHomePage,
};
