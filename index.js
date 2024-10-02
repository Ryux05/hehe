const { default: axios } = require("axios");

const header = {
  Referer: "https://linkvertise.com/",
  "User-Agent":
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36",
};

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fluxus() {
  await delay(3000);
  console.log("wait 3s");
  const nnn = await axios(
    "https://flux.li/android/external/start.php?HWID=069aa0d6d317009af2a3d9a3188d90719aeade8645e485b49fe857c0af2f5323ef3d7c8a8165b5fa04ed45b9a15440f9",
    { headers: header }
  );

  console.log(nnn.data);
}
fluxus();
