const { ObjectId } = require('bson');
var express = require('express');
var router = express.Router();
var model = require('../model');
var markdown = require('markdown').markdown;
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
    db.collection('articles')
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
  console.log(req.body);
  model.connect((db) => {
    if (req.headers.authorization !== uat) {
      res.send(errMsg);
    } else {
      console.log(req.body);
      if (req.body.method === 'update') {
        console.log('update');
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
        console.log('del');
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
        console.log('11111');
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

/**
 * 后台登录接口
 */
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
            data: {
              uat: uat,
            },
          });
        } else {
          res.send(errMsg);
        }
      });
  });
});

/**
 * 后台关于页面修改接口
 */
router.post('/back/postAbout', function (req, res, next) {
  if (req.headers.authorization !== uat) {
    res.send(errMsg);
  } else {
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
  }
});

router.post('/back/postArticle', function (req, res, next) {
  if (req.headers.authorization !== uat) {
    res.send(errMsg);
  } else {
    model.connect((db) => {
      db.collection('articles')
        .find()
        .limit(1)
        .toArray((err, docs) => {
          console.log(docs);
          req.body.cid = docs[0] ? docs[0].cid + 1 : 0;
          req.body.contentHTML = markdown.toHTML(req.body.content);
          model.connect((db) => {
            db.collection('articles').insertOne(req.body, function (err) {
              if (err) {
                console.log(err);
                res.send(errMsg);
              } else {
                res.send({
                  code: 200,
                  msg: 'Succeed!',
                });
              }
            });
          });
        });
    });
  }
});

module.exports = router;
