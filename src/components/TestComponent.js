'use client';

import { useSelector } from 'react-redux';

export default function TestComponent() {
  const storeState = useSelector((state) => state);
  const appState = useSelector((state) => state.app);
  
  return (
    <div className="p-4 bg-secondary rounded-lg border border-border">
      <h3 className="font-semibold text-secondary-foreground mb-2">
        Redux Store Test
      </h3>
      <p className="text-sm text-muted-foreground">
        Store initialized: {typeof storeState === 'object' ? '✅ Yes' : '❌ No'}
      </p>
      <p className="text-sm text-muted-foreground">
        Store keys: {Object.keys(storeState).join(', ')}
      </p>
      <p className="text-sm text-muted-foreground">
        App state: {appState?.initialized ? '✅ Ready' : '❌ Not Ready'}
      </p>
    </div>
  );
}