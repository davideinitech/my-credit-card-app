import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { authenticateAsync, hasHardwareAsync, isEnrolledAsync } from 'expo-local-authentication';
import { Slot, Stack, router } from 'expo-router';

export default function _layout() {
  const [useLocalAuthentication, setUseLocalAuthentication] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    hasLocalAuthentication();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (useLocalAuthentication) {
        handle();
      } else {
        Alert.alert('No Local Authentication continue')
      }
    }

  }, [isLoading])

  const hasLocalAuthentication = async () => {
    // Determine whether a face or fingerprint scanner is available on the device.
    const compatible = await hasHardwareAsync();
    if (compatible) {
      // Determine whether the device has saved fingerprints or facial data to use for authentication.
      const enroll = await isEnrolledAsync();

      if (enroll) {
        setUseLocalAuthentication(true)
      }
    }

    setIsLoading(false)
  }

  const handle = async () => {
    try {
      const { success } = await authenticateAsync({
        promptMessage: "Login with Biometrics",
        disableDeviceFallback: true,
        cancelLabel: "Cancel",
        requireConfirmation: true
      });
      if (success) {
        setIsAuthorized(true)
      }
      if (!success) {
        router.replace('/403')
      }
    } catch (error) {
      console.log(error);
      router.push('/403')
    }
  };


  if (isLoading) { return <Text>Loading</Text> }
  if (useLocalAuthentication && !isAuthorized) {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.text}>Wait Local Authentication</Text>
      </View>)
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    marginTop: 50,
    fontSize: 32,
    width: 250,
    textAlign: 'center'
  }
})