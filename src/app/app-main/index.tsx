import { Route, BrowserRouter } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { LayoutContainer } from 'app/domains/Layout/containers/async';
import './index.css';

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  queryCache,
});

const AppMain = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Route path="/" component={LayoutContainer} />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default AppMain;
