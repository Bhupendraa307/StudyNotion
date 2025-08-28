// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   signupData: null,
//   loading: false,
//   token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialState,
//   reducers: {
//     setSignupData(state, value) {
//       state.signupData = value.payload;
//     },
//     setLoading(state, value) {
//       state.loading = value.payload;
//     },
//     setToken(state, value) {
//       state.token = value.payload;
//     },
//   },
// });

// export const { setSignupData, setLoading, setToken } = authSlice.actions;

// export default authSlice.reducer;





import { createSlice } from "@reduxjs/toolkit";

// --- LocalStorage Helpers ---
function loadToken() {
  const stored = localStorage.getItem("token");
  if (!stored) return null;

  try {
    // Try JSON.parse in case it was stringified
    return JSON.parse(stored);
  } catch {
    // If not JSON, return as raw string (JWT case)
    return stored;
  }
}

function saveToken(token) {
  if (typeof token === "string") {
    localStorage.setItem("token", token);
  } else {
    localStorage.setItem("token", JSON.stringify(token));
  }
}

function removeToken() {
  localStorage.removeItem("token");
}

// --- Initial State ---
const initialState = {
  signupData: null,
  loading: false,
  token: loadToken(),
};

// --- Slice ---
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignupData(state, action) {
      state.signupData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
      saveToken(action.payload);
    },
    clearToken(state) {
      state.token = null;
      removeToken();
    },
  },
});

// --- Actions ---
export const { setSignupData, setLoading, setToken, clearToken } = authSlice.actions;

// --- Selectors ---
export const selectAuthToken = (state) => state.auth.token;

export const selectDecodedToken = (state) => {
  const token = state.auth.token;
  if (!token || typeof token !== "string") return null;

  try {
    const base64Payload = token.split(".")[1];
    return JSON.parse(atob(base64Payload));
  } catch {
    return null;
  }
};

export default authSlice.reducer;
