import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const todayTodoList = [];
const workTodoList = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { todayTodoList });
});
app.post("/", (req, res) => {
  const task = req.body.todayListItem;
  todayTodoList.push(task);
  res.redirect("/");
});

app.get("/work", (req, res) => {
  res.render("work.ejs", { workTodoList });
});
app.post("/work", (req, res) => {
  const task = req.body.workListItem;
  workTodoList.push(task);
  res.redirect("/work");
});

app.listen(port, () => {
  console.log("Port listening on 3000!");
});
