const express = require("express");
const router = express.Router();

const db = require("../config/db");


// ===============================
// GET ALL PATIENTS
// ===============================
router.get("/", (req, res) => {

    const sql = "SELECT * FROM patient";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});


// ===============================
// GET PATIENT BY ID
// ===============================
router.get("/:id", (req, res) => {

    const id = req.params.id;

    const sql = "SELECT * FROM patient WHERE pid=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "Patient not found"
            });
        }

        res.json(result[0]);

    });

});


// ===============================
// ADD PATIENT
// ===============================
router.post("/", (req, res) => {

    const { pname, age, gender } = req.body;

    const sql = "INSERT INTO patient(pname,age,gender) VALUES(?,?,?)";

    db.query(sql, [pname, age, gender], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Patient Added Successfully",
            patientId: result.insertId
        });

    });

});


// ===============================
// UPDATE PATIENT
// ===============================
router.put("/:id", (req, res) => {

    const id = req.params.id;

    const { pname, age, gender } = req.body;

    const sql =
        "UPDATE patient SET pname=?, age=?, gender=? WHERE pid=?";

    db.query(sql, [pname, age, gender, id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Patient not found"
            });
        }

        res.json({
            message: "Patient Updated Successfully"
        });

    });

});


// ===============================
// DELETE PATIENT
// ===============================
router.delete("/:id", (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM patient WHERE pid=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Patient not found"
            });
        }

        res.json({
            message: "Patient Deleted Successfully"
        });

    });

});

module.exports = router;