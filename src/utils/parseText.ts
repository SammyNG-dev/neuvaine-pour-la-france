// src/utils/parseText.js

import testamentsRaw from "../data/testaments.txt?raw";

const testamentsSplitted = testamentsRaw.split("\n");

type ObjectParsedTextType = {
  id: number;
  title: string;
  content: string[];
};

function parseText(lines: string[], keyword: string) {
  const list: ObjectParsedTextType[] = [];
  let currentSection: ObjectParsedTextType | null | undefined = null;

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith(keyword)) {
      currentSection = {
        id: list.length + 1,
        title: trimmed,
        content: [],
      };
      list.push(currentSection);
    } else if (currentSection && trimmed !== "") {
      currentSection.content.push(line);
    }
  });

  return list
}

export const testamentsParsed = parseText(testamentsSplitted, "Testament");
