export default class CounterAction {
    
    
    
    static INCREMENT = "INCREMENT";
    static DECREMENT = "DECREMENT";
    static INCREMENT_WITH_VALUE = "INCREMENT_WITH_VALUE";
    
    static increment() {
      return {
            type: 'INCREMENT'
         }
      } 
     static decrement() {
      return {
            type: 'DECREMENT'
         }
      }
      static incrementWithValue(value) {
      return {
            type: 'INCREMENT_WITH_VALUE',
            val: value
         }
      }

}


  
 