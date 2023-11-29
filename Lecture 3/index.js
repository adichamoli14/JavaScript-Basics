console.log('Hello bhai');

//Math
    // console.log(Math.random());


//String
    // let lastName='chamoli'
    // lastName.length()

    // let add='Shastri nagar Dehradoon Uttarakhand';
    // let words=add.split(' ');
    // console.log(words);

    // console.log(add.replace('Shastri','Indira'));


//Template literal
    // let message=`h
    // e
    // l
    // l
    // o`
    // console.log(message);


//Date and Time
    // let date=new Date();

    // let date=new Date('April, 14, 2001, 7:00');

    // let date=new Date(2001, 3, 14, 4)
    // date.setHours(5);
    // console.log(date.getDate());
    // console.log(date);

//Array
    // let num=[2,3,4,5];
    // console.log(num)
    // console.log(num[2])

    //Insert at end
        // num.push(6);
        // console.log(num)

    //insert at front
        // num.unshift(9)
        // console.log(num)

    //insert at middle
        // num.splice(2,0,'a')
        // console.log(num)

    //Searching
        // console.log(num.indexOf(4))
        // console.log(num.indexOf(10))

        // console.log(num.includes(4))
        // console.log(num.includes(7))

        // console.log(num.indexOf(4,1))
        // console.log(num.indexOf(4,3))
        
    //Searching in an Object
        // let courses=[
        //     {no:1, naam:'adi'},
        //     {no:2, naam:'manii'}
        // ];
        // console.log(courses);

        // let ans=courses.find(function(content){
        //     return content.naam=='manii';
        // })
        // console.log(ans)

        //using the arrow function
            // let ans2=courses.find(content => content.naam=='adi')
            // console.log(ans2);


    //Removing Elements
        // let num=[2,3,4,5];
        // let num2=[6,7,8,9];


        //from end
            // num.pop();
            // console.log(num);
        
        //from begining
            // num.shift();
            // console.log(num);

        //from middle
            // num.splice(3,1);
            // console.log(num);

        //Emptying an array
            // num.length=0;
            // console.log(num);

            // num.splice(0,num.length);
            // console.log(num);

        //Combining and slicing array
            //Combining
                // let combine=num.concat(num2);
                // console.log(combine);

            //Slicing
                // let sliced=combine.slice(2,4);
                // console.log(sliced);

    //Spread operator
        // let combined=[...num,'a',true,...num2];
        // console.log(combined);

    //Iteration
        // let arr=[1,2,3,4];

        //for of loop
            // for(let values of arr){
            //     console.log(values);
            // }

        //for each loop
            // arr.forEach(function(number){
            //     console.log(number);
            // });

        //arrow func
            // arr.forEach(number=>console.log(number));

    //Joining the array
        // const joined=arr.join(',');
        // console.log(joined);

    //Split
        // let msg="This is my message";
        // let parts=msg.split(' ');
        // console.log(parts);

        // let new_combo=parts.join('_');
        // console.log(new_combo);

    //Sorting
        // let arr=[4,5,2,1,3];
        // arr.sort();
        // console.log(arr)
        // arr.reverse();
        // console.log(arr);

    //Sorting on object
        // let arr2=[
        //     {id:1,name:'manii'},
        //     {id:2,name:'adi'}
        // ];

        //callback function
            // let sorted=arr.sort(function(a,b){
            //     return a.name.localeCompare(b.name); 
            // });
            // console.log(sorted)

        //arrow function
            // let sorted=arr2.sort((a,b)=>a.name.localeCompare(b.name));
            // console.log(sorted)

    //Filtering the array
        // let nums=[-1,2,-3,4];

        //callback function to filter out only +ve values
            // let filtered=nums.filter(function(vals){
            //     return vals > 0;
            // });
            // console.log(filtered);

        //Using arrow function
            // let filtered=nums.filter(values=> values >0);
            // console.log(filtered);

    //Mapping an array
        // let arr=[4,5,6,7,8];

        //callback function
            // let items=arr.map(function(vals){
            //     return 'student_no' +' '+ vals;
            // });
            // console.log(items)

        //arrow function
            // let items=arr.map(vals=> 'student_no' + ' ' +vals);
            // console.log(items)

    //Mapping with objects
        // let arr=[1,2,-3,-4];
        // let filtered=arr.filter(vals=>vals>0);

        //Callback function
            // let items=filtered.map(function(num){
            //     return {value : num}
            // });
            // console.log(items)


        //Arrow
            // let items=filtered.map(num => ({value: num}));
            // console.log(items);
      

    //Chaining
        // let arr=[1,2,-3,-4];
        // let items=arr.filter(vals=>vals>=0).map(num=>({value:num}));
        // console.log(items);
