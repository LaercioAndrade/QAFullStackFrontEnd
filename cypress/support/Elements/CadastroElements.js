class CadastroElements{

btnMenuUsuario = () => {return '#menuUserSVGPath'}
createNewAccount = () => {return '.create-new-account'}
userName = () => {return ':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine'}
CadastroEmail = () => {return '[sec-name="userEmail"] > .inputContainer > .ng-pristine'}
Password = () => {return ':nth-child(3) > [a-hint="Password"] > .inputContainer > .ng-pristine'}
ConfirmPassword =  () => {return '[a-hint="Confirm password"] > .inputContainer > label'} 
FirstName = () => {return '[sec-name="userFirstName"] > .inputContainer > .ng-pristine'}
LastName = () => {return '[sec-name="userLastName"] > .inputContainer > .ng-pristine'}
Phone = () => {return ':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > .ng-pristine'}
Country = () => {return '[sec-name="userCountry"] > .inputContainer > .ng-pristine'}
City = () => {return '[sec-name="userCity"] > .inputContainer > .ng-pristine'} 
Address = () => {return '[sec-name="userAdress"] > .inputContainer > .ng-pristine'}
State = () => {return '[sec-name="userState"] > .inputContainer > label'}
PostalCode = () => {return '#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > .ng-pristine'}
btnAcceptCondition = () => {return '[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine'}
btnRegister = () => {return '#register_btnundefined'}
userlogado = ()  => {return '.desktop-handler > :nth-child(3)'}
}
export default CadastroElements;