import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions';

const properties_reducer = (state, action) => {
  // if (action.type === SIDEBAR_OPEN) {
  //   return { ...state, isSidebarOpen: true };
  // }
  // if (action.type === SIDEBAR_CLOSE) {
  //   return { ...state, isSidebarOpen: false };
  // }
  return state;
  throw new Error(`No matching action - ${action.type}`);
};
export default properties_reducer();
