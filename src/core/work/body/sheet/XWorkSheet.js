import { Widget } from '../../../../lib/Widget';
import { XTableDimension } from '../../../table/XTableDimension';
import { cssPrefix } from '../../../../const/Constant';
import { SheetUtils } from '../../../../utils/SheetUtils';

const settings = {
  tableConfig: {
    data: [],
  },
};

class XWorkSheet extends Widget {

  constructor(tab, options) {
    super(`${cssPrefix}-sheet`);
    this.tab = tab;
    this.options = SheetUtils.copy({}, settings, options);
    this.table = new XTableDimension(this.options.tableConfig);
  }

  onAttach() {
    const { table } = this;
    this.attach(table);
  }

  getTable() {
    return this.table;
  }

  getTab() {
    return this.tab;
  }

  destroy() {
    super.destroy();
    this.table.destroy();
  }

}

export { XWorkSheet };
