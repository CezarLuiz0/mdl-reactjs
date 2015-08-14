/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.Badge',

	propTypes: {

	},

  getDefaultProps: function() {
		return {
			isIcon: false,
			tag: 'span',
			data: '',
			background: true
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-badge': true,
			'material-icons': this.props.isIcon,
			'mdl-badge--no-background': !this.props.background
		};
		return cx(classes);
	},

  _getElement: function() {
		var element = React.createElement(this.props.tag, {
			children: this.props.children,
			'data-badge': this.props.data
		});;

		return element;
  },

  render: function () {
    var element = this._getElement();
    var classname = element.props.className || '';

    var newProps = {
			className : classname + ' ' + this._getClasses(),
			style : _.extend(element.props.style || {}, this.props.style),
			id : this.props.id,
		};

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
		componentHandler.upgradeDom();
	}
});
