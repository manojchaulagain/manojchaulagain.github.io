import React from "react";

export interface ThemeConfig {
    isDark: boolean,
    changeTheme: Function
}

const StyleContext = React.createContext({ isDark: true, changeTheme: (): void => { } });

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
