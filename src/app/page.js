'use client';

import { useSelector } from 'react-redux';
import TestComponent from '@/components/TestComponent';

export default function Home() {
  // This will demonstrate Redux is working (even with empty store)
  const storeState = useSelector((state) => state);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl">🎯</span>
            <h1 className="ml-4 text-5xl font-extrabold text-primary tracking-tight">
              Locus
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI-Powered Task Management Platform
          </p>
          
          <div className="bg-secondary p-8 rounded-2xl border border-border shadow-sm max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              🚀 Project Foundation Setup Complete
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <h3 className="font-semibold text-secondary-foreground">✅ Completed:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Next.js 15 with App Router</li>
                  <li>• Tailwind CSS v4 configured</li>
                  <li>• Custom design system colors</li>
                  <li>• Project folder structure</li>
                  <li>• Redux Toolkit setup</li>
                  <li>• Required dependencies installed</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-secondary-foreground">📦 Dependencies:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• @supabase/supabase-js</li>
                  <li>• @reduxjs/toolkit</li>
                  <li>• react-redux</li>
                  <li>• chart.js</li>
                  <li>• react-chartjs-2</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <TestComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
