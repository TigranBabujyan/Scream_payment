import React, { useState } from 'react';
import './App.css';

interface FormState {
  name: string;
  surname: string;
  date: string;
}

const App: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    surname: '',
    date: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  function Submit(e:  React.FormEvent<HTMLFormElement>) {
    const formEle = document.querySelector("form");
    if (formEle) {
      const formDatab = new FormData(formEle as HTMLFormElement);
      fetch(
          "https://script.google.com/macros/s/AKfycbz9oyoPIPaBiM-GLcNukJmUcLbcgFtfpYIKssUhM6IFfa3fUDkMsqpB9Fe7kTRr2g3D/exec",
          {
            method: "POST",
            body: formDatab
          }
      )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }

  return (
      <div className='App'>
        <div className='body'>
          <header className='header title_element'>Scream Of Soul</header>
          <div className='checklist checklist_element'>
            <ol>
              <div className='checklist_title'>Read Before Submitting</div>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </li>
              <li>Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea.
              </li>
              <li>Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla.
              </li>
              <li>Pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est.
              </li>
              <li>Laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem.
              </li>
              <li>Aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </li>
              <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores.
              </li>
              <li>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet.
              </li>
              <li>Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam.
              </li>
              <li>Quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut.
              </li>
              <li>Voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
                nulla.
              </li>
              <li>Pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti.
              </li>
              <li>Atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                similique sunt in.
              </li>
              <li>Atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                similique sunt in.
              </li>
            </ol>
          </div>
          <form className='form' onSubmit={(e) => Submit(e)}>
            <div className='name'>
              <label className='label_position'>
                Name:
                <input
                    type='text'
                    name='name'
                    value={formState.name}
                    onChange={handleInputChange}
                />
              </label>
            </div>
            <div className='surname'>
              <label className='label_position'>
                Surname:
                <input
                    type='text'
                    name='surname'
                    value={formState.surname}
                    onChange={handleInputChange}
                />
              </label>
            </div>
            <div className='date'>
              <label className='label_position'>
                Date:
                <input
                    type='date'
                    name='date'
                    value={formState.date}
                    onChange={handleInputChange}
                />
              </label>
            </div>
            <button className= 'button' type='submit'>Submit</button>
          </form>
        </div>
      </div>
  );
};

export default App;
