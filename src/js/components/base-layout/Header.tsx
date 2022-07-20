import { ReactElement } from "react";
import {  Text, View } from "react-native";

interface Props extends React.BaseHTMLAttributes<ReactElement>{

}

const Header = ( {

}:Props) => {
    return (
        <View className="tw-flex tw-bg-secondary-300">
        <Text>Header</Text>       
        </View>

    )
}

export {Header}