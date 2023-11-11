import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task,setTask] = useState();
  const [taskItems, setTaskItems]= useState([]);

  const handleAddTask = () =>{
   setTaskItems([...taskItems,task])
   setTask(null);
  }

  const completeTask = (index) =>{
    const itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      {/* Bugünün taskları */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>- Bugünün Taskları -</Text>
        
        <View style={styles.items}>
          {/*Task'ın gideceği görev yeri */}
          {
            taskItems.map((item, index)=>{
              return (
                <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
                    <Task text={item} />
                </TouchableOpacity>
              )
              
            })
          }
          {/* <Task text={'Task 1'} />
          <Task text={'Task 2'} />     */}
         
        </View>

      </View>

      {/* Task'ın yazıldığı yer */}
      
      <KeyboardAvoidingView
        
        style={styles.writeTaskWrapper}
      >
        
        <TextInput style={styles.input} placeholder={'Task yaz..'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.addWrapper} >
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0D0D0',
  },

  tasksWrapper: {
    paddingTop:60,
    paddingHorizontal:20,
  },

  sectionTitle: {
    fontSize:27,
    fontWeight:'bold',
   
  },

  items: {
    marginTop:30,
  },

  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },

  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:280,
  },

  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },

  addText:{
    fontSize:35,
    justifyContent:'center',
    alignItems:'center',
  },

});
