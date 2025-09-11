const aws = require("aws-sdk");
require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});
  
  let uploadFile= async ( file) =>{
    return new Promise( function(resolve, reject) {
     // this function will upload file to aws and return the link
     let s3= new aws.S3({apiVersion: '2006-03-01'}); // we will be using the s3 service of aws
  
     var uploadParams= {
         ACL: "public-read",
         Bucket: "classroom-training-bucket",  
         Key: "abc/" + file.originalname, 
         Body: file.buffer
     }
  
  
     s3.upload( uploadParams, function (err, data ){
         if(err) {
             return reject({"error": err})
         }

         return resolve(data.Location)
     })
  
    })
  }

  module.exports = { uploadFile}