import pool from "../configs/connectDB";

let getHomePage = async (req, res) => {
  let data = [];
  const [rows, fields] = await pool.execute("SELECT * FROM `users`");
  return res.render("index.ejs", { dataUser: rows, test: "List User" });
};

let detailUser = async (req, res) => {
  let id = req.params.id;
  let [user, fields] = await pool.execute(
    "SELECT * FROM `users` WHERE `id` = ?",
    [id]
  );
  return res.render("update-user.ejs", { detailUser: user[0] });
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;
  await pool.execute(
    "INSERT INTO `users` (firstName, lastName, email, address) VALUES (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );
  return res.redirect("/api/v1");
};

let updateUser = async (req, res) => {
  let id = req.params.id;
  let { firstName, lastName, email, address } = req.body;

  await pool.execute(
    "UPDATE `users` SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?",
    [firstName, lastName, email, address, id]
  );

  return res.redirect("/api/v1");
};

let deleteUser = async (req, res) => {
  let id = req.body.id;
  await pool.execute("DELETE FROM `users` WHERE id = ?", [id]);
  return res.redirect("/api/v1");
};

module.exports = {
  getHomePage,
  detailUser,
  createNewUser,
  updateUser,
  deleteUser,
};
