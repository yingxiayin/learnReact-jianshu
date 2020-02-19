import axios from 'axios';
import {actionTypes} from './index';

const changeDetail = (title, content) => ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  content,
});

export const getDetail = (id) => {
  return (dispatch) => {
    console.log('result');
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data;
      console.log(result);
      dispatch(changeDetail(result.title, result.content));
    }).catch(() => {
      console.log('error');
    });
  };
};