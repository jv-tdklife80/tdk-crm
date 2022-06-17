import React from 'react';

const ContactCard = (props) => {
    const {id, name, email, phone, address, city, state, zip } = props.contact;
    return (
        <div>
            <div>
                <div key={`${id}_${name}`}>{name}</div>
                <div key={`${id}_${email}`}>{email}</div>
                <div key={`${id}_${phone}`}>{phone}</div>
                <div key={`${id}_${address}`}>{address}</div>
                <div key={`${id}_${city}`}>{city}</div>
                <div key={`${id}_${state}`}>{state}</div>
                <div key={`${id}_${zip}`}>{zip}</div>
            </div>
        </div>
    );
}

export default ContactCard;