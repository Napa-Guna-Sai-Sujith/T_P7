const express = require("express");
const router = express.Router();

const db = require("../config/db");


// ===============================
// GET ALL STAFF
// ===============================
router.get("/", (req, res) => {

    const sql = "SELECT * FROM staff";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});


// ===============================
// GET STAFF BY ID
// ===============================
router.get("/:id", (req, res) => {

    const id = req.params.id;

    const sql = "SELECT * FROM staff WHERE eid=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "Staff not found"
            });
        }

        res.json(result[0]);

    });

});


// ===============================
// ADD STAFF
// ===============================
router.post("/", (req, res) => {

    const { ename, age, gender } = req.body;

    const sql = "INSERT INTO staff(ename,age,gender) VALUES(?,?,?)";

    db.query(sql, [ename, age, gender], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Staff Added Successfully",
            staffId: result.insertId
        });

    });

});


// ===============================
// UPDATE STAFF
// ===============================
router.put("/:id", (req, res) => {

    const id = req.params.id;

    const { ename, age, gender } = req.body;

    const sql =
        "UPDATE staff SET ename=?, age=?, gender=? WHERE eid=?";

    db.query(sql, [ename, age, gender, id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Staff not found"
            });
        }

        res.json({
            message: "Staff Updated Successfully"
        });

    });

});


// ===============================
// DELETE STAFF
// ===============================
router.delete("/:id", (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM staff WHERE eid=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Staff not found"
            });
        }

        res.json({
            message: "Staff Deleted Successfully"
        });

    });

});

module.exports = router;