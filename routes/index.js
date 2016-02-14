/* eslint no-unused-vars:0 */
const router = require('koa-router')();
const assets = require('../public/assets.json');

router.get('/', function* (next) {
  yield this.render('index', {
    title: 'TerribleCards',
    js: assets['main']['js'],
  });
});

module.exports = router;
