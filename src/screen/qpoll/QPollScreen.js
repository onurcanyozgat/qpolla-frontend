import React, { useState, useEffect } from "react";
import { Text, View } from 'react-native';

import PollService from '../services/PollService';

export default function QPollScreen() {
  

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>QPolls!</Text>

    </View>
  );
}