class  LoginElements{

menuUser = () => {return '#menuUser'}
userName = () => {return '[a-hint="Username"] > .inputContainer > .ng-pristine'}
password = () => {return '[a-hint="Password"] > .inputContainer > label'}
btnSignIn = () => {return '#sign_in_btnundefined'}
userlogado = ()  => {return '.desktop-handler > :nth-child(3)'}
msgLoginIncorreto = () => {return '#signInResultMessage'}
}
export default LoginElements;