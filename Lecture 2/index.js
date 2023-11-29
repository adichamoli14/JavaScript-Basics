console.log('Hello Bhaisahab');

//Object creation
    // let rectangle={
    //     length:1,
    //     breadth:2,

    //     draw: function(){
    //         console.log('draw');
    //     }
    // };

// Yeh cheej console mei likh bhai ---> rectangle.draw();

/*
//factory Function- Creates and return an Object ->camelCase Notation used
       function createRectangle(length, breadth){
        return rect={
            length,
            breadth,

            draw(){
                console.log('drawing Rectangle');
            }
        };
    }

//Creating new object using a factory function
    let rectangleOBJ=createRectangle(5,4);
*/

/*
//Constructor Function -> Follows Pascal Notation ->First letter of every word is capital
//prop/methood -> initaialse/Define
    function Rectangle(len, bre){
        this.length=len;
        this.breadth=bre;
        this.draw=function(){
            console.log('Drawing');
        }
    }

//Object creation using constructor
    let rectangleObj=new Rectangle(10,20);
/*
//Addition of a property in an object
    rectangleObj.color='yellow';
    console.log(rectangleObj);

//Deletion of a property in an object
    delete rectangleObj.color;
    console.log(rectangleObj);
*/

//rectangleObj ka constructor Rectangle hai, aur Rectangle ka contructor Function hai wo Function internally kese implement ho rha hga chlo dekhte hai
    // let Rectangle1=new Function(
    //     'length','breadth',
    //     `this.length=length;
    //     this.breadth=breadth;
    //     this.draw=function(){
    //         console.log('Drawing');
    //     }`);

    // let rect=new Rectangle1(20,30);
    // console.log(rect);


//Diffrence between Primitive DT and Reference DT

    //Primitive -> Copy bnti hai ----- Copied by their value
        // let a=10;
        // let b=a;

        // a++;
        // console.log(a);
        // console.log(b);
    //--------------------------------------------------------------------
        // let a=10;
        // function inc(a){
        //     a++;
        // }
        // inc(10);
        // console.log(a);

    //Reference ->Same address pe point krte hai ---- Copied by their address/refernece
        // let a={value:10};
        // let b=a;

        // a.value++;
        // console.log(a.value);
        // console.log(b.value);
    //--------------------------------------------------------------------
        // let a={value:10};
        // function inc(a){
        //     a.value++;
        // }
        // inc(a);
        // console.log(a.value);


//Iterating through objects
    // let rect={
    //     length:10,
    //     breadth:20
    // };

    // //for in loop
    //     for(let key in rect){
    //         //key are reflected by key variable
    //         //values are reflected by rect[key]
    //         console.log(key,rect[key]);
    //     }

    // //for of loop
    //     for(let key of Object.keys(rect)){
    //         console.log(key);
    //     }

    //     for(let key of Object.entries(rect)){
    //         console.log(key);
    //     }


    // if('color' in rect){
    //     console.log('Present');
    //     }
    // else{
    //     console.log('Absent');
    // }
    

//Cloning of an object
    //Iteration
        // let src={
        //     a:10,
        //     b:20,
        //     c:30
        // };
        // let des={};

        // for(let key in src){
        //     des[key]=src[key];
        // }

        // console.log(des);


    //Assign
        // let src={
        //     a:40,
        //     b:50,
        //     c:60
        // };
        // let des=Object.assign({},src);
        // console.log(des);


    //Spread
    let src={
        a:70,
        b:80,
        c:90
    };
    let des={...src};