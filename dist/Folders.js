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

  function Folders() {
    _classCallCheck(this, Folders);

    return _possibleConstructorReturn(this, (Folders.__proto__ || Object.getPrototypeOf(Folders)).apply(this, arguments));
  }

  _createClass(Folders, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          folders = _props.folders,
          className = _props.className,
          width = _props.width,
          height = _props.height,
          folderContentWidth = _props.folderContentWidth,
          folderContentHeight = _props.folderContentHeight;

      var foldersLen = folders.length;
      var tabW = width / foldersLen;
      var styles = {
        tabs: { backgroundColor: "rgba(0,0,0,0)" },
        tab: function tab(folder, i) {
          return {
            backgroundColor: folder.backgroundColor,
            color: "white",
            width: tabW,
            // left: i * 10,
            zIndex: 10 - foldersLen - i - 1
          };
        },
        tabPanel: function tabPanel(folder) {
          return {
            backgroundColor: folder.backgroundColor,
            height: height,
            overflow: className === "xray-folder" ? "auto" : "hidden"
          };
        }
      };

      return _react2.default.createElement(
        "div",
        {
          className: "wrap",
          style: {
            maxWidth: folderContentWidth,
            height: height,
            direction: "rtl"
          }
        },
        _react2.default.createElement(
          "div",
          {
            className: "folder-content-container",
            style: {
              maxWidth: folderContentWidth ? folderContentWidth : width,
              height: folderContentHeight ? folderContentHeight : height,
              float: "right"
            }
          },
          foldersLen === 1 ? _react2.default.createElement(
            "div",
            { className: className, style: styles.tabPanel(folders[0]) },
            folders[0].component
          ) : _react2.default.createElement(
            _reactTabs.Tabs,
            { className: className, style: styles.tabs },
            _react2.default.createElement(
              _reactTabs.TabList,
              null,
              folders.map(function (folder, i) {
                return _react2.default.createElement(
                  _reactTabs.Tab,
                  {
                    key: folder.name,
                    style: styles.tab(folder, i),
                    className: "side-tab tab1"
                  },
                  " ",
                  folder.name
                );
              })
            ),
            folders.map(function (folder) {
              return _react2.default.createElement(
                _reactTabs.TabPanel,
                { key: folder.name, style: styles.tabPanel(folder) },
                folder.component
              );
            })
          )
        )
      );
    }
  }]);

  return Folders;
}(_react.PureComponent);

exports.default = Folders;