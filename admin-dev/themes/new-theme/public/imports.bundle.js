/******/!function(e){function t(i){if(o[i])return o[i].exports;var n=o[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}// webpackBootstrap
/******/
var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,i){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=444)}({203:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(276);(0,window.$)(function(){new i.a})},275:function(e,t,o){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),l=window.$,r=function(){function e(){var t=this;i(this,e),l(".js-entity-select").on("change",function(){return t.toggleForm()}),this.toggleForm()}return n(e,[{key:"toggleForm",value:function(){var e=l("#entity").find("option:selected"),t=parseInt(e.val()),o=e.text().toLowerCase();this.toggleEntityAlert(t),this.toggleFields(t,o),this.loadAvailableFields(t)}},{key:"toggleEntityAlert",value:function(e){var t=l(".js-entity-alert");[0,1].includes(e)?t.show():t.hide()}},{key:"toggleFields",value:function(e,t){var o=l(".js-truncate-form-group"),i=l(".js-match-ref-form-group"),n=l(".js-regenerate-form-group"),r=l(".js-force-ids-form-group"),a=l(".js-entity-name");8===e?o.hide():o.show(),[1,2].includes(e)?i.show():i.hide(),[0,1,5,6,8].includes(e)?n.show():n.hide(),[0,1,3,4,5,6,8,7].includes(e)?r.show():r.hide(),a.html(t)}},{key:"loadAvailableFields",value:function(e){var t=this,o=l(".js-available-fields");l.ajax({url:o.data("url"),data:{entity:e},dataType:"json"}).then(function(e){t._removeAvailableFields(o);for(var i=0;i<e.length;i++)t._appendAvailableField(o,e[i].label+(e[i].required?"*":""),e[i].description);o.find('[data-toggle="popover"]').popover()})}},{key:"_removeAvailableFields",value:function(e){e.find('[data-toggle="popover"]').popover("hide"),e.empty()}},{key:"_appendHelpBox",value:function(e,t){var o=l(".js-available-field-popover-template").clone();o.attr("data-content",t),o.removeClass("js-available-field-popover-template d-none"),e.append(o)}},{key:"_appendAvailableField",value:function(e,t,o){var i=l(".js-available-field-template").clone();i.text(t),o&&this._appendHelpBox(i,o),i.removeClass("js-available-field-template d-none"),i.appendTo(e)}}]),e}();t.a=r},276:function(e,t,o){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=o(275),l=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),r=window.$,a=function(){function e(){var t=this;i(this,e),new n.a,r(".js-from-files-history-btn").on("click",function(){return t.showFilesHistoryHandler()}),r(".js-close-files-history-block-btn").on("click",function(){return t.closeFilesHistoryHandler()}),r("#fileHistoryTable").on("click",".js-use-file-btn",function(e){return t.useFileFromFilesHistory(e)}),r(".js-change-import-file-btn").on("click",function(){return t.changeImportFileHandler()}),r(".js-import-file").on("change",function(){return t.uploadFile()}),this.toggleSelectedFile(),this.handleSubmit()}return l(e,[{key:"handleSubmit",value:function(){r(".js-import-form").on("submit",function(){var e=r(this);if("1"===e.find('input[name="truncate"]:checked').val())return confirm(e.data("delete-confirm-message")+" "+r.trim(r("#entity > option:selected").text().toLowerCase())+"?")})}},{key:"toggleSelectedFile",value:function(){var e=r("#csv").val();e.length>0&&(this.showImportFileAlert(e),this.hideFileUploadBlock())}},{key:"changeImportFileHandler",value:function(){this.hideImportFileAlert(),this.showFileUploadBlock()}},{key:"showFilesHistoryHandler",value:function(){this.showFilesHistory(),this.hideFileUploadBlock()}},{key:"closeFilesHistoryHandler",value:function(){this.closeFilesHistory(),this.showFileUploadBlock()}},{key:"showFilesHistory",value:function(){r(".js-files-history-block").removeClass("d-none")}},{key:"closeFilesHistory",value:function(){r(".js-files-history-block").addClass("d-none")}},{key:"useFileFromFilesHistory",value:function(e){var t=r(e.target).closest(".btn-group").data("file");r(".js-import-file-input").val(t),this.showImportFileAlert(t),this.closeFilesHistory()}},{key:"showImportFileAlert",value:function(e){r(".js-import-file-alert").removeClass("d-none"),r(".js-import-file").text(e)}},{key:"hideImportFileAlert",value:function(){r(".js-import-file-alert").addClass("d-none")}},{key:"hideFileUploadBlock",value:function(){r(".js-file-upload-form-group").addClass("d-none")}},{key:"showFileUploadBlock",value:function(){r(".js-file-upload-form-group").removeClass("d-none")}},{key:"enableFilesHistoryBtn",value:function(){r(".js-from-files-history-btn").removeAttr("disabled")}},{key:"showImportFileError",value:function(e,t,o){var i=r(".js-import-file-error"),n=e+" ("+this.humanizeSize(t)+")";i.find(".js-file-data").html(n),i.find(".js-error-message").html(o),i.removeClass("d-none")}},{key:"hideImportFileError",value:function(){r(".js-import-file-error").addClass("d-none")}},{key:"humanizeSize",value:function(e){return"number"!=typeof e?"":e>=1e9?(e/1e9).toFixed(2)+" GB":e>=1e6?(e/1e6).toFixed(2)+" MB":(e/1e3).toFixed(2)+" KB"}},{key:"uploadFile",value:function(){var e=this;this.hideImportFileError();var t=r("#file"),o=t.prop("files")[0];if(t.data("max-file-upload-size")<o.size)return void this.showImportFileError(o.name,o.size,"File is too large");var i=new FormData;i.append("file",o),r.ajax({type:"POST",url:r(".js-import-form").data("file-upload-url"),data:i,cache:!1,contentType:!1,processData:!1}).then(function(t){if(t.error)return void e.showImportFileError(o.name,o.size,t.error);var i=t.file.name;r(".js-import-file-input").val(i),e.showImportFileAlert(i),e.hideFileUploadBlock(),e.addFileToHistoryTable(i),e.enableFilesHistoryBtn()})}},{key:"addFileToHistoryTable",value:function(e){var t=r("#fileHistoryTable"),o=t.data("delete-file-url"),i=o+"&filename="+encodeURIComponent(e),n=t.data("download-file-url"),l=n+"&filename="+encodeURIComponent(e),a=t.find("tr:first").clone();a.removeClass("d-none"),a.find("td:first").text(e),a.find(".btn-group").attr("data-file",e),a.find(".js-delete-file-btn").attr("href",i),a.find(".js-download-file-btn").attr("href",l),t.find("tbody").append(a);var s=t.find("tr").length-1;r(".js-files-history-number").text(s)}}]),e}();t.a=a},444:function(e,t,o){e.exports=o(203)}});