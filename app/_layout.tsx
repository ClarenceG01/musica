import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import "../global.css";

const queryClient=new QueryClient({
 
});
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
      <StatusBar style="light" />
    </QueryClientProvider>
  );
}
