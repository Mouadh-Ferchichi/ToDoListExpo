import { useState } from 'react';
import { StyleSheet, View , Button,TextInput, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  
  const [goals,setGoals]=useState ([]);
 
 

 function addGoalHandler(enteredGoalText) {

  setGoals (currentGoals => [...currentGoals ,
    {text: enteredGoalText, id:Math.random().toString() },
  ]);
 };

const deleteGoal=(id)=>{
  setGoals(goals.filter(item=>item.id!=id))
}

  return (
    <View style={styles.appContainer  }>
      <GoalInput   onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList 
      data={goals} 
      renderItem={({item}) =><GoalItem id={item.id} onDelete={deleteGoal} text={item.text}/>}

      keyExtractor={(item,index)=>item.id}
      alwaysBounceVertical={false}/>
        
          </View>
      
      </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex : 1,
    paddingTop: 50,
    paddingHorizontal : 16,
  },
  
  goalsContainer: {
    flex : 5,
  }
  
});
