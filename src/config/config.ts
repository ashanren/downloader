
export const ui = {
  host  : 'http',
  ip    : '0.0.0.0',
  port  : 8000,
  path  : '/billing/therapists/'
};

export const port  = 8500;

export const EMAIL_SETTINGS = {
  host  : 'smtp.office365.com',
  secure: false,
  port  : 587, 
  tls   : {ciphers : 'SSLv3'},
  auth  : {
    user  : 'alert@talkpathlive.com',//username
    pass  : '$erv3rA!ert$',//password
  },
  pool: true,
  maxConnections: 3
};

