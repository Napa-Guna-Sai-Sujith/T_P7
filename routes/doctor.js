const express = require("express");
const router = express.Router();

const db = require("../config/db");


// ===============================
// GET ALL DOCTORS
// ===============================
router.get("/", (req, res) => {

    const sql = "SELECT * FROM doctor";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});


// ===============================
// GET DOCTOR BY ID
// ===============================
router.get("/:id", (req, res) => {

    const id = req.params.id;

    const sql = "SELECT * FROM doctor WHERE did=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "Doctor not found"
            });
        }

        res.json(result[0]);

    });

});


// ===============================
// ADD NEW DOCTOR
// ===============================
router.post("/", (req, res) => {

    const { dname, age, gender } = req.body;

    const sql = "INSERT INTO doctor(dname,age,gender) VALUES(?,?,?)";

    db.query(sql, [dname, age, gender], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Doctor Added Successfully",
            doctorId: result.insertId
        });

    });

});


// ===============================
// UPDATE DOCTOR
// ===============================
router.put("/:id", (req, res) => {

    const id = req.params.id;

    const { dname, age, gender } = req.body;

    const sql =
        "UPDATE doctor SET dname=?, age=?, gender=? WHERE did=?";

    db.query(sql, [dname, age, gender, id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {

            return res.status(404).json({
                message: "Doctor not found"
            });

        }

        res.json({
            message: "Doctor Updated Successfully"
        });

    });

});


// ===============================
// DELETE DOCTOR
// ===============================
router.delete("/:id", (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM doctor WHERE did=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {

            return res.status(404).json({
                message: "Doctor not found"
            });

        }

        res.json({
            message: "Doctor Deleted Successfully"
        });

    });

});

module.exports = router;