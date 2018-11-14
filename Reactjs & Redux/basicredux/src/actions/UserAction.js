export const fetchUser = () => {
    return {
        type: 'GET_USER',
        payload: {
            name: "Ivana Kuzmanoska",
            mail: "ivanakuzmanoska@yahoo.com"
    }
}
}

export const fetchCv = () => {
    return {
        type: 'GET_CV',
        payload: {
            cv: "Ivana Kuzmanoska",
            mail: "ivanakuzmanoska@yahoo.com"
    }
}
}