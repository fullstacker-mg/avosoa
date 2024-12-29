import type { PropsWithChildren } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TamaguiProvider } from "@tamagui/core";
import tamaguiConfig from "./tamagui.config";

import { Setup } from "./src/screens";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform } from "react-native";

type RootProps = PropsWithChildren;

const RootWrapper = ({ children }: RootProps) => {
	return (
		<GestureHandlerRootView>
			<TamaguiProvider config={tamaguiConfig}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={{ flex: 1 }}
				>
					<SafeAreaView
						style={{
							flex: 1,
						}}
					>
						{children}
					</SafeAreaView>
				</KeyboardAvoidingView>
			</TamaguiProvider>
		</GestureHandlerRootView>
	);
};

const RootStack = createNativeStackNavigator({
	initialRouteName: "setup",
	screens: {
		setup: {
			screen: Setup,
			options: {
				presentation: "modal",
				gestureEnabled: false,
				headerShown: false,
			},
		},
	},
});
const Navigation = createStaticNavigation(RootStack);

export default function App() {
	return (
		<SafeAreaProvider>
			<RootWrapper>
				<Navigation />
			</RootWrapper>
			<StatusBar />
		</SafeAreaProvider>
	);
}
