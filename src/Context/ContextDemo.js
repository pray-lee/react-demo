import React from 'react'

// themes
const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
}

// define context
const ThemeContext = React.createContext(themes.dark)

// define component
class ThemedButton extends React.Component {
    static contextType = ThemeContext

    render() {
        let props = this.props
        let theme = this.context
        return (
            <button
                {...props}
                style={{backgroundColor: theme.background}}
            >
                Change Theme
            </button>
        )
    }
}

function Toolbar(props) {
    return (
        <ThemedButton
            onClick={props.changeTheme}
        >
        </ThemedButton>
    )
}

export default class ContextDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: themes.light
        }
        this.toggleTheme = () => {
            console.log('toggle')
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark
            }))
        }
    }

    render() {
        // 在themeprovider内部的themedbutton按钮组件使用state中的theme值
        // 而外部组件使用的是默认的theme的值
        return (
            <React.Fragment>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
                <section>
                    <ThemedButton changeTheme={this.toggleTheme}/>
                </section>
            </React.Fragment>
        )
    }
}
