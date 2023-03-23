import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from 'react-native';
import RadioGroup from 'react-native-radio-button-group';
import PollService from "../services/PollService";

export default function PollScreen() {
    const [optionList, setOptionList] = useState([]);
    const [selected, setSelected] = useState();

    const options = [
        {id: 0, label: 'Option 1 will be here.' },
        {id: 1, label: 'Option 2 will be here.' },
        {id: 2, label: 'Option 3 will be here.' },
        {id: 3, label: 'Option 4 will be here.' },
      ];
    
    useEffect(() => {
        setOptionList(options);
    }, []);

    const onSelected = (opt) => {
        setSelected(opt);
    };

    const vote = () => {
        const axiosData = PollService.vote();
       /* axiosData
        .then((response) => console.log("Cevap : " + response.data))
        .catch((error) => console.log("Error : " + error.message));*/
    }

    return (
        <View style={{ flex: 1,  alignItems: 'center',  }}>
          <Text style={styles.pollText}> Poll Question will be here?</Text>
          <RadioGroup  options={optionList} onChange={onSelected} />
          <Button onPress={vote} title="Polla" color="#841584"
            accessibilityLabel="Learn more about this purple button"
/>
        </View>
      );
}

const styles = StyleSheet.create({
    pollText: {
      fontFamily: 'Cochin',
      fontSize: 20,
      fontWeight: 'bold',
    }
  });
