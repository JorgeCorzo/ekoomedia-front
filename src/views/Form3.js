import React from 'react';
import FormContent from '../components/FormContent/FormContent';
import { useDispatch } from 'react-redux';
import Formuser from '../components/FormUser/FormUser';
import Modal from '../modal/Modal';
import { setUser } from '../redux/actions/setUser';

function Form3() {
    const dispatch = useDispatch();

    function submitPerson(values) {
        var res = values.email.split("@")
        values.nickname = res[0]
        values.iditem = "4"
        dispatch(setUser(values))
    }

    return (
        <>
            <FormContent menuitem={"FORMULARIO 3"} />
            <Formuser onSubmit={submitPerson} />
            <Modal />
        </>
    );
}

export default Form3;