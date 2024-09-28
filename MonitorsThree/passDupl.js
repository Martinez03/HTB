var noncepwd = CryptoJS.SHA256(CryptoJS.enc.Hex.parse(CryptoJS.enc.Base64.parse('[nonce]') + 'fEGqtOEVFpoN6Ug0GWQ24DYHHUCNShf2ZzJeLHoztOc=')).toString(Crypto.JS.enc.Base64);
console.log(noncepwd);
