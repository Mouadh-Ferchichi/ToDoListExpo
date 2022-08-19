import {StyleSheet,View,TextInput, Button} from 'react-native';
import { useState} from 'react';
function GoalInput ({onAddGoal,...props}) {
    const [enteredGoalText,setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

const addGoal=()=>{
    
    onAddGoal(enteredGoalText)
    setEnteredGoalText("");
}

    return (
        <View style={styles.inputConatainer}>
        <TextInput style={styles.textInput} 
        placeholder='Your Goal!'
         onChangeText={goalInputHandler}
        value={enteredGoalText}
         
         />

        <Button disabled={!enteredGoalText.trim().length>0} title='Add Goal' onPress={addGoal}
        />
      </View>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputConatainer :{
        flex : 1,
        flexDirection :'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth : 1,
        borderBottomColor :'grey'
      },
      textInput:{
        borderWidth: 1,
        borderColor:'#cccccc',
        width : '70%',
        marginRight : 8,
        padding :8,
      },
})