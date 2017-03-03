/**
 * Created by Kyle Karpack on 12/9/2016.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HelloWorldApp = (function (_super) {
    __extends(HelloWorldApp, _super);
    function HelloWorldApp() {
        _super.apply(this, arguments);
    }
    HelloWorldApp.prototype.render = function () {
        return ("\n            <App>\n                <Title>Hello World</Title>\n                <p>Hello from a Grommet page!</p>\n            </App>\n    ");
    };
    return HelloWorldApp;
}(React.Component));
;
var element = document.getElementById('content');
ReactDOM.render(React.createElement("HelloWorldApp"), element);
//# sourceMappingURL=index.js.map