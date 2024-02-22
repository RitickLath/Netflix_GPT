export function validate(email, password) {
  
  const Isemail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const Ispassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  console.log(Ispassword);
  if (!Ispassword) return "Password Strength Weak";
  if (!Isemail) return "Email Strength Weak";

  return null;
}
