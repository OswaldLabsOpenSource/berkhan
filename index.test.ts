import { getText } from "./index";

test("get the numeric content of a file", async () => {
  const i: number = await getText("OswaldBerkhan/example-repo", "number.html");
  expect(i).toBeGreaterThan(20);
});
