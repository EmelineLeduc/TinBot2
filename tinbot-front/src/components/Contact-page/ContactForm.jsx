import './ContactForm.css';
import Header from '../Navbar/Navbar';
import { message } from 'antd';


const ContactForm = () => {

  const success = (e) => {
    e.preventDefault()
    message.success({
      content: 'Votre message a bien été envoyé',
      className: 'custom-class',
      style: {
        marginTop: '5vh',
      },
    });
  }

    return (
        <div className="father-container">
        <Header/>
        <div className="big-container2">
        <div className="container-fc">
        <h2>Contactez-Nous</h2>
        <form className='container-formc' onSubmit={success}>

          <label htmlFor="name">Votre Prénom</label>
          <input name="name" required></input>

          <label htmlFor="lastname">Votre Nom</label>
          <input name="lastname" required></input>

          <label htmlFor="email">Votre email</label>
          <input name="email"  type="email" required></input>

          <label htmlFor="bio">Votre message</label>
          <textarea name="bio" required></textarea>

          <div className="bouton">
          <button type='submit'>Envoyer</button>
          </div>

        </form>
        </div>
        </div>
        </div>
    )
}

export default ContactForm;