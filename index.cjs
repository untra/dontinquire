"use strict";
module.exports = inquire;

/** this patch used to modify @protobufjs/inquire to prevent an unnecessary eval operation */
/** https://github.com/protobufjs/protobuf.js/pull/1548#issuecomment-1175477976 */
function inquire() {
  return null;
}