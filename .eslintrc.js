module.exports = {
  "extends": [
    "airbnb",
    "airbnb-typescript",
  ],
  "env": {
    "browser": true,
    "es6": true,
  },
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    project: './tsconfig.json',
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  },
  rules: {
    'react/prop-type': 0,
    'react/require-default-props': 0
  }
}
