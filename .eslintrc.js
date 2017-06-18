module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
      "browser": true,
    },
    "rules": {
      "comma-dangle": 0,
      "no-console": 0,
      "jsx-a11y/img-has-alt": 0,
      "import/no-extraneous-dependencies": 0,
      "import/no-unresolved": 0,
      "react/style-prop-object": 0
    },
    "settings": {
      "import/resolver": "webpack"
    },
};
