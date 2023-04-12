# 1、Introduction
<strong>js-obfuscator：singleProject to test javascript-obfuscator

# 2、Environment
Operation System：Windows 11(x64)
Installed Software：Nodejs

# 2、Commands to use js-obfuscator
## 2.1 查看混淆器版本

## 2.2 混淆器帮助命令
node ./node_modules/javascript-obfuscator/bin/javascript-obfuscator -h

## 2.3 混淆混淆单个文件
node ./node_modules/javascript-obfuscator/bin/javascript-obfuscator index.js --output index-hunxiao.js

## 2.4 混淆 src 目录下的所有js文件到 obfuscated 文件目录下
node ./node_modules/javascript-obfuscator/bin/javascript-obfuscator ./src --output ./obfuscated

## 2.5 混淆可选项（对混淆方式进行参数设置）

<pre>
<code>
node ./node_modules/javascript-obfuscator/bin/javascript-obfuscator index.js --output index-hunxiao.js --compact true --control-flow-flattening true --dead-code-injection true --debug-protection true --disable-console-output true --rename-globals true --rename-properties true --rename-properties-mode safe --self-defending true --simplify true --transform-object-keys true --unicode-escape-sequence true

node ./node_modules/javascript-obfuscator/bin/javascript-obfuscator ./src --output ./obfuscated --compact true --control-flow-flattening true --disable-console-output false
</code>
</pre>

continuve waiting for updating!🕺🕺🕺✌️✌️✌️❤️❤️❤️
