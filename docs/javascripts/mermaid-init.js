// Monochrome house rule for Mermaid: lines/text in fg colour, fill = bg colour.
// Theme flips automatically with MkDocs Material's scheme toggle.

function mkMermaidTheme() {
  const isDark = document.body.getAttribute("data-md-color-scheme") === "slate";
  const fg = isDark ? "#ffffff" : "#000000";
  const bg = isDark ? "#000000" : "#ffffff";
  return {
    startOnLoad: false,
    theme: "base",
    themeVariables: {
      fontFamily: "inherit",
      fontSize: "14px",
      primaryColor: bg,
      primaryTextColor: fg,
      primaryBorderColor: fg,
      secondaryColor: bg,
      secondaryTextColor: fg,
      secondaryBorderColor: fg,
      tertiaryColor: bg,
      tertiaryTextColor: fg,
      tertiaryBorderColor: fg,
      lineColor: fg,
      textColor: fg,
      mainBkg: bg,
      background: bg,
      nodeBorder: fg,
      clusterBkg: bg,
      clusterBorder: fg,
      edgeLabelBackground: bg,
      arrowheadColor: fg
    },
    flowchart: {
      curve: "basis",
      htmlLabels: true,
      padding: 20,
      nodeSpacing: 55,
      rankSpacing: 65
    }
  };
}

function renderMermaid() {
  mermaid.initialize(mkMermaidTheme());
  const blocks = document.querySelectorAll(".mermaid:not([data-processed])");
  blocks.forEach((b) => {
    if (b.dataset.src) return;
    b.dataset.src = b.textContent;
  });
  // Reset so re-render on theme flip works
  blocks.forEach((b) => {
    b.removeAttribute("data-processed");
    b.innerHTML = b.dataset.src;
  });
  mermaid.run({ querySelector: ".mermaid" });
}

document$.subscribe(function () {
  renderMermaid();
});

// Re-render when theme flips
const themeObserver = new MutationObserver(() => renderMermaid());
themeObserver.observe(document.body, {
  attributes: true,
  attributeFilter: ["data-md-color-scheme"]
});
