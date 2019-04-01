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
  const agastya = "layouts/partials/data/reviews-agastya.html";
  const augmenta11y = "layouts/partials/data/reviews-augmenta11y.html";
  await updateText(
    repo,
    agastya,
    (await getText(repo, agastya)) + Math.floor(Math.random() * 3)
  );
  await updateText(
    repo,
    augmenta11y,
    (await getText(repo, augmenta11y)) + Math.floor(Math.random() * 3)
  );
  return true;
};

export { updateProcess, updateText, getText };
