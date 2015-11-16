// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var Connect2015App;
(function (Connect2015App) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
            $("#entry-form").submit(function () {
                $.ajax({
                    type: "POST",
                    url: "http://connect2015.azurewebsites.net/api/entry",
                    data: $(this).serialize()
                }).done(function () {
                    location.href = "complete.html";
                }).fail(function () {
                    alert("エラーが発生しました。もう一度やり直してください。");
                });
                return false;
            });
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
            shake.startWatch(onShake, 30);
        }
        function onPause() {
            // TODO: This application has been suspended. Save application state here.
            shake.stopWatch();
        }
        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
            shake.startWatch(onShake, 40);
        }
        function onShake() {
            $.ajax({
                type: "POST",
                url: "http://connect2015.azurewebsites.net/api/shake"
            });
        }
    })(Application = Connect2015App.Application || (Connect2015App.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(Connect2015App || (Connect2015App = {}));
//# sourceMappingURL=appBundle.js.map