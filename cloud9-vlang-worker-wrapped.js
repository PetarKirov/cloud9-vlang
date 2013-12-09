// Wrapped in JavaScript, to avoid cross-origin restrictions, created using wrap-in-js.sh
define(function() {
return '/**\n' +
' * VLANG linter worker.\n' +
' *\n' +
' * @copyright 2011, Ajax.org B.V.\n' +
' * @license GPLv3 <http://www.gnu.org/licenses/gpl.txt>\n' +
' */\n' +
'define("ext/cloud9-vlang/cloud9-vlang-worker", ["require", "exports", "module"], function(require, exports, module) {\n' +
'    \n' +
'var baseLanguageHandler = require("ext/linereport/linereport_base");\n' +
'var handler = module.exports = Object.create(baseLanguageHandler);\n' +
'\n' +
'handler.disabled = false;\n' +
'\n' +
'handler.handlesLanguage = function(language) {\n' +
'    return language === \'d\';\n' +
'};\n' +
'\n' +
'handler.init = function(callback) {\n' +
'    handler.initReporter("rdmd --version", "exit 1 # can\'t really install vlang", function(err, output) {\n' +
'        if (err) {\n' +
'            console.log("Unable to lint VLANG\\n" + output);\n' +
'            handler.disabled = true;\n' +
'        }\n' +
'        callback();\n' +
'    });\n' +
'};\n' +
'\n' +
'handler.analyze = function(doc, fullAst, callback) {\n' +
'    if (handler.disabled)\n' +
'        return callback();\n' +
'    handler.invokeReporter("time rdmd -I/home/vlang/work/vlang/src " + handler.path.replace(/.*\\/workspace/, handler.workspaceDir),\n' +
'        this.$postProcess, callback);\n' +
'};\n' +
'\n' +
'/**\n' +
' * Postprocess VLANG output to match the expected format of\n' +
' * line:column: error message.\n' +
' */\n' +
'handler.$postProcess = function(line) {\n' +
'    return line.replace(/(.*) (in .*? )?on line ([0-9]+)$/, "$3:1: $1/");\n' +
'};\n' +
'\n' +
'});\n' +
'\n' +
'\n' +
'';});
