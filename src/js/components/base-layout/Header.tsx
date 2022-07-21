import { ReactElement } from "react";
import {  Text, View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

interface Props extends React.BaseHTMLAttributes<ReactElement>{

}

const Header = ( {

}:Props) => {

    const tw = useTailwind();
    return (
        <View style={tw("flex bg-secondary-300")}>
        <Text>Header</Text>       
        </View>

    )
}

export {Header}