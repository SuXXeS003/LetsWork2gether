import { ReactElement } from "react";
import {  Text, View } from "react-native";

interface Props extends React.BaseHTMLAttributes<ReactElement>{

}

const Content = ( {

}:Props) => {
    return (
        <View className="tw-flex tw-bg-secondary-500">
        <Text>Content</Text>       
        </View>

    )
}

export {Content}