import { useForm } from 'react-hook-form';
import React, {useState} from 'react';
import './App.css';
import Fruit from "./Fruit"

function App() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);


  return (

    <div>
      <h1>Fruitmand bezorgservice</h1>
        <div>

                <Fruit fruitname="Aardbeien"/>
                <Fruit fruitname="Bananen"/>
                <Fruit fruitname="Appels"/>
                <Fruit fruitname="Kiwi's"/>

           // const [newAmount, resetAmount] = useState(0);



                <button>RESET</button>


            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="details-firstname">Voornaam:<input type="text" placeholder="Voornaam" {...register("First name", {required: true, maxLength: 30})} /></label>
                <label htmlFor="details-lastname">Achternaam<input type="text" placeholder="Achternaam" {...register("Last name", {required: true, maxLength: 30})} /></label>
                <label htmlFor="details-age">Leeftijd<input type="text" placeholder="Leeftijd" {...register("age", {required: true, minLength: 1, maxLength: 3})} /></label>
                <label htmlFor="details-zip">Postcode<input type="text" placeholder="Postcode" {...register("Zipcode", {required: true, pattern: /^\S+@\S+$/i})} /></label>


             <h3>BezorgFrequentie</h3>
                <input {...register("Every week", { required: true })} type="radio" value="Yes" /><label>Iedere week</label>
                <input {...register("Other week", { required: true })} type="radio" value="No" /><label>Om de week</label>
                <input {...register("Every month", { required: true })} type="radio" value="Yes" /><label>Iedere maand</label>
                <input {...register("Other", { required: true })} type="radio" value="No" /><label>Anders</label>

                <label>Opmerking<input type="textarea"  {...register("Last name", { maxLength: 80})} /></label>

                <input type="submit" />
            </form>

        </div>

    </div>
  );
}

export default App;
