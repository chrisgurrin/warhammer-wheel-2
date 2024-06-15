const KEY = "warhammer-wheel";

const defaultStore = {
    selectedItem:{ value: 'No item'},
    items: {value: []},
    inProgress:{value:[]},
    view: {value:'item'}
}

export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY);

    if (!serializedState) return defaultStore;

    const parsed =  JSON.parse(serializedState);
    return {...defaultStore, ...parsed}
  } 
  catch (e) {
    return undefined;
  }
}

export async function saveState(state:unknown) {
    console.log('save', state)
    try {
      const serializedState = JSON.stringify({
        selectedItem: state.selectedItem,
        items: state.items,
        inProgress: state.inProgress
      });
      localStorage.setItem(KEY, serializedState);
    } 
    catch (e) {
      // Ignore
    }
  }