import pool from "../configs/connectDB";

let getHomePage = async (req, res) => {
  let data = [];
  const [rows, fields] = await pool.execute("SELECT * FROM `users`");
  return res.render("index.ejs", { dataUser: rows, test: "List User" });
};

let getDetailPage = async (req, res) => {
  let id = req.params.id;
  let [user, fields] = await pool.execute(
    "SELECT * FROM `users` WHERE `id` = ?",
    [id]
  );
  return res.send(JSON.stringify(user));
};

module.exports = {
  getHomePage,
  getDetailPage,
};
