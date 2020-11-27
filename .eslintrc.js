const LINTER_EXTENSION = (function () {
    const tmp = process.argv[2].split('.')
    return tmp[tmp.length - 1]
})()

const CONFIG = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'airbnb-base',
        'plugin:vue/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        parser: ['babel-eslint', '@typescript-eslint/parser'],
    },
    rules: {
        "semi": ['error', 'always'],
        'func-names': ['error', 'never'],
        'indent': ['error', 4],
        'max-len': ['error', {'code': 200}],
        'arrow-parens': ['error', 'as-needed'],
        'space-before-function-paren': ["error", "never"],
        'no-nested-ternary': 0,
        'no-plusplus': 0,
        'no-else-return': 0,
        'no-use-before-define': 0, // delete
        'consistent-return': 0,
        'import/extensions': ['error', 'always', {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            vue: 'never'
        }],
        'vue/html-indent': ['error', 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }],
        'vue/attribute-hyphenation': ['error', 'never', {}],
        'vue/no-v-html': 'off',
        "vue/script-indent": ["error", 4, {"baseIndent": 1}],
        "camelcase": 'off',
        "import/prefer-default-export": "off",
    },
    overrides: [
        {
            "files": ["*.vue"],
            "rules": {
                "indent": "off"
            }
        }
    ],
    globals: {
        _: true,
        jQuery: true,
        $: true,
        require: true,
        define: true,
        module: true,
        THREE: true,
        cstm: true,
        cstm_i18n: true,
        cstm_library: true,
        TweenLite: true,
        TWEEN: true,
        Site: true,
        Vector3d: true,
        Intercom: true,
        ScrollMagic: true,
        webkit: true,
        Power4: true,
        Power2: true,
        Power1: true,
        Power0: true,
        TweenMax: true,
        Raven: true,
        Stats: true,
        Flickity: true,
        ScrollOut: true,
        FB: true,
        google: true,
        Modernizr: true,
        Quad: true,
        _wq: true,
        adyen: true,
    },
    plugins: ["vue", "@typescript-eslint"],
    settings: {
        'import/resolver': {
            webpack: {
                alias: {
                    map: [
                        ['@tylko_ui', './src_vue/tylko_ui']
                    ]
                }
            }
        }
    }
}

module.exports = CONFIG
