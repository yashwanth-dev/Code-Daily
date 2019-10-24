Index(state: isLoggedIn) - handles onButtonClick of HomeLoginButton and modifies the isLoggedIn
    HomeLoginButton(I/P:isLoggedIn, O/P:onbuttonClick) - Based on isLogged in props, the text of the button changes
    HomeLoginContainer(I/P:isLoggedIn) - Based on the input this container component decides which page to display - Home or Login
        HomePage
        LoginPage