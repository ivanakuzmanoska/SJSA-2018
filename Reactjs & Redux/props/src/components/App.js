import React from 'react';
import { Welcome } from './Welcome';
import avatar from "../assets/images/foto.jpg";
import { Comment } from './Comment';
import { HasVacancy } from './HasVacancy';
import { List } from './List';

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

        let movies= [
                "Pulp Fiction",
                "The Wild Bunch",
                "Straw Dogs",
                "Citizen Kane",
                "Annie Hall",
                "Legally Blonde"
        ]
let complicatedMovies = [
    {title: 'Pulp Fiction',
    year: 1994
    },
    {title: 'The Wild Bunch',
    year: 1969
    },
    {title: 'Straw Dogs',
    year: 1974
    },
    {title: 'Citizen Kane',
    year: 1940
    },
    {title: 'Annie Hall',
    year: 1974
    },
    {title: 'Legally Blonde',
    year: 2002
    },
]
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

              {/* <List movies={movies}/> */}
              <List movies={complicatedMovies}/>
           </div>
        )
    }
}

