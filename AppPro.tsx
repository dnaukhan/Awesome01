import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
} from 'react-native';

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});

export default AppPro;
