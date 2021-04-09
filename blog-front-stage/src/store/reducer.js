import {
  GET_ABOUT,
  GET_ARTICLE,
  GET_HEADER,
  GET_LINK,
  GET_POST,
} from './actionTypes';

const defaultState = {
  siteInfo: [],
  articles: [],
  link: [],
  post: {},
  current: 1,
  pageSize: 9,
};
// eslint-disable-next-line
export default (state = defaultState, action) => {
  if (action.type === GET_ARTICLE) {
    console.log(action);
    // eslint-disable-next-line
    let newState = JSON.parse(JSON.stringify(state));
    // 对 newState 中的数据进行更新
    newState.articles = action.value.articles;
    newState.totalArticles = action.value.count;
    newState.current = action.value.current;
    return newState;
  }
  if (action.type === GET_HEADER) {
    console.log(action.value);
    let newState = JSON.parse(JSON.stringify(state));
    newState.siteLogo = action.value[0].value; // 站点 Logo
    newState.siteName = action.value[1].value; // 站点名称
    newState.siteUrl = action.value[2].value; // 站点地址
    newState.siteIntro = action.value[3].value; // 站点简介
    newState.siteICP = action.value[4].value; // ICP 备案信息
    newState.siteGithub = action.value[5].value; // GitHub 地址
    newState.siteMail = action.value[6].value; // 站点邮箱地址
    newState.siteLinkedIn = action.value[7].value; // 站点领英地址
    return newState;
  }
  if (action.type === GET_POST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.post = action.value;
    return newState;
  }
  if (action.type === GET_LINK) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.link = action.value;
    return newState;
  }
  if (action.type === GET_ABOUT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.about = action.value;
    return newState;
  }
  return state;
};
