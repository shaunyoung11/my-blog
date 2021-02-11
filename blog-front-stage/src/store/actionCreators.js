import axios from 'axios';
import { GET_ARTICLE } from './actionTypes';

export const getArticle = (type) => {
  return (dispatch) => {
    console.log(type);
    axios
      .get(
        'https://www.fastmock.site/mock/6ed5b8c00a26ca0e931dcba01b79b475/myblog/front/getArticles/' +
          type
      )
      .then((res) => {
        console.log(res);
        const action = getArticleAction(res);
        dispatch(action);
      });
  };
};

const getArticleAction = (value) => ({
  type: GET_ARTICLE,
  value,
});
