const express = require("express");
const router = express.Router();
const { getAllJobs, getJob, createjob, updateJob, deleteJob } = require("../controllers/jobs");

router.route("/").post(createjob).get(getAllJobs);
router.route("/:id").get(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
