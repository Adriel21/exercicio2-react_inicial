import {useState, useEffect} from "react";
import estilos from "./Home.module.css";

const Home =  () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            try{
                const resposta = await fetch("https://fakestoreapi.com/products/")

                const dados = await resposta.json();
                setProducts(dados);
            } catch (error) {
                console.log("Deu ruim! " + error.message);
            }
        }

        getProducts();
    }, [])

  return (
    <div className={estilos.produtos}>
    {products.map(({ id, title, price, image }) => (
        // A função só pode retornar uma coisa
        
                <div key={id}>
                    <img src={image} alt="" width="120"/>
                    <h2>{title}</h2>
                    <p>{price}</p>
                </div>
        
    ))}
    </div>
  )
}

export default Home