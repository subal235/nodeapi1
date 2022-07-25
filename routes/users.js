import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";
const users = [
  {
    firstname: "subal",
    lastname: "bain",
    age: 225,
  },
  {
    firstname: "subal1",
    lastname: "bain1",
    age: 25,
  },
];
router.get("/users", (req, res) => {
  res.send(users);
});

router.get("/:ID", (req, res) => {
  console.log("si");
  const { ID } = req.params;
  res.send(ID);
});
router.post("/users", (req, res) => {
  const userID = uuidv4();

  console.log("subal");
  console.log(req.body);
  users.push({ ...req.body, id: userID });
  console.log("done");
  res.send(users);
});

export default router;
