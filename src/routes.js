import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { lightTheme } from './theme';

// page imports
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Sessions from './pages/Sessions';
import Welcome from './pages/Welcome';
import Login from './pages/Auth/Login';
import RecoveryAccessStepOne from './pages/Auth/RecoveryAccessStepOne';
import RecoveryAccessStepTwo from './pages/Auth/RecoveryAccessStepTwo';
import RecoveryAccessStepThree from './pages/Auth/RecoveryAccessStepThree';
import RecoveryAccessError from './pages/Auth/RecoveryAccessError';
import Terms from './pages/Auth/Terms';
import RegisterStepOne from './pages/Auth/RegisterStepOne';
import RegisterStepTwo from './pages/Auth/RegisterStepTwo';
import AccountCreated from './pages/Auth/AccountCreated';
import RecoveryPassword from './pages/Auth/RecoveryPassword';
import RecoveryPasswordSuccess from './pages/Auth/RecoveryPasswordSuccess';
import RegisterSlide1 from './pages/Auth/RegisterSlide1';
import RegisterSlide2 from './pages/Auth/RegisterSlide2';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function MainNavigation() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: lightTheme.colors.dark[1],
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#ffffff',
          bottom: 14,
          right: 14,
          left: 14,
          elevation: 0,
          borderRadius: 8,
          height: 60,
          borderTopWidth: 1,
          borderWidth: 1,
          borderColor: '#000',
        },
      }}
    >
      <Tabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }

            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />

      <Tabs.Screen
        name="Sessões"
        component={Sessions}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons name="document-text" size={size} color={color} />
              );
            }

            return (
              <Ionicons
                name="document-text-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />;
            }

            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />
    </Tabs.Navigator>
  );
}

export function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: lightTheme.colors.light[4],
        },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />

      {/* Fluxo de login e recuperação de senha */}

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="RecoveryAccessStepOne"
        component={RecoveryAccessStepOne}
        options={{
          headerTitleAlign: 'center',
          title: 'Recuperação',
        }}
      />

      <Stack.Screen
        name="RecoveryAccessStepTwo"
        component={RecoveryAccessStepTwo}
        options={{
          headerTitleAlign: 'center',
          title: 'Recuperação',
        }}
      />

      <Stack.Screen
        name="RecoveryAccessStepThree"
        component={RecoveryAccessStepThree}
        options={{
          headerTitleAlign: 'center',
          title: 'Recuperação',
        }}
      />

      <Stack.Screen
        name="RecoveryAccessError"
        component={RecoveryAccessError}
        options={{
          headerTitleAlign: 'center',
          title: 'Recuperação',
        }}
      />

      <Stack.Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={{
          headerTitleAlign: 'center',
          title: 'Recuperação',
        }}
      />

      <Stack.Screen
        name="RecoveryPasswordSuccess"
        component={RecoveryPasswordSuccess}
        options={{
          headerShown: false,
        }}
      />

      {/* Fluxo de criação de conta */}

      <Stack.Screen
        name="Terms"
        component={Terms}
        options={{
          headerShown: false,
          title: 'Termos',
        }}
      />

      <Stack.Screen
        name="RegisterSlide1"
        component={RegisterSlide1}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="RegisterSlide2"
        component={RegisterSlide2}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="RegisterStepOne"
        component={RegisterStepOne}
        options={{
          title: 'Cadastro',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="RegisterStepTwo"
        component={RegisterStepTwo}
        options={{
          title: 'Cadastro',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="AccountCreated"
        component={AccountCreated}
        options={{
          headerShown: false,
        }}
      />

      {/* Navegação principal (tabs) */}

      <Stack.Screen
        name="MainNavigation"
        component={MainNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
