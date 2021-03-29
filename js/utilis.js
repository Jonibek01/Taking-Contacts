var $_ = function(selector, node = document) {
    return node.querySelector(selector);
}
var $$_ = function(selector, node = document) {
    return node.querySelectorAll(selector);
}