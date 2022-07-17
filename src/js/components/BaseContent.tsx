import * as React from "react";
import { View } from "react-native";

interface Props extends React.BaseHTMLAttributes<View> {}

const BaseContent = ( {
    ...rest
}: Props)=> {
    return (
        <View className="tw-flex tw-h-full tw-bg-primary tw-p-6">
          {rest.children}
        </View>
      );
    };

export { BaseContent };
