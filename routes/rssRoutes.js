'use strict';

module.exports = function(app) {
    const rssController = require('../controllers/rssController.js')

    app.route('/latest-feeds')
        .get(rssController.fetchAllFeeds);
}