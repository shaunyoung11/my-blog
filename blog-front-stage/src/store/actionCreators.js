import axios from 'axios';
import { GET_ARTICLE, GET_HEADER } from './actionTypes';

// const root =
//   'https://www.fastmock.site/mock/6ed5b8c00a26ca0e931dcba01b79b475/myblog';

const root = 'http://127.0.0.1:3000';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'content-type',
  'Access-Control-Allow-Methods': 'DELETE,PUT,POST,GET,OPTIONS',
};

/**
 * 获取文章信息
 * @param {String} type
 */
export const getArticle = (type, current, pageSize) => {
  return (dispatch) => {
    console.log(type);
    axios
      .get(root + '/front/getArticles/' + type + '/' + current + '/' + pageSize)
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

export const getHeader = () => {
  return (dispatch) => {
    axios.get(root + '/front/getHeader').then((res) => {
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
