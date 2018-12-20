class BaseController {
  render(req, res) {
    const template = res.template || 'home/template';
    const title = res.title || 'Error Page title';

    res.render(template, { title, ...res.data });
  }

  sendResponse(req, res) {
    const status = req.responseStatus || 200;
    const result = req.responseData || {};

    res.status(status).send(result);
  }
}

module.exports = BaseController;
