export const checkValidateData = (email, password) => {
 
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );
    if (!isEmailValid) {
      return "Enter Valid Email";
    }
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    if (!isPasswordValid) {
      return "Enter valid password";
    }
  
    return null;
  };
  