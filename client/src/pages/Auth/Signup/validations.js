import {object, string, ref} from 'yup';


const validations = object({
    email: string().email("Geçerli bir email giriniz..").required("Boş geçilemez."),
    password: string().required().min(5,"Parolanız en az 5 karakter olmalıdır."),
    passwordConfirm: string().oneOf([ref('password')],"Parolalar uyuşmuyor.").required()
});


export default validations;