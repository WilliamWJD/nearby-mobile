import { Text, View } from "react-native";
import { styles } from "./styles";
import React from "react";
import { colors } from "@/styles/colors";

interface StepProps {
  title: string;
  description: string;
  // icon: React.ComponentType<IconProps>
}

export function Step({ title, description }: StepProps) {
  return (
    <View style={styles.container}>
      {/* {Icon && <Icon size={32} color={colors.red.base}/>} */}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
