const data1={
    title:"let us see",
    author:"denis ritchie",
    imglink:"",
    price:345,


};
const data2={
    title:"THE EVERYDAY AUTHOR",
    author:"denis ritchie",
    imglink:"",
    price:345,
};
const data3={
    title:"THE EVERYDAY AUTHOR",
    author:"denis ritchie",
    imglink:"",
    price:365,
};
const data4={
    title:"THE EVERYDAY AUTHOR",
    author:"denis ritchie",
    imglink:"",
    price:396,
};
const data5={
    title:"THE EVERYDAY AUTHOR",
    author:"denis ritchie",
    imglink:"",
    price:323,
};
const data6={
    title:"THE EVERYDAY AUTHOR",
    author:"denis ritchie",
    imglink:"",
    price:323,
};


function BookList2(){        //rafce for shortcut
    return (
        <>
        <div>
        <h1>best selling books</h1>
        </div>
        
        
    
    <div className="booklist">
    {/* <h1>best selling books</h1> */}
    
    <Book data={data1}/>
    <book
        title={data1.title}
        author={data1.author}
        image={data1.img}
        price={data1.price}
        
        
        />
    <Book data={data2}/>
    <book
        title={data2.title}
        author={data2.author}
        image={data2.img}
        price={data2.price}
        
        
        />
    <Book data={data3}/>
    <book
        title={data3.title}
        author={data3.author}
        image={data3.img}
        price={data3.price}
        
        
        />
    <Book data={data4}/>
    <book
        title={data4.title}
        author={data4.author}
        image={data4.img}
        price={data4.price}
        
        
        />
    <Book data={data5}/>
    <book
        title={data5.title}
        author={data5.author}
        image={data5.img}
        price={data5.price}
        
        
        />
    


                                     
    {/* <Book/>;
    <Book/>;
    <Book/>; */}
    
    </div> 
    </> 
    )  //to return 2 books add book again using fragement
};
function Book({data}){
    return(  
        <div className="book">
            <h2>{data.title}</h2>
            <img src={data.imglink}/>
            <h2>{data.author}</h2>
            <h3>{data.price}</h3>
        </div>                             //fragment is used....or div can also be used
        
    );
};

// const Title=() => <h1>Title</h1>
// function Title(){
//     return <h1>The Everyday Hero</h1>
// };
// function Author(){
//     return <h1>Author</h1>
// };
// function Image(){
//     return <img src="https://m.media-amazon.com/images/I/815tOaVXmHL._SY466_.jpg"></img>
// };
// function Price(){
//     return <h1>$35</h1>
// };
// const Image=() =>{           CAN ALSO DONE WITH ARROW FUNCTION
//     return <h2>image</h2>
// }
export default BookList2;





//5 SERIES

