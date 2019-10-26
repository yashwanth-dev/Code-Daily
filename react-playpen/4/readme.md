Index(state: isLoggedIn) - handles onButtonClick of HomeLoginButton and modifies the isLoggedIn
    HomeLoginButton(I/P:isLoggedIn, O/P:onbuttonClick) - Based on isLogged in props, the text of the button changes
    HomeLoginContainer(I/P:isLoggedIn) - Based on the input this container component decides which page to display - Home or Login
        HomePage
        LoginPage


Redux store
What is the application doing
2 parts
part-1
Login
    What are the important properties to track for the application state?
    isLoggedIn
    This will be the state shape
    What are the actions possible and how will the data change?
    Login - isLoggedIn:true
    Logout - isLoggedIn:false
    There will be a reducer for each action which emits new application state Login part - LoginReducer

    