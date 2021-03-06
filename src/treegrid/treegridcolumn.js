import {inlineView, customElement, children, constants, generateBindables, Util} from '../common/common';

@inlineView('<template><slot></slot></template>')
@customElement(`${constants.elementPrefix}tree-grid-column`)
@generateBindables('columns', ['allowFiltering', 'allowSorting', 'editType', 'field', 'filterEditType', 'headerText', 'visible', 'headerTemplateID', 'isFrozen', 'allowFreezing'])

export class TreeGridColumn {
  @children(`${constants.elementPrefix}template`) template = [];
  setTemplates() {
    if (this.template[0]) {
      let util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  }
}
