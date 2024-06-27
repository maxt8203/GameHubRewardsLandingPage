import express from "express";
import indexRoutes from "./routes/indexRoutes";
import exphbs from "express-handlebars";
import path from "path";
import morgan from "morgan";



const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
    ".hbs",
    exphbs({
        layoutsDir: path.join(app.get("views"), "layouts"),
        dafaultLayout:"main",
        extname: ".hbs",
    })
);

app.set("view engine", ".hbs");



app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}
function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    next(err);
  }
}
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
  res.send("/");
}
 

app.use(indexRoutes);

export default app;