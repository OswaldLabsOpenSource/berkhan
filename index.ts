import { config } from "dotenv";
config();

import axios from "axios";
import { Base64 } from "js-base64";
import { githubResponse } from "./interfaces";
const accessToken = <string>process.env.ACCESS_TOKEN;
let lastSha = "";

const getText = async (repo: string, path: string) => {
  const response = await axios.get(
    `https://api.github.com/repos/${repo}/contents/${path}?access_token=${accessToken}`
  );
  const data: githubResponse = response.data;
  lastSha = data.sha;
  return parseInt(Base64.decode(data.content).trim());
};

const updateText = async (repo: string, path: string, text: number) => {
  return await axios.put(
    `https://api.github.com/repos/${repo}/contents/${path}?access_token=${accessToken}`,
    {
      content: Base64.encode(text.toString()),
      sha: lastSha,
      message: "🤖 Automated commit from Berkhan"
    }
  );
};

const updateProcess = async () => {
  const repo = "OswaldLabsOpenSource/oswaldlabs.com";
  const file = "layouts/partials/data/reviews-agastya.html";
  const currentText: number = await getText(repo, file);
  return await updateText(repo, file, currentText + 1);
};

export { updateProcess, updateText, getText };
