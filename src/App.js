import { useForm } from 'react-hook-form';
import React, {useState} from 'react';
import './App.css';
import Fruit from "./Fruit";
import strawberry from './assets/strawberry.jpg';
import banana from './assets/banana.jpg';
import kiwii from './assets/kiwii.jpg';
import appel from './assets/appel.jpg';

function App() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);


    function reset(){
        Fruit.props.setAmount(0)
    }


  return (

    <div>
        <div className="basket">
      <h1>Fruitmand bezorgservice</h1>


                <Fruit
                    image={strawberry}
                    fruitname="Aardbeien"/>
                <Fruit
                    image={banana}
                    fruitname="Bananen"/>
                <Fruit
                    image={appel}
                    fruitname="Appels"/>
                <Fruit
                    image={kiwii}
                    fruitname="Kiwi"/>

                <button className="reset-button" onClick={reset}>RESET</button>
        </div>
        <div className="form-container">

            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="form-field"><label htmlFor="details-firstname"><input type="text" placeholder="Voornaam" {...register("firstname", {required: true, maxLength: 25})} /></label></p>
                <p className="form-field"><label htmlFor="details-lastname"><input type="text" placeholder="Achternaam" {...register("lastname", {required: true, maxLength: 25})} /></label></p>
                <p className="form-field"> <label htmlFor="details-age"><input type="text" placeholder="Leeftijd" {...register("age", {required: true, minLength: 1, maxLength: 3, valueAsNumber:true})} /></label></p>
                <p className="form-field"><label htmlFor="details-zip"><input type="text" placeholder="Postcode" {...register("zipcode", {required: true, pattern: /^[1-9][0-9]{3}?(?!sa|sd|ss)[a-z]{2}$/im})} /></label></p>

             <h3>Bezorg Frequentie</h3>
                <p className="radio-button"><input {...register("Every week" )} type="radio" value="Yes" /><label>Iedere week</label></p>
                <p className="radio-button"><input {...register("Other week" )} type="radio" value="No" /><label>Om de week</label></p>
                <p className="radio-button"><input {...register("Every month" )} type="radio" value="Yes" /><label>Iedere maand</label></p>
                <p className="radio-button"><input {...register("Other" )} type="radio" value="No" /><label>Anders</label></p>

                <p><label>Opmerking  <input type="textarea" id="comment-field" {...register("comment", { maxLength: 80})} /></label></p>

                <input className="submit-button"type="submit" />
            </form>

        </div>

    </div>
  );
}

export default App;
