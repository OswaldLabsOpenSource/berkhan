import { getText, updateText } from "./index";

test("get the numeric content of a file", async () => {
  const i: number = await getText("OswaldBerkhan/example-repo", "number.html");
  expect(i).toBeGreaterThan(20);
});

test("bumb the number of a file", async () => {
  const i: number = await getText("OswaldBerkhan/example-repo", "number.html");
  await updateText("OswaldBerkhan/example-repo", "number.html", i + 1);
  const j: number = await getText("OswaldBerkhan/example-repo", "number.html");
  expect(j).toBe(i + 1);
});
