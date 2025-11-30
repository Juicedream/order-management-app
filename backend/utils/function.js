import crypto from 'crypto';

export const generateVerificationToken = (username) => {
    const randomChars = Math.random().toString(36).slice(2);
    return  "user=" +username[0] + "-"+ randomChars +"&token=" +crypto.randomBytes(32).toString('hex');
}

