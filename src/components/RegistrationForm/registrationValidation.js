import memoize from 'lru-memoize';
import { createValidator, required, minLength, maxLength, match, email } from 'utils/validation';

const registrationValidation = createValidator({
  firstName: [required, maxLength(20)],
  lastName: maxLength(20),
  email: [required, email],
  password: [required, minLength(6), maxLength(50)],
  passwordRepeat: match('password')
});
export default memoize(10)(registrationValidation);
