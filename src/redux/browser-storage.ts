const KEY = "warhammer-wheel";

const defaultState = {
    selectedItem:{ value: 'No item'},
    items: {value: []},
    inProgress:{value:[]},
    theme: {value:'bloodOrange'},
    view: {value:'item'}
}

export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY);

    if (!serializedState) return defaultState;

    const savedState =  JSON.parse(serializedState);
    return {...defaultState, ...savedState}
  } 
  catch (e) {
    return undefined;
  }
}

export async function saveState(state:{selectedItem:unknown, items:unknown, inProgress:unknown, theme: unknown}) {
    try {
      const serializedState = JSON.stringify({
        selectedItem: state.selectedItem,
        items: state.items,
        inProgress: state.inProgress,
        theme: state.theme
      });
      localStorage.setItem(KEY, serializedState);
    } 
    catch (e) {
      // Ignore
    }
  }