import { config } from "dotenv";
config();

import axios from "axios";
import { Base64 } from "js-base64";
const accessToken = <string>process.env.ACCESS_TOKEN;

const getText = async (repo: string, path: string) => {
  const response: any = await axios.get(
    `https://api.github.com/repos/${repo}/contents/${path}?access_token=${accessToken}`
  );
  return parseInt(Base64.decode(response.data.content).trim());
};

const updateNumber = async () => {
  // const currentText: number = await getText(
  //   "OswaldLabsOpenSource/oswaldlabs.com",
  //   "layouts/partials/data/reviews-agastya.html"
  // );
  const currentText: number = await getText(
    "OswaldBerkhan/example-repo",
    "number.html"
  );
  console.log("okay" + currentText);
  return true;
};

export { updateNumber, getText };
