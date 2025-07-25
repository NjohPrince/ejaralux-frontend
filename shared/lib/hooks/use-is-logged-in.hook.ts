export function useIsLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  return !!document.cookie
    .split("; ")
    .find((row) => row.startsWith("logged_in=true"));
}
