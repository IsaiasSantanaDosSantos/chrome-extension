const fs = require("fs");
const path = require("path");

const manifest = {
  manifest_version: 2,
  name: "React Chrome Extension",
  version: "1.0",
  description: "A simple Chrome extension using React.",
  permissions: ["storage", "tabs", "activeTab"],
  background: {
    scripts: ["background.js"],
    persistent: false,
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["content.js"],
    },
  ],
  browser_action: {
    default_popup: "popup.html",
    default_icon: {
      16: "icon16.png",
      48: "icon48.png",
      128: "icon128.png",
    },
  },
};

fs.writeFileSync(
  path.join(__dirname, "..", "build", "manifest.json"),
  JSON.stringify(manifest, null, 2)
);

console.log("Manifest file copied!");
