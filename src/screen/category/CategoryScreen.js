import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import PollService from "../services/PollService";

export default function CategoryScreen() {
  const [categoryList, setCategoryList] = useState([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const axiosData = PollService.getCategories();
    axiosData
      .then((response) => setCategoryList(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }, []);

  const itemList = categoryList.map((item) => <li>{item}</li>);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Kategoriler!</Text>
      <div>{itemList}</div>
    </View>
  );
}
