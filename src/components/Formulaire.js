import '../styles/Formulaire.css'
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';

function Formulaire() {
    //let [vj, setVJ] = useState("toto")
    const emailRef = useRef(null);

    let getEmailValue = () => {
        let emailValue = emailRef.current.value;
        console.log(emailRef)
        if (!emailValue.includes("@")) {
            return setValidEmail(true)
        }
        setValidEmail(false)
    }

    let [validEmail, setValidEmail] = useState(true);
    useEffect(() => {
        if (!emailRef.current.value.includes("@")) {
            alert("Email non correct")
        }
    }, [validEmail]);
    return (
        <form className='formcenter'>
            <img className="mb-4" src={logo} alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Formulaire</h1>

            <div className="form-floating">
                <input type="text" className="form-control" id="nom" placeholder="Nom " />
                <label htmlFor="floatingInput">Nom</label>
            </div>

            <div className="form-floating">
                <input type="text" className="form-control" id="prenom" placeholder="Dupliquer Nom " />
                <label htmlFor="floatingInput">Dupliquer Nom</label>
            </div>

            <div className="form-floating">
                <input type="text" className="form-control" placeholder="Texte sans J" />
                <label htmlFor="floatingInput">Sans J</label>
            </div>

            <div className="form-floating">
                <input type="email" ref={emailRef} className="form-control" id="email" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPasswordVerif" placeholder="Mot de passe" />
                <label htmlFor="floatingPasswordVerif">Verifier mdp</label>
            </div>

            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={
                (e) => {
                    e.preventDefault()
                    getEmailValue()
                }
            } >Valider</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
    );
}

export default Formulaire