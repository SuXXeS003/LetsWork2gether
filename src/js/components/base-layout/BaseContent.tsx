import * as React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";


interface Props extends React.BaseHTMLAttributes<View> {}

const BaseContent = ( {
    ...rest
}: Props)=> {

  const tw = useTailwind();

    return (
        <View style={tw("flex h-full bg-primary p-6 items-center")}>
          {rest.children}
        </View>
      );
    };

export { BaseContent };
