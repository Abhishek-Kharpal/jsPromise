const fs = require('fs');

let numberReader = async (fileName) => {
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

let utility = async (acc)=>{
  try{ 
    let val=await numberReader('data1.txt');
    acc=val*acc;
    console.log(acc);
    val=await numberReader('data3.txt');
    acc=val*acc;
    console.log(acc);
  }
  catch(err){
    console.log(err);
  }
};

utility(acc);