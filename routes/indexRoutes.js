import { Router } from "express";
import Dates from '../models/Dates';

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/dates/add", async (req, res, next) => {
  let dates;
  let error;
  try {
    dates = Dates(req.body);
    const datesEmails = await dates.save();
    console.log(datesEmails);
    res.redirect("/");
  } catch (errort) {
    console.log(errort?.message);
    if (errort?.message.includes("duplicate")) {
      console.log("error");
      error = "Email already exist";
      //res.redirect("/");
      return next("Email already exist");
    }
  }
});


export default router;
