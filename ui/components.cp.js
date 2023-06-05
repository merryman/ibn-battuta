import { component, ViewModel } from 'lively.morphic';
import { pt } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';

class BattutaModel extends ViewModel {
  get bindings () {
    return [
      { target: 'button', signal: 'onMouseDown', handler: 'action' }
    ];
  }

  action () {
    this.ui.button.fill = Color.random(0, 100);
  }
}

const IbnBatutta = component({
  extent: pt(101.7, 132.9),
  defaultViewModel: BattutaModel,
  submorphs: [{
    name: 'button',
    borderColor: Color.rgb(23, 160, 251),
    borderWidth: 1,
    extent: pt(38.3, 9.7),
    position: pt(42.3, 42.1)
  }]
});
