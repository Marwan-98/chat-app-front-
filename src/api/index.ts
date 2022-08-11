import axios from 'axios';


export const signUser = async (values: any) => {


    try {

        await axios.post('loacalhost:2000/user/add', {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
        }).then((response) => {
            console.log(response)
        })



    } catch (error) {
console.log(error)
    }

}