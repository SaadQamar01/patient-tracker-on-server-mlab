import ActionPatient from "./../action/patientsAction.js";
import { AsyncStorage } from 'react-native'
import axios from 'axios';
export default class PatientMiddleware {

    static asyncAddPatient(patientObj) {
        var patientsArray = [];
        return (dispatch) => {
            //  console.log(patientObj)
            patientDetails = {
                Pname: patientObj.Pname,
                Dname: patientObj.Dname,
                Mname: patientObj.Mname,
                Mcost: patientObj.Mcost,
                Disease:patientObj.Disease,
                Date:patientObj.Date
            }
            axios.post('https://patient-tracker-app.herokuapp.com/addPatient', patientDetails)
                .then(() => {
                    axios.get('https://patient-tracker-app.herokuapp.com/getData')
                        .then((data) => dispatch(ActionPatient.addPatient(data.data)))
                        .catch((err) => console.log(err))
                })
                .catch((err) => alert(err));

        }
    }
    static asyncLoadPatient() {
        return (dispatch) => {
            axios.get('https://patient-tracker-app.herokuapp.com/getData')
                // .then((data) => console.log(data.data))
                .then((data) => dispatch(ActionPatient.addPatient(data.data)))
                .catch((err) => alert(err))
        }
    }
    static asyncDeletePatient(id) {
        // console.log("test ",data);
        return (dispatch) => {
            console.log(id)
            axios.post('https://patient-tracker-app.herokuapp.com/deleteData', { id })
                .then(() => {
                    axios.get('https://patient-tracker-app.herokuapp.com/getData')
                        .then((data) => dispatch(ActionPatient.addPatient(data.data)))
                        .catch((err) => alert(err))
                }).catch((err) => alert(err))
        }

    }
    static asyncDeleteAllPatient() {
        // console.log("test ",data);
        return (dispatch) => {

        }
    }
}
