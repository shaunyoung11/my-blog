const { ObjectId } = require('bson');
var express = require('express');
var router = express.Router();
var model = require('../model');
const uat =
  'fjadjfsajkfjasdjljgaoijoiwqetoijwqroiugoqndvnnczvxkuhefowjnldanfjhnfaksjoiaflknd';

const errMsg = {
  code: 400,
  msg: 'error!',
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
            data: docs,
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

/**
 * 获取关于页面的内容
 */
router.get('/front/getAbout', function (req, res, next) {
  model.connect((db) => {
    db.collection('about')
      .find()
      .toArray((err, docs) => {
        if (err) {
          res.send(errMsg);
        } else {
          res.send({
            code: 200,
            msg: 'Succeed!',
            data: {
              about: docs,
            },
          });
        }
      });
  });
});

// -----------------------------------------------------------------------

/**
 * 录入网站站点信息
 */
router.post('/back/postInfo', function (req, res, next) {
  model.connect((db) => {
    if (req.headers.authorization !== uat) {
      res.send(errMsg);
    } else {
      console.log(req.body);
      db.collection('siteinfo').updateOne(
        {},
        { $set: { siteInfo: req.body.siteInfo } }
      );
      res.send({
        code: 200,
        msg: 'Succeed!',
      });
    }
  });
});

/**
 * 修改友链信息列表，包括对友链的修改、删除、添加
 */
router.post('/back/changeLink', function (req, res, next) {
  model.connect((db) => {
    if (req.headers.authorization !== uat) {
      res.send(errMsg);
    } else {
      console.log(req.body);
      if (req.body.method === 'update') {
        db.collection('link').updateOne(
          { _id: ObjectId(req.body.link._id) },
          {
            $set: {
              logo: req.body.link.logo,
              name: req.body.link.name,
              title: req.body.link.title,
              url: req.body.link.url,
            },
          },
          function (err) {
            if (err) {
              res.send(errMsg);
            } else {
              res.send({
                code: 200,
                msg: 'Succeed!',
              });
            }
          }
        );
      } else if (req.body.method === 'del') {
        db.collection('link').deleteOne(
          { _id: ObjectId(req.body.link._id) },
          function (err) {
            if (err) {
              res.send(errMsg);
            } else {
              res.send({
                code: 200,
                msg: 'Succeed!',
              });
            }
          }
        );
      } else if (req.body.method === 'add') {
        db.collection('link').insertOne(req.body.link, function (err) {
          if (err) {
            res.send(errMsg);
          } else {
            res.send({
              code: 200,
              msg: 'Succeed!',
            });
          }
        });
      }
    }
  });
});

router.post('/back/login', function (req, res, next) {
  model.connect((db) => {
    db.collection('admin')
      .find()
      .toArray((err, docs) => {
        console.log(docs);
        console.log(req.body);
        if (
          docs[0].username === req.body.username &&
          docs[0].password === req.body.password
        ) {
          res.send({
            code: 200,
            msg: 'Succeed!',
          });
        } else {
          res.send(errMsg);
        }
      });
  });
});

router.post('/back/postAbout', function (req, res, next) {
  model.connect((db) => {
    console.log(req.body);
    db.collection('about').update(
      { _id: ObjectId(req.body.about._id) },
      { $set: { content: req.body.about.content } },
      function (err) {
        if (err) {
          res.send(errMsg);
        } else {
          res.send({
            code: 200,
            msg: 'Succeed!',
          });
        }
      }
    );
  });
});

module.exports = router;
