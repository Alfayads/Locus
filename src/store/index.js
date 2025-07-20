import { configureStore } from '@reduxjs/toolkit';

// Import slices (will be created in subsequent tasks)
// import authSlice from './slices/authSlice';
// import tasksSlice from './slices/tasksSlice';
// import projectsSlice from './slices/projectsSlice';

// Temporary reducer for initial setup
const initialReducer = {
  app: (state = { initialized: true }, action) => {
    switch (action.type) {
      default:
        return state;
    }
  }
};

export const store = configureStore({
  reducer: initialReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

// Type exports for TypeScript (if needed later)
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;