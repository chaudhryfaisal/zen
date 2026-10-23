import { test } from "node:test";
import assert from "node:assert/strict";

globalThis.window = { ZEN_BASE_PATH: "/notes/", location: { pathname: "/notes/notes/42" } };
const { withBasePath, stripBasePath, getCurrentPath } = await import("./basePath.js");

test("withBasePath prefixes app paths, even ones that look like the base", () => {
  assert.equal(withBasePath("/"), "/notes/");
  assert.equal(withBasePath("/notes/new"), "/notes/notes/new");
  assert.equal(withBasePath("/api/v1/notes/"), "/notes/api/v1/notes/");
  assert.equal(withBasePath("https://example.com/x"), "https://example.com/x");
  assert.equal(withBasePath("//cdn.example.com/x"), "//cdn.example.com/x");
  assert.equal(withBasePath("relative"), "relative");
});

test("stripBasePath and getCurrentPath return app paths", () => {
  assert.equal(stripBasePath("/notes"), "/");
  assert.equal(stripBasePath("/notes/"), "/");
  assert.equal(stripBasePath("/notes/notes/42"), "/notes/42");
  assert.equal(stripBasePath("/notesx"), "/notesx");
  assert.equal(getCurrentPath(), "/notes/42");
});
