export default function decode (token) {
  const segments = token.split('.');

  if (segments.length !== 3) {
    throw new Error('Not enough or too many segments');
  }

  const header = JSON.parse(base64urlDecode(segments[0]));
  const payload = JSON.parse(base64urlDecode(segments[1]));

  return {
    header: header,
    payload: payload,
    signature: segments[2]
  };
}

function base64urlDecode (str) {
  return new Buffer(base64urlUnescape(str), 'base64').toString();
}

function base64urlUnescape (str) {
  str += Array(5 - str.length % 4).join('=');
  return str.replace(/\-/g, '+').replace(/_/g, '/');
}
