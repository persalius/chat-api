module.exports = {
  PORT: process.env.PORT || 8000,
  JWT_SECRET: process.env.JWT_SECRET || 'dogecodes-secret',
  MONGODB_URI:
    process.env.MONGODB_URI ||
    'mongodb://sergey90:sergey90@ds257668.mlab.com:57668/chat',
};
