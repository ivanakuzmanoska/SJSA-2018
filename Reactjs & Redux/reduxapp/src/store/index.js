import { createStore } from 'redux';
import reducer from '../reducers/';

const initialState = {
    technology: 'React',
    technologies: ['React', 'Angular', 'Vue'],
    user: {
        name: "Ivana Kuzmanoska",
        email: 'ivana@ivana.com'
    }
}

export const store = createStore(reducer, initialState);