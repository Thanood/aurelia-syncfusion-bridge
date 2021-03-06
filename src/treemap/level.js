import {inlineView, customElement, constants, generateBindables} from '../common/common';

@inlineView('<template><slot></slot></template>')
@customElement(`${constants.elementPrefix}level`)
@generateBindables('levels', ['groupBackground', 'groupBorderColor', 'groupBorderThickness', 'groupGap', 'groupPadding', 'groupPath', 'headerHeight', 'headerTemplate', 'headerVisibilityMode', 'labelPosition', 'labelTemplate', 'labelVisibilityMode', 'showHeader', 'showLabels'])

export class Level {
}

