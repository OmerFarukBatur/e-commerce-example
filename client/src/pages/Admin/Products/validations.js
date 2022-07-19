import {object, string} from 'yup';


const newScheme = object({
    title: string().required(),
    description: string().required().min(5),
    price: string().required()
});


export default newScheme;