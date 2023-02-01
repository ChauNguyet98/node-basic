import pool from "../configs/connectDB";

let getAllUsers = async (req, res) => {
  const [data, fields] = await pool.execute("SELECT * FROM `users`");
  return res.status(200).json({
    message: "OK",
    data: data,
  });
};

let addUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;

  if (!firstName || !lastName || !email || !address) {
    return res.status(500).json({
      message: "First name, last name, email and address are required!",
    });
  }

  await pool.execute(
    "INSERT INTO `users` (firstName, lastName, email, address) VALUES (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );

  return res.status(200).json({
    message: "Add success!",
  });
};

let detailUser = async (req, res) => {
  let id = req.params.id;
  let [user, fields] = await pool.execute(
    "SELECT * FROM `users` WHERE `id` = ?",
    [id]
  );

  return res.status(200).json({
    message: "OK",
    data: user[0],
  });
};

let updateUser = async (req, res) => {
  let id = req.params.id;
  let { firstName, lastName, email, address } = req.body;

  if (!firstName || !lastName || !email || !address) {
    return res.status(500).json({
      message: "First name, last name, email and address are required!",
    });
  }

  await pool.execute(
    "UPDATE `users` SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?",
    [firstName, lastName, email, address, id]
  );

  return res.status(200).json({
    message: "Update success!",
  });
};

let deleteUser = async (req, res) => {
  let id = req.params.id;
  await pool.execute("DELETE FROM `users` WHERE id = ?", [id]);

  return res.status(200).json({
    message: "Delete success!",
  });
};

module.exports = {
  getAllUsers,
  addUser,
  detailUser,
  updateUser,
  deleteUser,
};
