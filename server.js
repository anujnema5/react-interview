// console.log(module.exports === this);

// function name() {
//     console.log(this == global);
// }

// name()

// const obj = {
//     name : "Anuj",
//     y: function name() {
//         x = ()=> {
//             console.log(this);
//         }

//         x();
//     }
// }

// obj.y();


// global.obj.x()

// console.log(this);
// module.exports = 19;


// console.log(this === module.exports)
// // output - true


// const data = ()=> {
//     console.log(this);
// }

// global.data()


// function getThis () {
//     console.log(this === global);
// }

// getThis();

// const obj = {
//     name: 'Object',
//     method: ()=> {
//       console.log(this);
//     }
//   };
// obj.method();


const obj = {
    name: 'Object',
    parentMethod: function () {
      const innerFunc = ()=> {
          console.log(this);
    }
    innerFunc();
    }
  };
  
obj.parentMethod();
