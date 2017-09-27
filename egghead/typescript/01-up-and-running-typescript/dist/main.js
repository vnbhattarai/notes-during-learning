"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var App = /** @class */ (function () {
    function App() {
        this.title = "Eggheads";
    }
    App.prototype.getUsers = function () {
        return [{ name: "John" }];
    };
    return App;
}());
console.log(_.isArray(new App().getUsers()));
