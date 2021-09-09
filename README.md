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

import {createStore} from 'redux';

const defaultState = { name: "Paul", secondName: 'Petrov'};

function reducer(state = defaultState, action){
switch(action.type){
case "CHANGE_NAME" : return {...state, name: action.payload}
case "CHANGE_SECOND_NAME" : return {...state, secondName: action.payload }
default : return state;
}
}

const store = createStore(reducer);

const changeName = {
type: "CHANGE_NAME",
payload : 'Ivanov'
}

store.dispatch(changeName);
