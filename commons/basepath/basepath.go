package basepath

import (
	"os"
	"strings"
)

// Get returns the normalized BASE_PATH env var: "" for root, otherwise "/prefix" without a trailing slash.
func Get() string {
	value := strings.TrimSpace(os.Getenv("BASE_PATH"))
	value = strings.Trim(value, "/")
	if value == "" {
		return ""
	}
	return "/" + value
}

// With prefixes an absolute app path with the base path.
func With(path string) string {
	return Get() + path
}

// CookiePath is the path session cookies are scoped to.
func CookiePath() string {
	return Get() + "/"
}
