const fs = require('fs');

let numberReader = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile('textFiles/' + `${fileName}`, 'utf-8', (err, text) => {
      try{
        text=parseInt(text);
        if(Number.isNaN(text)){
          throw 'Error';
        }
      }
      catch(e){
        reject('Not a number');
      }
      if ( err ) {
        reject(err);
      }
      else {
        resolve(text);
      }
    });
  });
};

let acc=1;
numberReader('data1.txt',true)
  .then(val=>{
    acc=val*acc;
    console.log('Accumulator: '+`${acc}`);
    return numberReader('data2.txt');
  })
  .then(val=>{
    acc=val*acc;
    console.log('Accumulator: '+`${acc}`);
    return numberReader('data3.txt');
  })
  .then(val=>{
    acc=val*acc;
    console.log('Accumulator: '+`${acc}`);
    return numberReader('data4.txt');
  })
  .then(val=>{
    acc=val*acc;
    console.log('Accumulator: '+`${acc}`);
    return numberReader('data5.txt');
  })
  .then(val=>{
    acc=val*acc;
    console.log('Accumulator: '+`${acc}`);
  })
  .catch(err =>{
    console.log(err);
  });


//Put commmon catch in end.