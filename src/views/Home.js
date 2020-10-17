import React from 'react';
import '../App.scss';
import HomeContent from '../components/HomeContent/HomeContent';
import { useDispatch } from 'react-redux';
import Formuser from '../components/FormUser/FormUser';
import Modal from '../modal/Modal';
import { setUser } from '../redux/actions/setUser';

function Home() {
    const dispatch = useDispatch();

    function submitPerson(values) {
        var res = values.email.split("@")
        values.nickname = res[0]
        values.iditem = "1"
        dispatch(setUser(values))
    }

    return (
        <>
            <HomeContent />
            <Formuser onSubmit={submitPerson} />
            <Modal />
        </>
    );
}

export default Home;