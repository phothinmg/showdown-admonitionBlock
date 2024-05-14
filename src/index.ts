import Showdown, { ShowdownExtension } from "showdown";

const showdownAdmonitionBlock: ShowdownExtension | ShowdownExtension[] = [
  {
    type: "output",

    /**
     * This is the filter function that will be called by Showdown whenever
     * it encounters a paragraph that matches the regex defined in the
     * extension object below.
     *
     * @param {string} text The text to be processed by the filter
     * @param {any} converter The Showdown converter object
     * @param {any} options The options passed to Showdown
     * @returns {string} The text with the admonition block markup replaced
     */
    filter: (text: string, converter: any, options: any): string => {
      const regex = /<p>::(NOTE|TIP|WARNING|IMPORTANT)::(.*?)<\/p>/g;
      return text.replace(
        regex,
        /**
         * This function is responsible for replacing the paragraph markup
         * with the admonition block markup.
         *
         * @param {string} match The entire paragraph match
         * @param {string} type The type of admonition block (e.g. NOTE, TIP, etc.)
         * @param {string} extractedText The text inside the admonition block
         * @returns {string} The admonition block HTML
         */
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
