const fs =require('fs');

let customFileReader = (fileName) =>{

  return new Promise((resolve,reject) => {
    fs.readFile('textFiles/'+`${fileName}`,'utf-8',(err,text)=>{
      if(err){
        reject(err);
      }
      else{
        resolve(text);
      }
    });
  });
};


let filesReader = ()=>{

  let files =['A.txt','B.txt','C.txt'];

  for(let i=0;i<3;i++){
    fs.readFile('textFiles/'+`${files[i]}`,'utf-8',(err,text)=>{
      if(err){
        throw err;
      }
      console.log(text.toString());
    });
  }

  for(let i=0;i<3;i++){
    console.log('Now in sync');
    let data = fs.readFileSync('textFiles/'+`${files[i]}`,{encoding:'utf-8',flag: 'r'});
    console.log(data);
  }

};

customFileReader('A.txt').then(val=>{
  console.log(val);
  return customFileReader('B.txt');
})
  .then(val=>{
    console.log(val);
    return customFileReader('C.txt');
  })
  .then(val=>{
    console.log(val);
  });