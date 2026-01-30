"use client";

import { useLayoutEffect } from "react";

const NO_ITALIC_CSS = `
  #obesity-app,#obesity-app *,#obesity-app *::before,#obesity-app *::after,
  html,body,body *,body *::before,body *::after,em,i{font-style:normal!important}
  *{font-synthesis:none!important}
`;

export function NoItalic() {
  useLayoutEffect(() => {
    const id = "no-italic-inject";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = NO_ITALIC_CSS;
    document.head.appendChild(style);
  }, []);
  return null;
}
