import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
      timeContainer:{
        width:100,
        padding:10,
        borderRadius:50,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:'row',
      },
      inputBox:{
        backgroundColor:"#e7e7e7",
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
      },
      inputText:{
        fontWeight:'600',
        fontSize:20,
        color:"#434343"
      },
      row:{
        flexDirection:"row",  
        alignItems:"center",
        borderBottomWidth: 1,
        borderColor:"#dbdbdb",
        padding:20 
      },
      iconContainer:{
        backgroundColor:"#b3b3b3",
        borderRadius:25,
        padding:10
      },
      destinationText:{
        marginLeft:10,
        fontWeight:'500',
        
      },
})

export default styles;