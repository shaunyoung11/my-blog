import axios from 'axios';
import { GET_ARTICLE, GET_HEADER, GET_POST } from './actionTypes';

// const root =
//   'https://www.fastmock.site/mock/6ed5b8c00a26ca0e931dcba01b79b475/myblog';

axios.defaults.baseURL = 'http://127.0.0.1:3000';

/**
 * 获取文章信息
 * @param {String} type
 * @returns Function
 */
export const getArticle = (type, current, pageSize) => {
  return (dispatch) => {
    console.log(type);
    axios
      .get('/front/getArticles/' + type + '/' + current + '/' + pageSize)
      .then((res) => {
        console.log(res);
        const action = getArticleAction(res.data.data);
        dispatch(action);
      });
  };
};

const getArticleAction = (value) => ({
  type: GET_ARTICLE,
  value,
});

/**
 * 获取网站顶部和底部的信息
 * @returns function
 */
export const getHeader = () => {
  return (dispatch) => {
    axios.get('/front/getHeader').then((res) => {
      console.log(res);
      const action = getHeaderAction(res.data.data.siteInfo[0]);
      dispatch(action);
    });
  };
};

const getHeaderAction = (value) => ({
  type: GET_HEADER,
  value,
});

/**
 *
 * @param {String} cid
 * @returns Function
 */
export const getPost = (cid) => {
  return (dispatch) => {
    axios.get('/front/getPost/' + cid).then((res) => {
      console.log(res);
      const action = getPostAction(res.data.data.post);
      dispatch(action);
    });
  };
};

const getPostAction = (value) => ({
  type: GET_POST,
  value,
});
