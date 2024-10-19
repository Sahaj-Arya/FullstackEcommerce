import { StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

const RootNav = () => {
  return (
    <GluestackUIProvider mode="light">
      <Tabs />
    </GluestackUIProvider>
  );
};

export default RootNav;

const styles = StyleSheet.create({});
