import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import slices
import authSlice from './slices/authSlice';
import tasksSlice from './slices/tasksSlice';
// import projectsSlice from './slices/projectsSlice'; // Will be created in task 9.1

// Temporary app reducer for basic app state
const appReducer = (state = { initialized: true }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Root reducer combining all feature slices
const rootReducer = combineReducers({
  app: appReducer,
  auth: authSlice,
  tasks: tasksSlice,
  // projects: projectsSlice, // Will be added in task 9.1
});

// Redux persist configuration
const persistConfig = {
  key: 'root',
  storage,
  // Whitelist specific reducers to persist
  whitelist: ['auth', 'tasks'], // Don't persist app state
  // Blacklist sensitive data if needed
  blacklist: [],
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with proper middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
          'persist/PURGE',
          'persist/FLUSH',
          'persist/PAUSE',
        ],
        // Ignore redux-persist state paths
        ignoredActionsPaths: ['meta.arg', 'payload.timestamp'],
        ignoredPaths: ['_persist'],
      },
      // Enable thunk middleware (included by default)
      thunk: true,
    }),
  // Enable Redux DevTools in development
  devTools: process.env.NODE_ENV !== 'production',
});

// Create persistor for redux-persist
export const persistor = persistStore(store);

// Export store and persistor for use throughout the app
// Note: Type definitions would go here if using TypeScript
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;