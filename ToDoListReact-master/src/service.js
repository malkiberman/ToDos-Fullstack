import axios from 'axios';

export default {

  getTasks: async () => {
    console.log(process.env.REACT_APP_API_URL);
    const result = await axios.get(`${process.env.REACT_APP_API_URL}items`)  
    console.log(result.data);

    return result.data;
  },


  addTask: async(name)=>{
    console.log('addTask', name)
   
    const result = await axios.post(`${process.env.REACT_APP_API_URL}items`, {
      Name:name,
      IsComplete:false
    })    
    return {result};
  },



  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    console.log('setCompleted', { id, isComplete });
    const result = await axios.put(`${process.env.REACT_APP_API_URL}items/${id}?iscomplete=${isComplete}`, {
    });
      
    return {result};
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')

    const result = await axios.delete(`${process.env.REACT_APP_API_URL}items/${id}`, {
    });

  }
};