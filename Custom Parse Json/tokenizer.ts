export const tokenizer = (input: string): Token[] => {
  let current = 0;
  const tokens: Token[] = [];

  while (current < input.length) {
    let char = input[current];

    if (char === "{") {
      tokens.push({ type: "BraceOpen", value: char });
      current++;
      continue;
    }

    if (char === "}") {
      tokens.push({ type: "BraceClose", value: char });
      current++;
      continue;
    }

    if (char === "[") {
      tokens.push({ type: "BracketOpen", value: char });
      current++;
      continue;
    }
    if (char === "]") {
      tokens.push({ type: "BracketClose", value: char });
      current++;
      continue;
    }

    if (char === ":") {
      tokens.push({ type: "Colon", value: char });
      current++;
      continue;
    }

    if (char === ",") {
      tokens.push({ type: "Comma", value: char });
      current++;
      continue;
    }
  }
};
