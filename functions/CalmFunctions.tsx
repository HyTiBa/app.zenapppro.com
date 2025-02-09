function userAlreadySignIn(): boolean {
  if (localStorage.getItem("UserCalmSpace") != null) {
    return true;
  }
  return false;
}
