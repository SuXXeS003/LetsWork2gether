import {  Text, View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

interface Props {

}

const NavBar = ( {

}:Props) => {

    const tw = useTailwind();

    return (
        <View style={tw("tw-flex tw-bg-secondary-700")}>
        <Text >Navbar</Text>       
        </View>

    )
}

export {NavBar}