import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks will be implemented in task 6.1
// export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (filters) => {
//   // Implementation will be added in task management task
// });

// export const createTask = createAsyncThunk('tasks/createTask', async (taskData) => {
//   // Implementation will be added in task management task
// });

// export const updateTask = createAsyncThunk('tasks/updateTask', async ({ id, updates }) => {
//   // Implementation will be added in task management task
// });

// export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId) => {
//   // Implementation will be added in task management task
// });

const initialState = {
  tasks: [],
  guestTasks: [],
  loading: false,
  error: null,
  filters: {
    status: 'all',
    priority: 'all',
    assignee: 'all',
    project: 'all',
  },
  sortBy: 'created_at',
  sortOrder: 'desc',
  selectedTask: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Synchronous actions for guest tasks and UI state
    addGuestTask: (state, action) => {
      state.guestTasks.push(action.payload);
    },
    updateGuestTask: (state, action) => {
      const { id, updates } = action.payload;
      const taskIndex = state.guestTasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        state.guestTasks[taskIndex] = { ...state.guestTasks[taskIndex], ...updates };
      }
    },
    deleteGuestTask: (state, action) => {
      state.guestTasks = state.guestTasks.filter(task => task.id !== action.payload);
    },
    clearGuestTasks: (state) => {
      state.guestTasks = [];
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSorting: (state, action) => {
      state.sortBy = action.payload.sortBy;
      state.sortOrder = action.payload.sortOrder;
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Async thunk cases will be added in task 6.1
    // builder
    //   .addCase(fetchTasks.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(fetchTasks.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.tasks = action.payload;
    //   })
    //   .addCase(fetchTasks.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   });
  },
});

export const {
  addGuestTask,
  updateGuestTask,
  deleteGuestTask,
  clearGuestTasks,
  setFilters,
  setSorting,
  setSelectedTask,
  clearError,
} = tasksSlice.actions;

// Selectors
export const selectTasks = (state) => state.tasks.tasks;
export const selectGuestTasks = (state) => state.tasks.guestTasks;
export const selectAllTasks = (state) => {
  // Combine authenticated and guest tasks based on auth state
  const isGuest = state.auth?.isGuest || false;
  return isGuest ? state.tasks.guestTasks : state.tasks.tasks;
};
export const selectTasksLoading = (state) => state.tasks.loading;
export const selectTasksError = (state) => state.tasks.error;
export const selectTaskFilters = (state) => state.tasks.filters;
export const selectTaskSorting = (state) => ({
  sortBy: state.tasks.sortBy,
  sortOrder: state.tasks.sortOrder,
});
export const selectSelectedTask = (state) => state.tasks.selectedTask;

export default tasksSlice.reducer;