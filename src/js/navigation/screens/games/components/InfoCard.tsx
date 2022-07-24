import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import ChevronDownIcon from "react-native-bootstrap-icons/icons/chevron-compact-down";
import ChevronUpIcon from "react-native-bootstrap-icons/icons/chevron-compact-up";
import ReadMore from "react-native-read-more-text";
import { WHITE } from "../../../../util/Color";
import { TouchableOpacity } from "react-native-gesture-handler";

interface InfoCardProps extends React.BaseHTMLAttributes<React.ReactElement> {
  expandable?: boolean;
}

const InfoCard = ({ expandable = false, ...rest }: InfoCardProps) => {
  const tw = useTailwind();

  const [open, setOpen] = useState<boolean>(false);

  function handlePress() {}

  function renderTruncatedFooter(handlePress: () => void) {
    return (
      <TouchableOpacity style={tw("flex w-full justify-center items-center py-1")} onPress={handlePress}>
        <ChevronDownIcon  color={WHITE}/>
      </TouchableOpacity>
    );
  }

  function renderRevealedFooter(handlePress: () => void) {
    return (
      <TouchableOpacity style={tw("flex w-full justify-center items-center py-1")} onPress={handlePress}>
        <ChevronUpIcon style={tw("font-bold")} color={WHITE}/>
      </TouchableOpacity>
    );
  }

  function handleTextReady() {
    // ...
  }

  useEffect(() => {}, []);

  return (
    <View style={tw("p-2 bg-primary-600 mt-2 text-white")}>
      <ReadMore
        numberOfLines={3}
        renderTruncatedFooter={renderTruncatedFooter}
        renderRevealedFooter={renderRevealedFooter}
        onReady={handleTextReady}
      >
        {rest.children}
      </ReadMore>
    </View>
  );
};

export { InfoCard };
