import react from "react";
import "./Gallery.css";
import { useEffect, useState } from "react";


function Gallery(){

    const[image,setImage] = useState([]);

    useEffect(()=>{
        function Fetchdata(){
  const data = [
        {
            id:1,
            url:"https://images.unsplash.com/photo-1682113600882-c99811edfd77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            title:"image"
        },
        {
            id:2,
            url:"https://images.unsplash.com/photo-1682420420091-ca2afcdf6956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            title: "image 2"
        }, {
            id:3,
            url:"https://images.unsplash.com/photo-1680484702376-ce814193208f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
       
            title: "image 3"
        },
        {
            id:4,
            url:"https://images.unsplash.com/photo-1682621034776-78c3a4854512?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            title: "image 4"
        },
        {
            id:5,
            url:"https://img.freepik.com/premium-vector/portrait-smiling-young-man-saying-hello-waving-with-hand-hi-bye-gesture-happy-guy-greeting-welcoming-smb-colored-flat-vector-illustration-isolated-white-background_198278-12011.jpg?w=2000",
            title: "image 5"
        },
    ]
    setImage(data)
}
Fetchdata()
    },[])

  


    return(
        <div>
            <h1 className="title">Image Gallery</h1>
            <div className="imagegrid">
                {
                    image.map((img)=>(
                      <div className="card" key={img.id}>
                    
                        <img src={img.url} alt="#" />
                    <div className="details">
                        <h3>{img.title}</h3>
                        <button>Delete</button>
                    </div>
                   
                    
                </div>  
                    ))
                
                 }
            </div>
        </div>
    )
}
export default Gallery;