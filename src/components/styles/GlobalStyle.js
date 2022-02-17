import { themes } from './ColorStyles'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${themes.light.backgroundColor};

        @media (prefers-color-scheme: dark) {
            background: ${themes.dark.backgroundColor};
        }
    }
`