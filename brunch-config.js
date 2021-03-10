// See http://brunch.io for documentation.

//exports.optimize = true;

exports.files = {
  javascripts: {
    joinTo: {
      //'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'main.js': 'src/*.(js|ts)'
      
    }
  },
  stylesheets: { joinTo: {'main.css':'src/*.(css|scss)'} }
};

exports.paths = {
  public: 'dist',
  watched: ['src']
};

exports.plugins = {
  
  sass: {
    allowCache: true
  },
  brunchTypescript: {
    target:"ES2015",
    removeComments: true,
  },
  htmlPages: {
    /*htmlMin: {
      caseSensitive: false,
      collapseBooleanAttributes: true,
      collapseInlineTagWhitespace: false,
      collapseWhitespace: true,
      conservativeCollapse: false,
      html5: true,
      includeAutoGeneratedTags: false,
      keepClosingSlash: false,
      minifyCSS: true,
      minifyJS: true,
      preserveLineBreaks: false,
      preventAttributesEscaping: false,
      processConditionalComments: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      sortAttributes: true,
      sortClassName: true    
    },*/
    destination(path) {
      return path.replace(/^src[\/\\](.*)\.html$/, "$1.html");
    },
    //disabled: false,
    //compileAssets: true,
    //preserveFrontMatter: false,
    //removeFrontMatter: false,
    //forceRemoveFrontMatter: false,
    //frontMatterSeparator: '---'
  },
};