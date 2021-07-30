import { theme } from "@chakra-ui/react"

enum Theme {
    DESERT = "desert",
    AURORA = "aurora",
    ABSTRACT = "abstract"
}

export const themeConfig = {
    [Theme.DESERT]: {
        color: "orange",
        main: theme.colors.orange[600],
        darker: theme.colors.orange[800],
    },
    [Theme.AURORA]: {
        color: "purple",
        main: theme.colors.purple[600],
        darker: theme.colors.purple[800],
    },
    [Theme.ABSTRACT]: {
        color: "purple",
        main: theme.colors.purple[600],
        darker: theme.colors.purple[800],
    }
}

export const config = {
    theme: Theme.DESERT
}