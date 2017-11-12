var buttons = require('sdk/ui/button/action');
var { Hotkey } = require('sdk/hotkeys');

var buttonReloadAllTabs = buttons.ActionButton({
    id: "buttonReloadAllTabs",
    label: "reload all tabs (ctrl-shift-F5)",
    icon: {
        "16": "./rat_icon-16.png",
        "32": "./rat_icon-32.png",
        "64": "./rat_icon-64.png"
    },
    onClick: reloadTabs
});

var hotkeyReloadAllTabs = Hotkey({
    combo: "accel-shift-f5",
    onPress: reloadTabs
});


function reloadTabs() {
    var tabs = require('sdk/tabs');
    for each (var tab in tabs) {
        tab.reload();
    }
}