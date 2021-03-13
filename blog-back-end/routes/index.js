var express = require('express');
var router = express.Router();
var model = require('../model');

const errMsg = {
  code: 400,
  msg: 'GET error!',
};

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
        .find(group === 'all' ? {} : { group: group })
        .skip((current - 1) * pagesize)
        .limit(parseInt(pagesize))
        .toArray((err, docs) => {
          if (err) {
            res.send(errMsg);
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

/**
 * 获取网站头部和脚部信息
 */
router.get('/front/getHeader', function (req, res, next) {
  model.connect((db) => {
    let siteInfo = db
      .collection('siteinfo')
      .find()
      .toArray((err, docs) => {
        if (err) {
          res.send(errMsg);
        } else {
          res.json({
            code: 200,
            msg: 'Succeed!',
            data: {
              siteInfo: docs,
            },
          });
        }
      });
  });
});

/**
 * 获取文章
 * :cid - 文章id，存文章时按照现有文章最大id加1确定
 */
router.get('/front/getPost/:cid', function (req, res, next) {
  model.connect((db) => {
    let cid = parseInt(req.params.cid);
    db.collection('posts')
      .find({ cid: cid })
      .toArray((err, docs) => {
        if (err) {
          res.send(errMsg);
        } else {
          res.send({
            code: 200,
            msg: 'Succeed!',
            data: {
              post: docs,
            },
          });
        }
      });
  });
});

/**
 * 获取友链页面数据
 */
router.get('/front/getLink', function (req, res, next) {
  model.connect((db) => {
    db.collection('link')
      .find()
      .toArray((err, docs) => {
        if (err) {
          res.send(errMsg);
        } else {
          res.send({
            code: 200,
            msg: 'Succeed!',
            data: {
              link: docs,
            },
          });
        }
      });
  });
});

module.exports = router;
