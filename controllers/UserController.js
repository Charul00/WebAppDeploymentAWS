const db = require("../config/db");

exports.getAllUsers = (req, res) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).send("Error fetching users");
    }
    res.render("users/index", { users: results });
  });
};

exports.createUserForm = (req, res) => {
  res.render("users/create");
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const query = "INSERT INTO users (name, email) VALUES (?, ?)";

  db.query(query, [name, email], (err, result) => {
    if (err) {
      console.error("Error creating user:", err);
      return res.status(500).send("Error creating user");
    }
    res.redirect("/users");
  });
};

exports.editUserForm = (req, res) => {
  const query = "SELECT * FROM users WHERE id = ?";

  db.query(query, [req.params.id], (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.status(500).send("Error fetching user");
    }

    if (results.length === 0) {
      return res.status(404).send("User not found");
    }

    res.render("users/edit", { user: results[0] });
  });
};

exports.updateUser = (req, res) => {
  const { name, email } = req.body;
  const query = "UPDATE users SET name = ?, email = ? WHERE id = ?";

  db.query(query, [name, email, req.params.id], (err, result) => {
    if (err) {
      console.error("Error updating user:", err);
      return res.status(500).send("Error updating user");
    }
    res.redirect("/users");
  });
};

exports.deleteUser = (req, res) => {
  const query = "DELETE FROM users WHERE id = ?";

  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      console.error("Error deleting user:", err);
      return res.status(500).send("Error deleting user");
    }
    res.redirect("/users");
  });
};
