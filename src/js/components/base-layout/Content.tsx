import { ReactElement } from "react";
import {  Text, View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

interface Props extends React.BaseHTMLAttributes<ReactElement>{

}

const Content = ( {

}:Props) => {

    const tw = useTailwind();
    return (
        <View style={tw("tw-flex tw-bg-secondary-500")}>
        <Text>Content</Text>       
        </View>

    )
}

export {Content}