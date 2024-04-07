import { AuthContext } from '@/components/AuthContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack, router, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { PropsWithChildren, useEffect, useState } from 'react';
import { getItem, setItem } from 'expo-secure-store';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  authorized: {

    initialRouteName: 'overview',
  }
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });


  // Expo Router uses Error Boundaries to catch errors in the navigation tree.

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);



  if (!loaded) {
    return null;
  }



  return (
    <RootLayoutNav />
  );
}

function RootLayoutNav() {

  const [authenticated, setAuthenticated] = useState(getItem('authenticated') === 'true')
  const segments = useSegments();

  useEffect(() => {
    console.log({ seg: segments, authenticated })
    if (segments.length === 0) {

      return;
    }
    const isError = segments[0] === '(errors)';
    if (isError) {
      if (authenticated) {
        if (segments[1] === '401') {
          router.replace('/overview')
        }
      }
      return
    }
    const isLoginPage = segments[0] === 'login' || segments[1] === 'login'
    if (isLoginPage && authenticated) {
      router.replace('/overview')
    }
    if (!isLoginPage && !authenticated) {
      router.replace('/login')
    }
  }, [segments, authenticated])
  return (
    <AuthContext.Provider value={{
      authenticated: getItem('authenticated') === 'true',
      setAuthenticated: (authenticated) => {
        setAuthenticated(authenticated);
        setItem('authenticated', `${authenticated}`)
      }
    }}>
      <Stack />
    </AuthContext.Provider>
  );
}
