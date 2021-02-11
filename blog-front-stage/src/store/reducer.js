import { GET_ARTICLE } from './actionTypes';

const defaultState = {};
// eslint-disable-next-line
export default (state = defaultState, action) => {
  if (action.type === GET_ARTICLE) {
    console.log(action.value.data.data);
    // eslint-disable-next-line
    let newState = JSON.parse(JSON.stringify(state));
    // 对 newState 中的数据进行更新
  }
  return state;
};
