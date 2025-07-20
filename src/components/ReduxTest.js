'use client';

import { useSelector, useDispatch } from 'react-redux';
import { setGuestMode, resetAuth, selectAuth } from '@/store/slices/authSlice';
import { addGuestTask, clearGuestTasks, selectGuestTasks } from '@/store/slices/tasksSlice';

export default function ReduxTest() {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const guestTasks = useSelector(selectGuestTasks);

  const handleSetGuestMode = () => {
    dispatch(setGuestMode({ sessionId: `guest_${Date.now()}` }));
  };

  const handleAddGuestTask = () => {
    const newTask = {
      id: `task_${Date.now()}`,
      title: `Test Task ${guestTasks.length + 1}`,
      description: 'This is a test task',
      priority: 'medium',
      status: 'todo',
      created_at: new Date().toISOString(),
    };
    dispatch(addGuestTask(newTask));
  };

  const handleClearTasks = () => {
    dispatch(clearGuestTasks());
  };

  const handleResetAuth = () => {
    dispatch(resetAuth());
  };

  return (
    <div className="p-4 border border-border rounded-lg bg-secondary">
      <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Redux Store Test</h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-secondary-foreground mb-2">Auth State:</h4>
          <pre className="text-sm bg-background text-foreground p-3 rounded border border-border overflow-x-auto">
            {JSON.stringify(auth, null, 2)}
          </pre>
        </div>

        <div>
          <h4 className="font-medium text-secondary-foreground mb-2">Guest Tasks ({guestTasks.length}):</h4>
          <pre className="text-sm bg-background text-foreground p-3 rounded border border-border max-h-32 overflow-y-auto">
            {JSON.stringify(guestTasks, null, 2)}
          </pre>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={handleSetGuestMode}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Set Guest Mode
          </button>
          <button
            onClick={handleAddGuestTask}
            className="px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
          >
            Add Guest Task
          </button>
          <button
            onClick={handleClearTasks}
            className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors"
          >
            Clear Tasks
          </button>
          <button
            onClick={handleResetAuth}
            className="px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/90 transition-colors"
          >
            Reset Auth
          </button>
        </div>
      </div>
    </div>
  );
}