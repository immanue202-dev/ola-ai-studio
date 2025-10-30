import { ThemeProvider } from '../ThemeProvider';
import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="min-h-[300px] bg-gradient-to-br from-purple-500 to-pink-500">
        <Navigation />
      </div>
    </ThemeProvider>
  );
}
