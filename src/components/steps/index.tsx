import { Text, View } from "react-native";
import { styles } from "./styles";


import { Step } from "../step";

export function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona: </Text>

      <Step
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
        // icon={IconMapPin}
      />
      <Step
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
        // icon={IconQrcode}
      />
      <Step
        title="Encontre estabelecimentos"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento "
        // icon={IconTicket}
      />
    </View>
  );
}
