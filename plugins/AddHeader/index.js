module.exports = function () {

  return {
    name: "sqlverine-add-header",
    injectHtmlTags: () => {
      return {
        headTags: [
          {
            tagName: "link",
            attributes: {
              rel: "stylesheet",
              href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
            },
          },
        ],
      };
    },
  };
};
