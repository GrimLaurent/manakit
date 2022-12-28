import { ABOUT_MENU  } from './about';
import { INTRODUCTION_MENU  } from './introduction';
import { COMPONENTS_MENU  } from './components';
import { FEATURES_MENU  } from './features';
import { GETTING_STARTED_MENU  } from './getting-started';
import { STYLES_MENU  } from './styles';

let allRoutes = [] as Array<any>;
allRoutes = allRoutes.concat(
    ABOUT_MENU,
    INTRODUCTION_MENU,
    COMPONENTS_MENU,
    FEATURES_MENU,
    GETTING_STARTED_MENU,
    STYLES_MENU,
);

export default allRoutes;

