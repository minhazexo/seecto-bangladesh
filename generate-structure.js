const fs = require("fs");
const path = require("path");

const folders = [
  "src/assets/images",
  "src/assets/styles",
  "src/components/common",
  "src/components/sections",
  "src/constants",
  "src/pages"
];

const files = {
  "src/assets/styles/global.css": "/* Global Styles */",

  "src/components/common/Button.jsx": "// Button component",
  "src/components/common/Footer.jsx": "// Footer component",
  "src/components/common/Header.jsx": "// Header component",
  "src/components/common/Layout.jsx": "// Layout component",

  "src/components/sections/AboutIntro.jsx": "// AboutIntro section",
  "src/components/sections/FocusAreas.jsx": "// FocusAreas section",
  "src/components/sections/GetInvolved.jsx": "// GetInvolved section",
  "src/components/sections/Hero.jsx": "// Hero section",
  "src/components/sections/NewsEvents.jsx": "// NewsEvents section",
  "src/components/sections/TeamSection.jsx": "// TeamSection section",
  "src/components/sections/Testimonials.jsx": "// Testimonials section",

  "src/constants/focusAreas.js": "// Focus Areas Data",
  "src/constants/newsEvents.js": "// News & Events Data",
  "src/constants/teamMembers.js": "// Team Members Data",
  "src/constants/testimonials.js": "// Testimonials Data",

  "src/pages/Home.jsx": "// Home Page",
  "src/pages/About.jsx": "// About Page",
  "src/pages/Programs.jsx": "// Programs Page",
  "src/pages/News.jsx": "// News Page",
  "src/pages/GetInvolved.jsx": "// Get Involved Page",
  "src/pages/Contact.jsx": "// Contact Page",

  "src/App.js": "// App root",
  "src/index.js": "// ReactDOM render"
};

// Create folders
folders.forEach((folder) => {
  fs.mkdirSync(path.resolve(folder), { recursive: true });
  console.log("📁 Folder created:", folder);
});

// Create files with default content
Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.resolve(filePath), content);
  console.log("📄 File created:", filePath);
});
