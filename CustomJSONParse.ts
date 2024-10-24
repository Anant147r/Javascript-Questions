export type TokenType =
  | "BraceOpen"
  | "BraceClose"
  | "BracketOpen"
  | "BracketClose"
  | "String"
  | "Number"
  | "Comma"
  | "Colon"
  | "True"
  | "False"
  | "Null";

export interface Token {
  type: TokenType;
  value: string;
}

export type ASTNode =
  | { type: "Object"; value: { [key: string]: ASTNode } }
  | { type: "Array"; value: ASTNode[] }
  | { type: "String"; value: string }
  | { type: "Number"; value: number }
  | { type: "Boolean"; value: boolean }
  | { type: "Null" };

//parser.ts
export const parser = (tokens: Token[]): ASTNode => {
  if (!tokens.length) {
    throw new Error("Nothing to parse. Exiting!");
  }
  let current = 0;

  function advance() {
    return tokens[++current];
  }

  function parseValue(): ASTNode {
    const token = tokens[current];
    switch (token.type) {
      case "String":
        return { type: "String", value: token.value };
      case "Number":
        return { type: "Number", value: Number(token.value) };
      case "True":
        return { type: "Boolean", value: true };
      case "False":
        return { type: "Boolean", value: false };
      case "Null":
        return { type: "Null" };
      case "BraceOpen":
        return parseObject();
      case "BracketOpen":
        return parseArray();
      default:
        throw new Error(`Unexpected token type: ${token.type}`);
    }
  }

  function parseObject() {
    const node: ASTNode = { type: "Object", value: {} };
    let token = advance(); // Eat '{'

    while (token.type !== "BraceClose") {
      if (token.type === "String") {
        const key = token.value;
        token = advance(); // Eat key
        if (token.type !== "Colon")
          throw new Error("Expected : in key-value pair");
        token = advance(); // Eat ':'
        const value = parseValue(); // Recursively parse the value
        node.value[key] = value;
      } else {
        throw new Error(
          `Expected String key in object. Token type: ${token.type}`
        );
      }
      token = advance(); // Eat value or ','
      if (token.type === "Comma") token = advance(); // Eat ',' if present
    }

    return node;
  }

  function parseArray() {
    const node: ASTNode = { type: "Array", value: [] };
    let token = advance(); // Eat '{'

    while (token.type !== "BracketClose") {
      const value = parseValue();
      node.value.push(value);

      token = advance(); // Eat value or ','
      if (token.type === "Comma") token = advance(); // Eat ',' if present
    }

    return node;
  }

  const AST = parseValue();

  return AST;
};
