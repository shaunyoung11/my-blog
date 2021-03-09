import { GET_ARTICLE, GET_HEADER, GET_POST } from './actionTypes';

const defaultState = {
  showNav: false,
  current: 1,
  pageSize: 9,
  siteInfo: {},
  articles: [],
  post: {
    content: '',
  },
};
// eslint-disable-next-line
export default (state = defaultState, action) => {
  if (action.type === GET_ARTICLE) {
    console.log(action);
    // eslint-disable-next-line
    let newState = JSON.parse(JSON.stringify(state));
    // 对 newState 中的数据进行更新
    newState.articles = action.value.articles;
    return newState;
  }
  if (action.type === GET_HEADER) {
    console.log(action.value);
    let newState = JSON.parse(JSON.stringify(state));
    newState.siteInfo = action.value;
    return newState;
  }
  if (action.type === GET_POST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.post = action.value;
    return newState;
  }
  return state;
};
