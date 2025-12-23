// utils/auth.js
// Handles authentication using LocalStorage (same logic as original auth.js)

export function signupUser({ firstName, lastName, email, password }) {
  if (!firstName || !lastName || !email || !password) {
    return { success: false, message: "⚠️ Please fill all fields." };
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return { success: false, message: "⚠️ This email is already registered." };
  }

  const newUser = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  return { success: true };
}

export function loginUser({ email, password }) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return { success: false, message: "❌ Invalid email or password." };
  }

  localStorage.setItem("loggedInUser", JSON.stringify(user));
  return { success: true, user };
}

export function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("loggedInUser"));
}

export function logoutUser() {
  localStorage.removeItem("loggedInUser");
}
