System.register(['../common/common'], function (_export) {
  'use strict';

  var inlineView, customElement, children, constants, generateBindables, Util, Column;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      children = _commonCommon.children;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
      Util = _commonCommon.Util;
    }],
    execute: function () {
      Column = (function () {
        var _instanceInitializers = {};

        function Column() {
          _classCallCheck(this, _Column);

          _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers);
        }

        Column.prototype.bind = function bind() {
          if (this.template[0]) {
            var util = new Util();
            this[util.getBindablePropertyName('template')] = this.template[0].template;
          }
        };

        _createDecoratedClass(Column, [{
          key: 'template',
          decorators: [children(constants.elementPrefix + 'template')],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        var _Column = Column;
        Column = generateBindables('columns', ['clipMode', 'allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting', 'allowResizing', 'commands', 'cssClass', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'editParams', 'editTemplate', 'editType', 'field', 'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'showInColumnChooser', 'template', 'textAlign', 'tooltip', 'type', 'validationRules', 'visible', 'width'])(Column) || Column;
        Column = customElement(constants.elementPrefix + 'column')(Column) || Column;
        Column = inlineView('<template><content></content></template>')(Column) || Column;
        return Column;
      })();

      _export('Column', Column);
    }
  };
});
//# sourceMappingURL=../dist/dev/grid/column.js.map
