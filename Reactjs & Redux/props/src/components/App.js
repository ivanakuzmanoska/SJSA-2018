import React from 'react';
import { Welcome } from './Welcome';
import avatar from "../assets/images/foto.jpg";
import { Comment } from './Comment';
import { HasVacancy } from './HasVacancy';

export class App extends React.Component {
    render() {

        let user = {
            name: "Ivana Kuzmanoska",
            email: 'ivanakumansoka@yahoo.com'
        }

        let author = {
            first_name: "Ivana",
            last_name: "Kuzmanoska",
            e_mail: "ivanakuzmanoska@yahoo.com",
            image_url: avatar
        }

        let comment = {
            text: "this is a simple comment. Lorem ipsum...",
            date: "29/10/2018"
        }
        return (
           <div>
               {/* <Welcome
                     name="Ivana Kuzmanoska"
                     email="ivana.ivana@gmail.com"
                     /> */}

                     {/* <Welcome user={user}/> */}
                     
                <Comment 
                     author={author} 
                     comment={comment}
                 />
              <HasVacancy availability={true} />
           </div>
        )
    }
}

