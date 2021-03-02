var express = require('express');
var router = express.Router();
var model = require('../model');

/**
 * 获取主页或归档页文章内容
 * :group - 文章分组信息，若查询全部则为 all
 * :current - 当前页码
 * :pagesize - 每页的容量，用于分页查询
 */
router.get(
  '/front/getArticles/:group/:current/:pagesize',
  function (req, res, next) {
    let group = req.params.group;
    let current = req.params.current;
    let pagesize = req.params.pagesize;
    model.connect((db) => {
      db.collection('articles')
        .find({ group: group })
        .skip((current - 1) * pagesize)
        .limit(parseInt(pagesize))
        .toArray((err, docs) => {
          if (err) {
            res.send({
              code: 400,
              msg: 'Find data error!',
            });
          } else {
            res.send({
              code: 200,
              msg: 'Succeed!',
              data: {
                articles: docs,
              },
            });
          }
        });
    });
  }
);

module.exports = router;
