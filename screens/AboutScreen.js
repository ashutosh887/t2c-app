import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import logo from "../assets/logo.png";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 150, height: 150 }} />

      {/* headings */}
      <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontWeight: "700", fontSize: 30 }}>Trash2Cash</Text>
        <Text style={{ fontWeight: "400", fontSize: 20 }}>
          Incentivising sustainability
        </Text>

        {/* about us */}
        <View style={{ marginTop: 20 }}>
          <Text>
            Welcome to our DAO-based platform that is dedicated to creating a
            sustainable future by incentivizing positive environmental action.
            We believe that everyone has a role to play in preserving our
            planet, and that small actions can make a big impact. Our platform
            is designed to encourage individuals and businesses to take part in
            this crucial process, by rewarding sustainable behaviors with tokens
            and NFTs that can be redeemed for a range of benefits.
          </Text>
          <Text>
            Our platform is powered by cutting-edge blockchain technology, which
            ensures transparency and security in all transactions. By using our
            platform, you can earn tokens by taking actions that contribute to a
            healthier environment, such as reducing your carbon footprint,
            conserving water, and using sustainable materials. You can then use
            these tokens to access a variety of rewards, such as discounts on
            sustainable products and services, access to exclusive events, and
            even donations to your favorite environmental charities.
          </Text>
          At our core, we are driven by the belief that creating a sustainable
          future requires a collective effort. We invite you to join our
          community of like-minded individuals and businesses who are committed
          to making a positive impact on the world around us. Together, we can
          create a more sustainable, equitable, and prosperous future for all.
          <Text>
            We are also trying to imply the concept of inclusivity by urging
            people to actually participate on the individual level and deliver a
            sustainably developed living system as an outcome, “ the prime
            concept of regeneration
          </Text>
        </View>
      </View>

      {/* team */}
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontSize: 15 }}>Maintained and Developed by:</Text>

        <Text style={{ fontSize: 20 }}>Ashutosh, Shouryam and Dinki</Text>
      </View>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: "center",
  },
});
