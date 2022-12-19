import axios from "axios"
//import GalleryItem from "../GalleryItem/GalleryItem"


function ToDoList({ list }) {

    // const likeButton = (event, image) => {
    //     event.stopImmediatePropagation();

    //     axios.put(`/gallery/like/${image.id}`)
    //         .then(response => {
    //             getGallery()
    //         }).catch(err => {
    //             console.log(err);
    //         })
    // }
    return (
        <>
            {list.map(todo => (
               <ul>
                <label>
                    <input 
                    type="radio"
                    value={todo.id}
                    id={todo.id}
                    name="task"/>
                 {todo.task}
                 </label>
                 </ul>
               )
            )}
        </>
    )
}

export default ToDoList