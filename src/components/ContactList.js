import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard key={contact.name} contact={contact}></ContactCard>
    });

    return (
        <div>{renderContactList}</div>
    )
}

export default ContactList;