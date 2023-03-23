import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LeaderBoardScreen from "./screens/LeaderBoardScreen";
import StatsScreen from "./screens/StatsScreen";
import DiscussionsScreen from "./screens/DiscussionsScreen";
import ProposalsScreen from "./screens/ProposalsScreen";
import RewardsScreen from "./screens/RewardsScreen";
import AboutScreen from "./screens/AboutScreen";


function StackNavigator (){
    const Stack = createNativeStackNavigator();
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}} />
                <Stack.Screen name="Leaderboard" component={LeaderBoardScreen} />
                <Stack.Screen name="Stats" component={StatsScreen} />
                <Stack.Screen name="Discussions" component={DiscussionsScreen} />
                <Stack.Screen name="Proposals" component={ProposalsScreen} />
                <Stack.Screen name="Rewards" component={RewardsScreen} />
                <Stack.Screen name="About T2C" component={AboutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator