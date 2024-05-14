import Showdown, { ShowdownExtension } from "showdown";

const showdownAdmonitionBlock: ShowdownExtension | ShowdownExtension[] = [
  {
    type: "output",

    filter: (text: string, converter: any, options: any) => {
      const regex = /<p>::(NOTE|TIP|WARNING|IMPORTANT)::(.*?)<\/p>/g;
      return text.replace(
        regex,
        (match: string, type: string, extractedText: string) => {
          const className = type.toLowerCase();
          let emoji;
          if (type === "TIP") {
            emoji = "💡";
          } else if (type === "NOTE") {
            emoji = "📝";
          } else if (type === "WARNING") {
            emoji = "⚠️";
          } else if (type === "IMPORTANT") {
            emoji = "❗";
          } else {
            emoji = " ";
          }
          return `<div class="${className}"><span style="margin-right: 7px">${emoji}</span> ${extractedText} </div>`;
        }
      );
    },
  },
  {
    type: "output",
    filter: (text: string, converter: any, options: any) => {
      const scriptTag = `
        <script>
              function loadTheme(){
              const themeLink = "https://cdn.jsdelivr.net/gh/phothinmg/ptm@main/showdown/sblock.min.css";
              const themeEl = window.document.createElement("link");
              themeEl.setAttribute("rel", "stylesheet");
              themeEl.setAttribute("href", themeLink);
              window.document.head.appendChild(themeEl);
              };
              loadTheme();
        </script>
            `;
      return text + scriptTag;
    },
  },
];

Showdown.extension("showdownAdmonitionBlock", showdownAdmonitionBlock);

export default showdownAdmonitionBlock;
