import { useEffect } from "react";

export default function Debug() {
  useEffect(() => {
    console.log("====== DEBUG START ======");

    // BODY
    const body = getComputedStyle(document.body);
    console.log("BODY font-size:", body.fontSize);
    console.log("BODY font-family:", body.fontFamily);
    console.log("BODY background:", body.backgroundColor);

    // TAILWIND CHECK
    const test = document.createElement("div");
    test.className = "text-red-500";
    document.body.appendChild(test);
    console.log("Tailwind test color:", getComputedStyle(test).color);
    test.remove();

    // CONTAINER
    const container = document.querySelector(".container");
    if (container) {
      const c = getComputedStyle(container);
      console.log("Container width:", container.offsetWidth);
      console.log("Container padding:", c.padding);
      console.log("Container maxWidth:", c.maxWidth);
    } else {
      console.log("❌ container NOT FOUND");
    }

    // SECTION
    const section = document.querySelector("section");
    if (section) {
      const s = getComputedStyle(section);
      console.log("Section padding:", s.paddingTop, s.paddingBottom);
    } else {
      console.log("❌ section NOT FOUND");
    }

    // BUTTON
    const btn = document.querySelector("button, .btn");
    if (btn) {
      const b = getComputedStyle(btn);
      console.log("Button bg:", b.backgroundImage || b.backgroundColor);
      console.log("Button padding:", b.padding);
    } else {
      console.log("❌ button NOT FOUND");
    }

    // HERO IMAGE
    const img = document.querySelector("img");
    if (img) {
      console.log("Image size:", img.width, img.height);
    }

    console.log("====== DEBUG END ======");
  }, []);

  return null;
}