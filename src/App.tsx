import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
      <ReactQueryDevtools position='right' buttonPosition='bottom-left' />
    </QueryClientProvider>
  );
}

export default App;
