/**
 * VLANG linter worker.
 *
 * @copyright 2011, Ajax.org B.V.
 * @license GPLv3 <http://www.gnu.org/licenses/gpl.txt>
 */
define("ext/cloud9-vlang/cloud9-vlang-worker", ["require", "exports", "module"], function(require, exports, module) {
    
var baseLanguageHandler = require("ext/linereport/linereport_base");
var handler = module.exports = Object.create(baseLanguageHandler);

handler.disabled = false;

handler.handlesLanguage = function(language) {
    return language === 'd';
};

handler.init = function(callback) {
    handler.initReporter("rdmd --version", "exit 1 # can't really install vlang", function(err, output) {
        if (err) {
            console.log("Unable to lint VLANG\n" + output);
            handler.disabled = true;
        }
        callback();
    });
};

handler.analyze = function(doc, fullAst, callback) {
    if (handler.disabled)
        return callback();
    handler.invokeReporter("time rdmd -I/home/vlang/work/vlang/src " + handler.path.replace(/.*\/workspace/, handler.workspaceDir),
        this.$postProcess, callback);
};

/**
 * Postprocess VLANG output to match the expected format of
 * line:column: error message.
 */
handler.$postProcess = function(line) {
    return line.replace(/(.*) (in .*? )?on line ([0-9]+)$/, "$3:1: $1/");
};

});


