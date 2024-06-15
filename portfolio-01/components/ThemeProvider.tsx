'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode; // Mandatory prop of type React.ReactNode
  // Define other optional props here with their types
  attribute?: string; // Optional string prop
  defaulTheme?: string; // Optional number prop
}

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
