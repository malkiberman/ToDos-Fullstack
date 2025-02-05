import axios from 'axios';

export default {

  getTasks: async () => {
    console.log(process.env.REACT_APP_API_URL);
    const result = await axios.get(`/items`)  
    console.log(result.data);

    return result.data.items;
  },


  addTask: async(name)=>{
    console.log('addTask', name)
    //TODO
    const result = await axios.post(`/`,{
      Name:name,
      IsComplete:false
    })    
    return {result};
  },



  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    console.log('setCompleted', { id, isComplete });
    const result = await axios.put(`/items/${id}?iscomplete=${isComplete}`, {
    });
      
    return {result};
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')

    const result = await axios.delete(`/items/${id}`, {
    });

  }
};