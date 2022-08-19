import {Button, StyleSheet,Text,View} from 'react-native' ;
import Ionicons from '@expo/vector-icons/Ionicons';
function GoalItem({onDelete,text,id,...props}) {
    return <View style={styles.goalItem} >
    <Text style={styles.goalText}>{text}</Text>
    <Ionicons onPress={()=>onDelete(id)} color='white' name={'trash-outline'} size={32} />
    </View>
};

export default GoalItem; 

const styles = StyleSheet.create({
    goalItem : {
        margin :8,
        padding :8,
        justifyContent:"space-between",
        flexDirection:"row",
        borderRadius : 6 ,
        backgroundColor :'black' ,
        
    
      },
      goalText:{
        color:'white'
      },
});