"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function DropdownItem(e){var t=e.item;return t.section?React.createElement("div",{className:"field-group-head"},React.createElement("span",{"class":"icon--folder"})," ",t.section):React.createElement("label",{onClick:e.onClick,className:e.selected?"act":""},t.label," ",t.instructions&&React.createElement("i",null,t.instructions))}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),Dropdown=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.selectionChanged=function(e){n.setState({selected:e,open:!1}),n.props.groupToggle&&EE.cp.form_group_toggle(n.input)},n.toggleOpen=function(){n.setState(function(e,t){return{open:!e.open}})},n.state={selected:n.getItemForSelectedValue(e.selected),open:!1},n}return _inherits(t,e),_createClass(t,[{key:"componentDidUpdate",value:function(e,t){(!t.selected&&this.state.selected||t.selected&&t.selected.value!=this.state.selected.value)&&(this.props.groupToggle&&EE.cp.form_group_toggle(this.input),$(this.input).trigger("change"))}},{key:"componentDidMount",value:function(){this.props.groupToggle&&EE.cp.form_group_toggle(this.input)}},{key:"getItemForSelectedValue",value:function(e){return this.props.initialItems.find(function(t){return String(t.value)==String(e)})}},{key:"handleSearch",value:function(e){this.props.filterChange("search",e)}},{key:"render",value:function(){var e=this,t=this.props.items.length>this.props.tooMany&&!this.state.loading,n=this.state.selected;return React.createElement("div",{className:"fields-select-drop"+(t?" field-resizable":"")},React.createElement("div",{className:"field-drop-selected"+(this.state.open?" field-open":""),onClick:this.toggleOpen},React.createElement("label",{className:this.state.selected?"act":""},n&&React.createElement("i",null,n.sectionLabel?n.sectionLabel+" / ":"",n.label),!n&&React.createElement("i",null,this.props.emptyText),React.createElement("input",{type:"hidden",ref:function(t){e.input=t},name:this.props.name,value:this.state.selected?this.state.selected.value:"","data-group-toggle":this.props.groupToggle?JSON.stringify(this.props.groupToggle):"[]"}))),React.createElement("div",{className:"field-drop-choices",style:this.state.open?{display:"block"}:{}},this.props.initialItems.length>this.props.tooMany&&React.createElement(FieldTools,null,React.createElement(FilterBar,null,React.createElement(FilterSearch,{onSearch:function(t){return e.handleSearch(t.target.value)}}))),React.createElement("div",{className:"field-inputs"},0==this.props.items.length&&React.createElement(NoResults,{text:this.props.noResults}),this.state.loading&&React.createElement(Loading,{text:EE.lang.loading}),this.props.items.map(function(t){return React.createElement(DropdownItem,{key:t.value?t.value:t.section,item:t,selected:e.state.selected&&t.value==e.state.selected.value,onClick:function(n){return e.selectionChanged(t)}})}))))}}],[{key:"renderFields",value:function(e){$("div[data-dropdown-react]",e).each(function(){var e=JSON.parse(window.atob($(this).data("dropdownReact")));e.name=$(this).data("inputValue"),$(this).data("initialValue")&&(e.selected=$(this).data("initialValue")),ReactDOM.render(React.createElement(FilterableDropdown,e,null),this)})}}]),t}(React.Component);Dropdown.defaultProps={tooMany:8},$(document).ready(function(){Dropdown.renderFields(),$(document).on("click",function(e){$(".field-drop-selected.field-open").not($(e.target).parents(".fields-select-drop").find(".field-drop-selected.field-open")).click()})}),Grid.bind("select","display",function(e){Dropdown.renderFields(e)}),FluidField.on("select","add",function(e){Dropdown.renderFields(e)});var FilterableDropdown=makeFilterableComponent(Dropdown);