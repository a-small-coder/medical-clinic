import Login from "./Login"
import Registration from "./Registration"
import FormikTestForms from "../#FormikTutorial/FormikTestForms"
import FormWithFieldArray from "../#FormikTutorial/FormWithFieldArray"
import MultiStepForm from "../#FormikTutorial/MultiStepForm"


const AuthFormControl = (props) =>{
    const {control, errorHandler, ...rest} = props
    switch(control){
        case 'login' :
            return <Login {...rest}/>
        case 'registration':
            return <Registration {...rest}/>
        case 'learning-formik':
            return <FormikTestForms/>
        case 'multistep-form':
            return <MultiStepForm/>
        case 'field-array-form':
            return <FormWithFieldArray/>
        default: 
            return errorHandler
    } 
    
}
export default AuthFormControl