import React from 'react';
import FormContent from '../components/FormContent/FormContent';
import { useDispatch } from 'react-redux';
import Formuser from '../components/FormUser/FormUser';
import Modal from '../modal/Modal';
import { setUser } from '../redux/actions/setUser';

function Form2() {
    const dispatch = useDispatch();

    function submitPerson(values) {
        var res = values.email.split("@")
        values.nickname = res[0]
        values.iditem = "3"
        dispatch(setUser(values))
    }

    return (
        <>
            <FormContent menuitem={"FORMULARIO 2"} />
            <Formuser onSubmit={submitPerson} />
            <Modal />
        </>
    );
}

export default Form2;