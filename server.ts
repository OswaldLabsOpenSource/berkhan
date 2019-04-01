import express, { Response, Request } from "express";
const app = express();

import { updateNumber } from "./index";

app.get("/", (req: Request, res: Response) => res.json({ hello: "berkhan" }));

app.get("/update", (req: Request, res: Response) => {
  updateNumber()
    .then(() => res.json({ updated: true }))
    .catch(() => res.json({ update: false, error: true }));
});

app.listen(process.env.PORT || 7002, () => console.log("Berkhan is ready."));
