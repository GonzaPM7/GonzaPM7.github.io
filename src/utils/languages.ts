export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "!bg-[#f6ece1]",
    iconName: "mysql",
  },
  wordpress: {
    name: "Wordpress",
    iconName: "wordpress",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  python: {
    name: "Python",
    iconName: "python",
  },  
  unity: {
    name: "Unity",
    iconName: "unity",
  },
  blender: {
    name: "Blender",
    iconName: "blender",
  },  
  cplusplus: {
    name: "C++",
    iconName: "c-plusplus",
  }, 
  c: {
    name: "C",
    iconName: "c",
  },
  csharp: {
    name: "C#",
    iconName: "csharp",
  },
  photoshop: {
    name: "Photoshop",
    iconName: "photoshop",
  },  
  slack: {
    name: "Slack",
    iconName: "slack",
  }, 
  unreal: {
    name: "Unreal Engine",
    iconName: "unreal",
  },
  visualstudio: {
    name: "Visual Studio",
    iconName: "visual-studio",
  },
  davinci: {
    name: "DaVinci Resolve",
    iconName: "davinci",
  },
  opentoonz: {
    name: "OpenToonz",
    iconName: "opentoonz",
  },
  githubsvg: {
    name: "GitHub",
    iconName: "github-svg",
  },
  procreate: {
    name: "Procreate",
    iconName: "procreate",
  },
  logoHome: {
    name: "Logo",
    iconName: "logo",
  },
  mando: {
    name: "Mando",
    iconName: "consola",
  },
  animacion: {
    name: "Animacion",
    iconName: "animacion",
  },
  educacion: {
    name: "Educacion",
    iconName: "educacion",
  },
  java: {
    name: "Java",
    iconName: "java",
  }
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
}; 