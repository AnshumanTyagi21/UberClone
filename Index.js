import React from "react";
import {View} from "react-native";
import HomeMap from "../../Components/HomeMap/Index";
import CovidMessage from "../../Components/CovidMessage/Index";
import HomeSearch from "../../Components/HomeSearch/Index";

const HomeScreen = () => {
    return(
        <View>
          <HomeMap/>
          <CovidMessage/> 
          <HomeSearch/>
        </View>
    )
}

export default HomeScreen;