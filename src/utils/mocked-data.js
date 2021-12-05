const fs = require('fs')
// const path = require('path')

function promiseAllP(items, block) {
    var promises = [];
    items.forEach(function(item,index) {
        promises.push( function(item,i) {
            return new Promise(function(resolve, reject) {
                return block.apply(this,[item,index,resolve,reject]);
            });
        }(item,index))
    });
    return Promise.all(promises);
}

function readFiles(dirname) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirname, function(err, filenames) {
            if (err) return reject(err);
            promiseAllP(filenames,
            (filename,index,resolve,reject) =>  {
                fs.readFile(path.resolve(dirname, filename), 'utf-8', function(err, content) {
                    if (err) return reject(err);
                    return resolve({filename: filename, contents: content});
                });
            })
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            });
        });
  });
}

// readFiles('../files').then(data => {
//     fs.writeFileSync('../files/allUsers.json', JSON.stringify(data,null,2));
// })
// .catch( error => {
//  console.log(error);
// });

let cleanFiles = JSON.parse(fs.readFileSync('../files/allUsers.json', 'utf-8'))
let filenames = cleanFiles.map(e=>e.filename)
let contents = cleanFiles.map(e=>e.contents)
let dataJSON = contents.map(e=>JSON.parse(e))
let cms = dataJSON.map(e => e.provider.content_module)
let ams = dataJSON.map(e => e.provider.auth_module)


let obj =
{ 'auth_module':
    {
    'authn_provider_1': [],
    'authn_provider_2': [],
    'authn_provider_3': [],
    'authn_provider_4': []
    },
'content_module':
    {
    'authz_provider_1': [],
    'authz_provider_2': [],
    'authz_provider_3': [],
    'authz_provider_4': []
    }
}


let cm1 = 'authz.provider_1'
let cm2 = 'authz.provider_2'
let cm3 = 'authz.provider_3'
let cm4 = 'authz.provider_4'

let am1 = 'authn.provider_1'
let am2 = 'authn.provider_2'
let am3 = 'authn.provider_3'
let am4 = 'authn.provider_4'

const authz_provider_1_f =  dataJSON.filter(cm => cm.provider.content_module === cm1)
function authz_provider_1(){
    obj.content_module.authz_provider_1.push(authz_provider_1_f.map(e => e.name))
}
const authz_provider_2_f =  dataJSON.filter(cm => cm.provider.content_module === cm2)
function authz_provider_2(){
    obj.content_module.authz_provider_2.push(authz_provider_2_f.map(e => e.name))
}
const authz_provider_3_f =  dataJSON.filter(cm => cm.provider.content_module === cm3)
function authz_provider_3(){
    obj.content_module.authz_provider_3.push(authz_provider_3_f.map(e => e.name))
}
const authz_provider_4_f =  dataJSON.filter(cm => cm.provider.content_module === cm4)
function authz_provider_4(){
    obj.content_module.authz_provider_4.push(authz_provider_4_f.map(e => e.name))
}
// authz_provider_1()
// authz_provider_2()
// authz_provider_3()
// authz_provider_4()

const authn_provider_1_f =  dataJSON.filter(ap => ap.provider.auth_module === am1)
function authn_provider_1(){
    obj.auth_module.authn_provider_1.push(authn_provider_1_f.map(e => e.name))
}
const authn_provider_2_f =  dataJSON.filter(ap => ap.provider.auth_module === am2)
function authn_provider_2(){
    obj.auth_module.authn_provider_2.push(authn_provider_2_f.map(e => e.name))
}
const authn_provider_3_f =  dataJSON.filter(ap => ap.provider.auth_module === am3)
function authn_provider_3(){
    obj.auth_module.authn_provider_3.push(authn_provider_3_f.map(e => e.name))
}
const authn_provider_4_f =  dataJSON.filter(ap => ap.provider.auth_module === am4)
function authn_provider_4(){
    obj.auth_module.authn_provider_4.push(authn_provider_4_f.map(e => e.name))
}

// authn_provider_1()
// authn_provider_2()
// authn_provider_3()
// authn_provider_4()

function mockedData(){
    fs.writeFileSync('../files/mockedData.json', JSON.stringify(obj,null,2))
}

//mockedData()

