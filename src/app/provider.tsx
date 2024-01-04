import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

const Provider = ({ children }: PropsWithChildren) => {
  const [client] = useState(new QueryClient());
  const [theme] = useState(createTheme());
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export default Provider;
