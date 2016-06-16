export function getMessage(errorObj) {
  // Check if it's proper error from API
  if (errorObj && errorObj.hasOwnProperty('status') && !errorObj.status) {
    if (errorObj.errors.length > 1) {
      console.warn('Error has more than one errors => Add handling!', errorObj);
    }
    const error = errorObj.errors[0];
    return {
      status: error.code,
      message: error.message,
      type: error.type
    };
  }

  // Might also be an error that actual connection to the API failed
  if (errorObj && errorObj.hasOwnProperty('error')) {
    const error = errorObj.error;
    return {
      status: error.status,
      message: error.message,
      type: 'InternalServerError'
    };
  }

  // If it's none of the above, it hasn't come across yet.
  console.warn('Unhandled error type! See utils/errorParser.js and add handling for this', errorObj);
  return errorObj;
}
