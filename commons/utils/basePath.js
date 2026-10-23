const basePath = (typeof window !== "undefined" && window.ZEN_BASE_PATH ? window.ZEN_BASE_PATH : "").replace(/\/+$/, "");

export function withBasePath(path) {
  if (!basePath || typeof path !== "string" || !path.startsWith("/") || path.startsWith("//")) {
    return path;
  }
  return basePath + path;
}

export function stripBasePath(path) {
  if (basePath && (path === basePath || path.startsWith(basePath + "/"))) {
    return path.slice(basePath.length) || "/";
  }
  return path;
}

export function getCurrentPath() {
  return stripBasePath(window.location.pathname);
}
