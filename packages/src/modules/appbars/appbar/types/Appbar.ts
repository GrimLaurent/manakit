import { ToolbarType } from '../../../toolbars/toolbar/types/Toolbar';

interface ModuleCustomType {
  fixed?: boolean;
  app?: boolean;
}

export interface AppbarType extends ModuleCustomType, ToolbarType {}
