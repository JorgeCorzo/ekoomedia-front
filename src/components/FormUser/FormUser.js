import React from 'react';
import './FormUser.scss';
import { configuration } from '../../configuration/Configuration';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = configuration.dato_vacio
    } else if (values.name.length < 2) {
        errors.name = configuration.minimo_caracteres
    }
    if (!values.email) {
        errors.email = configuration.dato_vacio
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = configuration.error_email
    }
    if (!values.phone) {
        errors.phone = configuration.dato_vacio
    } else if (!/^(0|[1-9][0-9]{9})$/i.test(values.phone)) {
        errors.phone = configuration.error_telefono
    }
    if (!values.age) {
        errors.age = configuration.dato_vacio
    } else if (values.age < 18 || values.age > 100) {
        errors.age = configuration.error_edad
    }
    return errors
}

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
    <div className="boxdata">
        <label className="boxdata__label">{label}</label>
        <input {...input} placeholder={placeholder} type={type} className="boxdata__input" />
        {touched && ((error && <span className="boxdata__error">{error}</span>))}
    </div>
)

let FormUser = props => {
    const { handleSubmit } = props;
    const loading = useSelector((store) => store.setusers.loading);

    return (
        <form onSubmit={handleSubmit} className='formuser'>
            <h1>{configuration.title_form}</h1>
            <div className='formuser__container'>
                <div className='formuser__wrapper'>
                    <Field name="name" component={renderField} type="text" label='Nombre' />
                    <Field name="email" component={renderField} type="text" label='Email' />
                    <Field name="phone" component={renderField} type="text" label='Teléfono' />
                    <Field name="age" component={renderField} type="text" label='Edad' />

                    <div className="boxbutton">
                        <button disabled={loading} type="submit" className="boxbutton__submit">{loading ? 'Cargando...' : 'Guardar'}</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

FormUser = reduxForm({
    form: 'user',
    validate,
})(FormUser);

export default FormUser;