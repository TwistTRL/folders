"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTabs = require("react-tabs");

require("react-tabs/style/react-tabs.css");

require("./Folders.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Folders = function (_PureComponent) {
    _inherits(Folders, _PureComponent);

    function Folders(props) {
        _classCallCheck(this, Folders);

        var _this = _possibleConstructorReturn(this, (Folders.__proto__ || Object.getPrototypeOf(Folders)).call(this, props));

        _this.folders = _this.props.folders;
        return _this;
    }

    _createClass(Folders, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var folderW = this.props.width;
            var folderHString = this.props.heightString;
            var tabW = (folderW + (this.props.folders.length - 1) * 10) / this.props.folders.length;
            var styles = {
                tabs: { backgroundColor: "rgba(0,0,0,0)" },
                tab: function tab(folder, i) {
                    return {
                        backgroundColor: folder.backgroundColor,
                        color: "white",
                        width: tabW,
                        right: i * 10 + "px",
                        zIndex: 10 - i - 1
                    };
                },
                tabPanel: function tabPanel(folder) {
                    return {
                        backgroundColor: folder.backgroundColor,
                        height: folderHString,
                        overflow: _this2.props.className === "xray-folder" ? "auto" : "hidden"
                    };
                }
            };

            return _react2.default.createElement(
                _reactTabs.Tabs,
                { className: this.props.className, style: styles.tabs },
                _react2.default.createElement(
                    _reactTabs.TabList,
                    null,
                    this.folders.map(function (folder, i) {
                        return _react2.default.createElement(
                            _reactTabs.Tab,
                            {
                                key: folder.name,
                                style: styles.tab(folder, i),
                                className: "side-tab tab1" },
                            " ",
                            folder.name
                        );
                    })
                ),
                this.folders.map(function (folder) {
                    return _react2.default.createElement(
                        _reactTabs.TabPanel,
                        {
                            key: folder.name,
                            style: styles.tabPanel(folder) },
                        folder.component
                    );
                })
            );
        }
    }]);

    return Folders;
}(_react.PureComponent);

exports.default = Folders;