// helpers/response.js
function formattedResponse(code, data, message) {
    return {
      code,
      data,
      message,
    };
  }
  
module.exports = formattedResponse;