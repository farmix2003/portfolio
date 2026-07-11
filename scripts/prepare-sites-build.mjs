import { copyFile, mkdir, writeFile } from "node:fs/promises";

const serverSource = String.raw`import { createReadStream, existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../client", import.meta.url));

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
};

function resolvePath(pathname) {
  const decoded = decodeURIComponent(pathname.split("?")[0] || "/");
  const normalized = normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const requested = join(root, normalized === "/" ? "index.html" : normalized);

  if (existsSync(requested)) {
    return requested;
  }

  return join(root, "index.html");
}

function handleNodeRequest(request, response) {
  const filePath = resolvePath(request.url ?? "/");
  const stream = createReadStream(filePath);

  response.setHeader("content-type", contentTypes[extname(filePath)] ?? "application/octet-stream");
  stream.on("error", () => {
    response.statusCode = 500;
    response.end("Internal Server Error");
  });
  stream.pipe(response);
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const filePath = resolvePath(url.pathname);
    const file = await import("node:fs/promises").then((fs) => fs.readFile(filePath));

    return new Response(file, {
      headers: {
        "content-type": contentTypes[extname(filePath)] ?? "application/octet-stream",
      },
    });
  },
};

if (process.env.PORT) {
  createServer(handleNodeRequest).listen(Number(process.env.PORT), "0.0.0.0");
}
`;

await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });
await writeFile("dist/server/index.js", serverSource);
await copyFile(".openai/hosting.json", "dist/.openai/hosting.json");
