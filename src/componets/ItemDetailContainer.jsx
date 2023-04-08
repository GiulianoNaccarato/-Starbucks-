import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
/*import arrayProductos from "./json/productos.json"*/
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [item, setItem] =useState({});
    const {id} = useParams();


   /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout (() => {
                resolve(arrayProductos.find(prod => prod.id === parseInt(id)));
            }, 2000);
        });
        promesa.then((respuesta) => {
            setItem(respuesta);
        })
    }, [id]); */

    useEffect(() => {
        const db = getFirestore();
        const document = doc(db, "items", id);
        getDoc(document).then(element => {
            setItem({id:element.id, ...element.data()});
        });

    }, [id]);

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer 