import express, { Response, Request } from "express";
const app = express();

// import { followProcess, retweetProcess } from "./index";

app.get("/", (req: Request, res: Response) => res.json({ hello: "world" }));

// app.get("/retweet", (req: Request, res: Response) => {
//   retweetProcess()
//     .then(() => res.json({ retweeted: true }))
//     .catch(error => res.json({ error }));
// });

app.listen(process.env.PORT || 7002, () =>
  console.log("Berkhan is ready.")
);
