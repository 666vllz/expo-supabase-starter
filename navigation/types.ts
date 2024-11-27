import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>
  AppTab: NavigatorScreenParams<AppTabParamList>
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

export type AuthStackParamList = {
  Login: undefined
  Signup: undefined
}

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AuthStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >

export type AppTabParamList = {
  Home: undefined
  Settings: undefined
}

export type AppTabScreenProps<T extends keyof AppTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
