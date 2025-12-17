export function isLoggedIn() {
  return localStorage.getItem("token");
}

export function loginUser() {
  localStorage.setItem("token", "dummy");
}

export function logoutUser() {
  localStorage.removeItem("token");
}
