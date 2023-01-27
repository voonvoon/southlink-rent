import * as Yup from 'yup';

export const formValues = {
    propName:'', 
    typeOfProp:'Condo',
    size:'', 
    furnishing:'none-furnished',
    description:'', 
    floor:'', 
    unitNumber:'', 
    rental:'', 
    numberBedRooms:'',
    status:'pending' ,
    phoneNumber:'',
    images:[]

}

export const validation = () => (
    Yup.object({
        propName:Yup.string()
        .required('Sorry the property name is required'),
        typeOfProp: Yup.string()
        .required('Sorry the type property is required'),
        size:Yup.number()
        .required('Sorry the size of property is required'),
        furnishing: Yup.string()
        .required('Sorry the furnishing condition is required'),
        description:Yup.string()
        .required('Sorry the description is required'),
        floor: Yup.string()
        .required('Sorry the floor is required'),
        unitNumber: Yup.string()
        .required('Sorry the unit number is required'),
        rental: Yup.number()
        .required('Sorry the rental amount is required'),
        numberBedRooms: Yup.number()
        .required('Sorry the number of bed room is required'),
        phoneNumber: Yup.string()
        .required('please provide phone number'),
        status: Yup.string()
        .required('sorry status is required.')

    })
)