# 🚀 React-Portfolio 🚀

Cookie cutter react portfolio suited perfectly for *Github Pages*, get up and running in **less then 5 minutes**, just edit the `data.json` file and off you go!

Watch in action: [Click here](https://nirtz89.github.io/react-portfolio).

Fueled by [Chakra-UI](https://chakra-ui.com/).

## Table of Contents

- [Installation](#installation)
- [Customization](#usage)
- [Themes](#themes)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Install in 5 easy steps

1. Fork this repo
2. Edit `data.json` and `config.ts` to fit your needs
3. Change `package.json` homepage property to `{your-github-username}.github.io/react-portfolio`
4. Run `yarn` from your favourite CLI
5. Run `yarn deploy` and watch the magic happens

Your react portfolio is waiting for you at `{your-github-username}.github.io/react-portfolio}`  
*Please note that you have to enable *github pages* in your new forked branch, and point it to "gh-pages" branch after deploying it (step 5).

## Customization

React-Portfolio is built on modules, each in its own sub-folder inside the modules main folder
Each module has its own properties defined by it's TypeScript interface, *all modules extend the `IModuleBase` interface*.

In order to add a module or change a module in your portfolio, simply edit `data.json` with the required properties.

Let's say we want to add another *About* section, simply add it in your `data.json` at the wanted position.  
  
  ```json
[...
    {
        "type": "about",
        "data": {
            "about": "This is another About module",
            "education": {
                "title": "Education",
                "data": [
                {
                    "title": "BSc Information Systems",
                    "institute": "University of Haifa",
                    "startingYear": "2014",
                    "endingYear": "2018"
                },
                {
                    "title": "BA Psychology",
                    "institute": "The Open University",
                    "startingYear": "2020",
                    "endingYear": "2022"
                }]
            }
        },
        "title": "About"
    }
]
  ```

## Themes

React-portfolio comes bundled with 5 out-of-the-box themes.
Those include **Desert, Aurora, Abstract, Hightech and Mellow**.

Adding themes is super-easy! Here's how it's done:  
- Open a new sub-folder under the themes folder.
- Name it whatever you want (no spaces).
- Add 3 images, named `bg.jpg`, `1.jpg` and `2.jpg` (keep those under 100kb each).
- Add your theme inside the `config.ts` file, like so:  
```ts
enum Theme {
    ...
    MY_THEME = "my_theme"
}

export const themeConfig = {
    ...
    [Theme.MY_THEME]: {
        color: "red",
        main: theme.colors.red[600],
        darker: theme.colors.red[800],
    }
}

export const config = {
    theme: Theme.MY_THEME
}
```
- Please note that the themes colors are taken from [Chakra-UI color scheme](https://chakra-ui.com/docs/theming/theme), so use those.

And that's it!
*Is your theme awesome? Share it with the world, open a PR for it.*

## Support

Please [open an issue](https://github.com/nirtz89/react-portfolio/issues/new) for support.

## Contributing

Fixing bugs and adding modules is always welcome.
Create a branch, add commits, and [open a pull request](https://github.com/nirtz89/react-portfolio/compare).
