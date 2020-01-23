//this obj called store contains all of our app's state
//now we can dispatch actions that modify the state



function createStore(reducer) {
  let state;
 
  function dispatch(action) {
    state = reducer(state, action);
    render();
  };

  function getState(){
    return state;
  }
 
  return { dispatch, getState };
};

//make the reducer an argument to our createStore function 
  //by passing in reducer as argument to createStore()

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

//reateStore takes the reducer as the argument. This sets the new store's reducer as reducer. 
//When an action is dispatched, it calls the reducer that we passed through when creating the store.
let store = createStore(reducer);
store.dispatch({ type: '@@INIT'})

let button = document.getElementById('button');

button.addEventListener('click', function() {
    store.dispatch({ type: 'INCREASE_COUNT' });
})
