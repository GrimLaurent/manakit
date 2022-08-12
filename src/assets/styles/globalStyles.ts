// globalStyles.ts
import { createGlobalStyle } from 'styled-components';

import normalize from './_normalize';
import display from './_display';
import margin from './_margin';
import padding from './_parding';
import typography from './_typography';
import overflow from './_overflow';
import float from './_float';
import elevation from './_elevation';

const GlobalStyle = createGlobalStyle<any>`
    body {
        font-family: Roboto,sans-serif;
        line-height: 1.5;
    }

    ${() => normalize()}
    ${({ theme }) => display(theme)}
    ${({ theme }) => margin(theme)}
    ${({ theme }) => padding(theme)}
    ${({ theme }) => typography(theme)}
    ${({ theme }) => overflow(theme)}
    ${({ theme }) => float(theme)}
    ${({ theme }) => elevation(theme)}
`;

export default GlobalStyle;
