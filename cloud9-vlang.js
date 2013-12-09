/**
 * VLANG linter
 *
 * @copyright 2011, Ajax.org B.V.
 * @license GPLv3 <http://www.gnu.org/licenses/gpl.txt>
 */
define(function(require, exports, module) {

var ext = require("core/ext");
var editors = require("ext/editors/editors");
var language = require("ext/language/language");
var linereport = require("ext/linereport/linereport");

module.exports = ext.register("ext/cloud9-vlang/cloud9-vlang", {
    name    : "cloud9-vlang",
    dev     : "Ajax.org",
    type    : ext.GENERAL,
    deps    : [editors, language, linereport],
    nodes   : [],
    alone   : true,

    init : function() {
        language.registerLanguageHandler(
            "ext/cloud9-vlang/cloud9-vlang-worker",
            require("./cloud9-vlang-worker-wrapped.js")
        );
    },
    
    enable : function() {
    },

    disable : function() {
    },

    destroy : function() {
    }
});

});
