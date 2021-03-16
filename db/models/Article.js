const { Model } = require('objection');

class ArticleModel extends Model {
  static get tableName() {
    return 'article';
  }
}

module.exports = ArticleModel;