import {object, string} from 'yup';


const validations = object({
    email: string().email("Geçerli bir email giriniz..").required("Boş geçilemez."),
    password: string().required().min(5,"Parolanız en az 5 karakter olmalıdır.")
});


export default validations;