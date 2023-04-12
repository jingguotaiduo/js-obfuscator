node ./node_modules/javascript-obfuscator/bin/javascript-obfuscator ../../../index.js --output ../../../index-obfuscator.js
//混淆器帮助命令
node ./node_modules/javascript-obfuscator/bin/javascript-obfuscator -h
//混淆单个文件
node ./node_modules/javascript-obfuscator/bin/javascript-obfuscator index.js --output index-hunxiao.js
//混淆 src 目录下的所有js文件到 obfuscated 文件目录下
node ./node_modules/javascript-obfuscator/bin/javascript-obfuscator ./src --output ./obfuscated
//混淆单个文件 
node ./node_modules/javascript-obfuscator/bin/javascript-obfuscator index.js --output index-hunxiao.js --compact true --control-flow-flattening true --dead-code-injection true --debug-protection true --disable-console-output true --rename-globals true --rename-properties true --rename-properties-mode safe --self-defending true --simplify true --transform-object-keys true --unicode-escape-sequence true
//混淆 src 目录下的所有js文件到 obfuscated 文件目录下
node ./node_modules/javascript-obfuscator/bin/javascript-obfuscator ./src --output ./obfuscated --compact true --control-flow-flattening true --disable-console-output false

Options:
  -v, --version                                                              output the version number
  -o, --output <path>                                                        Output path for obfuscated code
  --compact <boolean>                                                        Disable one line output code compacting
  --config <boolean>                                                         Name of js / json config file
  --control-flow-flattening <boolean>                                        Enables control flow flattening
  --control-flow-flattening-threshold <number>                               The probability that the control flow flattening transformation will be applied to the node
  --dead-code-injection <boolean>                                            Enables dead code injection
  --dead-code-injection-threshold <number>                                   The probability that the dead code injection transformation will be applied to the node
  --debug-protection <boolean>                                               Disable browser Debug panel (can cause DevTools enabled browser freeze)
  --debug-protection-interval <number>                                       Sets interval in milliseconds for debug protection so it is working even after page was loaded (can cause DevTools enabled browser
                                                                             freeze)
  --disable-console-output <boolean>                                         Allow console.log, console.info, console.error and console.warn messages output into browser console
  --domain-lock <list> (comma separated, without whitespaces)                Allows to run the obfuscated source code only on specific domains and/or sub-domains (comma separated)
  --domain-lock-redirect-url <string>                                        Allows the browser to be redirected to a passed URL if the source code isn't run on the domains specified by --domain-lock
  --exclude <list> (comma separated, without whitespaces)                    A filename or glob which indicates files to exclude from obfuscation
  --force-transform-strings <list> (comma separated, without whitespaces)    Enables force transformation of string literals, which being matched by passed RegExp patterns (comma separated)
  --identifier-names-cache-path <string>                                     Sets path for identifier names cache
  --identifier-names-generator <string>                                      Sets identifier names generator. Values: dictionary, hexadecimal, mangled, mangled-shuffled. Default: hexadecimal
  --identifiers-prefix <string>                                              Sets prefix for all global identifiers
  --identifiers-dictionary <list> (comma separated, without whitespaces)     Identifiers dictionary (comma separated) for `--identifier-names-generator dictionary` option
  --ignore-imports <boolean>                                                 Prevents obfuscation of `require` and `dynamic` imports
  --log <boolean>                                                            Enables logging of the information to the console
  --numbers-to-expressions <boolean>                                         Enables numbers conversion to expressions
  --options-preset <string>                                                  Allows to set options preset. Values: default, low-obfuscation, medium-obfuscation, high-obfuscation. Default: default
  --reserved-names <list> (comma separated, without whitespaces)             Disables obfuscation and generation of identifiers, which being matched by passed RegExp patterns (comma separated)
  --reserved-strings <list> (comma separated, without whitespaces)           Disables transformation of string literals, which being matched by passed RegExp patterns (comma separated)
  --rename-globals <boolean>                                                 Allows to enable obfuscation of global variable and function names with declaration
  --rename-properties <boolean>                                              UNSAFE: Enables renaming of property names. This probably MAY break your code
  --rename-properties-mode <boolean>                                         Specify `--rename-properties` option mode. Values: safe, unsafe. Default: safe
  --seed <string|number>                                                     Sets seed for random generator. This is useful for creating repeatable results.
  --self-defending <boolean>                                                 Disables self-defending for obfuscated code
  --simplify <boolean>                                                       Enables additional code obfuscation through simplification
  --source-map <boolean>                                                     Enables source map generation
  --source-map-base-url <string>                                             Sets base url to the source map import url when `--source-map-mode=separate`
  --source-map-file-name <string>                                            Sets file name for output source map when `--source-map-mode=separate`
  --source-map-mode <string>                                                 Specify source map output mode. Values: inline, separate. Default: separate
  --source-map-sources-mode <string>                                         Specify source map sources mode. Values: sources, sources-content. Default: sources-content
  --split-strings <boolean>                                                  Splits literal strings into chunks with length of `splitStringsChunkLength` option value
  --split-strings-chunk-length <number>                                      Sets chunk length of `splitStrings` option
  --string-array <boolean>                                                   Enables gathering of all literal strings into an array and replacing every literal string with an array call
  --string-array-calls-transform <boolean>                                   Enables the transformation of calls to the string array
  --string-array-calls-transform-threshold <number>                          The probability that that calls to the string array will be transformed
  --string-array-encoding <list> (comma separated, without whitespaces)      Encodes each string in strings array using base64 or rc4 (this option can slow down your code speed). Values: none, base64, rc4.
                                                                             Default: none
  --string-array-indexes-type <list> (comma separated, without whitespaces)  Encodes each string in strings array using base64 or rc4 (this option can slow down your code speed). Values: hexadecimal-number,
                                                                             hexadecimal-numeric-string. Default: hexadecimal-number
  --string-array-index-shift <boolean>                                       Enables additional index shift for all string array calls
  --string-array-rotate <boolean>                                            Enable rotation of string array values during obfuscation
  --string-array-shuffle <boolean>                                           Randomly shuffles string array items
  --string-array-wrappers-count <number>                                     Sets the count of wrappers for the string array inside each root or function scope
  --string-array-wrappers-chained-calls <boolean>                            Enables the chained calls between string array wrappers
  --string-array-wrappers-parameters-max-count <number>                      Allows to control the maximum number of string array wrappers parameters
  --string-array-wrappers-type <string>                                      Allows to select a type of the wrappers that are appending by the `--string-array-wrappers-count` option. Values: variable,
                                                                             function. Default: variable
  --string-array-threshold <number>                                          The probability that the literal string will be inserted into stringArray (Default: 0.8, Min: 0, Max: 1)
  --target <string>                                                          Allows to set target environment for obfuscated code. Values: browser, browser-no-eval, node. Default: browser
  --transform-object-keys <boolean>                                          Enables transformation of object keys
  --unicode-escape-sequence <boolean>                                        Allows to enable/disable string conversion to unicode escape sequence
  -h, --help                                                                 display help for command