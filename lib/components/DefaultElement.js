'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _BackgroundAbsoluteURLRule = require('../rules/BackgroundAbsoluteURLRule');

var _BackgroundAbsoluteURLRule2 = _interopRequireDefault(_BackgroundAbsoluteURLRule);

var _EmptyTDRule = require('../rules/EmptyTDRule');

var _EmptyTDRule2 = _interopRequireDefault(_EmptyTDRule);

var _HrefAbsoluteURLRule = require('../rules/HrefAbsoluteURLRule');

var _HrefAbsoluteURLRule2 = _interopRequireDefault(_HrefAbsoluteURLRule);

var _ImgAltTextRule = require('../rules/ImgAltTextRule');

var _ImgAltTextRule2 = _interopRequireDefault(_ImgAltTextRule);

var _ImgAltTextStyleRule = require('../rules/ImgAltTextStyleRule');

var _ImgAltTextStyleRule2 = _interopRequireDefault(_ImgAltTextStyleRule);

var _ImgDimensionsRule = require('../rules/ImgDimensionsRule');

var _ImgDimensionsRule2 = _interopRequireDefault(_ImgDimensionsRule);

var _ShorthandFontRule = require('../rules/ShorthandFontRule');

var _ShorthandFontRule2 = _interopRequireDefault(_ShorthandFontRule);

var _SixCharacterHexBackgroundColorRule = require('../rules/SixCharacterHexBackgroundColorRule');

var _SixCharacterHexBackgroundColorRule2 = _interopRequireDefault(_SixCharacterHexBackgroundColorRule);

var _SrcAbsoluteURLRule = require('../rules/SrcAbsoluteURLRule');

var _SrcAbsoluteURLRule2 = _interopRequireDefault(_SrcAbsoluteURLRule);

var _TableBorderRule = require('../rules/TableBorderRule');

var _TableBorderRule2 = _interopRequireDefault(_TableBorderRule);

var _TableCellPaddingRule = require('../rules/TableCellPaddingRule');

var _TableCellPaddingRule2 = _interopRequireDefault(_TableCellPaddingRule);

var _TableCellSpacingRule = require('../rules/TableCellSpacingRule');

var _TableCellSpacingRule2 = _interopRequireDefault(_TableCellSpacingRule);

var _Element = require('./Element');

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <table> element
/**
 * Provides default Oy.Element components with rules.
 */

var Table = function Table(props) {
  return (0, _Element2.default)((0, _objectAssign2.default)({}, props, { tagName: 'table' }));
};

Table.propTypes = {
  background: _BackgroundAbsoluteURLRule2.default,
  bgColor: _SixCharacterHexBackgroundColorRule2.default,
  border: _TableBorderRule2.default,
  cellPadding: _TableCellPaddingRule2.default,
  cellSpacing: _TableCellSpacingRule2.default,
  style: _ShorthandFontRule2.default
};

Table.defaultProps = {
  border: 0,
  cellSpacing: 0,
  cellPadding: 0
};

// <tbody> element
var TBody = function TBody(props) {
  return (0, _Element2.default)((0, _objectAssign2.default)({}, props, { tagName: 'tbody' }));
};

TBody.propTypes = {
  bgColor: _SixCharacterHexBackgroundColorRule2.default
};

// <tr> element
var TR = function TR(props) {
  return (0, _Element2.default)((0, _objectAssign2.default)({}, props, { tagName: 'tr' }));
};

TR.propTypes = {
  bgColor: _SixCharacterHexBackgroundColorRule2.default,
  style: _ShorthandFontRule2.default
};

// <td> element
var TD = function TD(props) {
  return (0, _Element2.default)((0, _objectAssign2.default)({}, props, { tagName: 'td' }));
};

TD.propTypes = {
  background: _BackgroundAbsoluteURLRule2.default,
  bgColor: _SixCharacterHexBackgroundColorRule2.default,
  children: _EmptyTDRule2.default,
  style: _ShorthandFontRule2.default
};

// <img> element
var Img = function Img(props) {
  return (0, _Element2.default)((0, _objectAssign2.default)({}, props, { tagName: 'img' }));
};

Img.propTypes = {
  bgColor: _SixCharacterHexBackgroundColorRule2.default,
  height: _ImgDimensionsRule2.default,
  src: _SrcAbsoluteURLRule2.default,
  width: _ImgDimensionsRule2.default,
  style: _ImgAltTextStyleRule2.default,
  alt: _ImgAltTextRule2.default
};

// <a> element
var A = function A(props) {
  return (0, _Element2.default)((0, _objectAssign2.default)({}, props, { tagName: 'a' }));
};

A.propTypes = {
  bgColor: _SixCharacterHexBackgroundColorRule2.default,
  href: _HrefAbsoluteURLRule2.default,
  style: _ShorthandFontRule2.default
};

exports.default = {
  Table: Table,
  TBody: TBody,
  TD: TD,
  TR: TR,
  Img: Img,
  A: A
};
module.exports = exports['default'];