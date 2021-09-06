1. npm i redux react-redux
2. action = {type "", payload:""}
   const defaultState = {
   }
   const reducer = (state,action)=>{
   switch (action.type){
   case ADD : return {...state, }
   default: return state
   }
   }
   index.js --- const store = createStore(reducer)
3. app.js --- const dispatch = useDispatch()
