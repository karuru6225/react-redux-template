
let env = process.env.NODE_ENV || 'develop';

let enablePush = false;
switch(env){
  case 'develop':
  case 'staging':
    enablePush = true;
}

if(env == 'prod'){
  env = 'production';
}

let config = {
  pushSenderId: "012345678901",
  enablePush,
  env,
  srcDir: 'src/',
  dstDir: 'dst/',
  imgDir: 'img/'
};

module.exports = config;
