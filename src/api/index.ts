import axios from 'axios';


export const signUser = async () => {


    try {

        await axios.post('loacalhost:2000/user/add').then((response) => {
            console.log(response)
        })



    } catch (error) {
console.log(error)
    }

}