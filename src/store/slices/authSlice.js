import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks will be implemented in task 4.2
// export const signUp = createAsyncThunk('auth/signUp', async ({ email, password }) => {
//   // Implementation will be added in authentication task
// });

// export const signIn = createAsyncThunk('auth/signIn', async ({ email, password }) => {
//   // Implementation will be added in authentication task
// });

// export const signOut = createAsyncThunk('auth/signOut', async () => {
//   // Implementation will be added in authentication task
// });

const initialState = {
  user: null,
  isAuthenticated: false,
  isGuest: false,
  guestSessionId: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Synchronous actions
    setGuestMode: (state, action) => {
      state.isGuest = true;
      state.guestSessionId = action.payload.sessionId;
      state.isAuthenticated = false;
      state.user = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    resetAuth: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    // Async thunk cases will be added in task 4.2
    // builder
    //   .addCase(signUp.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(signUp.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.user = action.payload.user;
    //     state.isAuthenticated = true;
    //     state.isGuest = false;
    //   })
    //   .addCase(signUp.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   });
  },
});

export const { setGuestMode, clearError, resetAuth } = authSlice.actions;

// Selectors
export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectIsGuest = (state) => state.auth.isGuest;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;