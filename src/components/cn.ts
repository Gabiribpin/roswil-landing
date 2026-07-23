/** Junta classes e evita conflitos simples de utilitários Tailwind (ex.: text-white vs text-ink). */
export function twMerge(...classes: Array<string | false | null | undefined>) {
  const tokens = classes
    .filter(Boolean)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean);

  const result: string[] = [];
  const lastIndexByKey = new Map<string, number>();

  for (const token of tokens) {
    const key = utilityKey(token);
    if (key && lastIndexByKey.has(key)) {
      result[lastIndexByKey.get(key)!] = "";
    }
    lastIndexByKey.set(key ?? token, result.length);
    result.push(token);
  }

  return result.filter(Boolean).join(" ");
}

function utilityKey(token: string): string | null {
  const bare = token.replace(/^!/, "");
  const parts = bare.split(":");
  const utility = parts[parts.length - 1];
  const prefix = parts.slice(0, -1).join(":");

  const groups = [
    "text-",
    "bg-",
    "border-",
    "shadow-",
    "ring-",
    "ring-offset-",
  ];

  for (const group of groups) {
    if (utility.startsWith(group)) {
      return `${prefix}:${group}`;
    }
  }

  return null;
}
