// setUserSession function
export const setUserSession = (user, token) => {
    sessionStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('token', token);
  
    // Log the user and token in the console
    console.log('User:', user);
    console.log('Token:', token);
};
  
// resetUserSession function
export const resetUserSession = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  
    // Log a message in the console
    console.log('User session reset');
};
