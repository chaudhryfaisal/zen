package basepath

import "testing"

func TestGet(t *testing.T) {
	cases := map[string]string{"": "", "/": "", "notes": "/notes", "/notes": "/notes", "/notes/": "/notes", " /a/b/ ": "/a/b"}
	for input, expected := range cases {
		t.Setenv("BASE_PATH", input)
		if got := Get(); got != expected {
			t.Errorf("BASE_PATH=%q: got %q, want %q", input, got, expected)
		}
	}
}
