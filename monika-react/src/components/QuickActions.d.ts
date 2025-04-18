declare module './components/QuickActions' {
  import { FC } from 'react';
  
  interface QuickActionsProps {
    onAction: (action: string) => void;
  }
  
  export const QuickActions: FC<QuickActionsProps>;
} 