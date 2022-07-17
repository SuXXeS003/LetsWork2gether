import {  Text, View } from "react-native";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Content } from "./components/Content";

interface Props{

}

const MainApp = ( {

}:Props) => {
    return (
        <View className="tw-flex tw-flex-col tw-justify-between tw-mt-6 tw-h-full">
           
            <View className="tw-flex-1"> 
            <Header/>
            <Text>LALALA</Text>
            </View>

            <View className="tw-flex-3"> 
            <Content/>
            </View>

            <View className="tw-flex-1"> 
            <NavBar/>
            </View>

        </View>

    )
}

export {MainApp}