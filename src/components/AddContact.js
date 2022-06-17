import React from 'react';
import '../custom.scss';

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "" || this.state.phone === "") {
            alert("Please fill in name, email and phone")
            return;
        }
        if (this.state.phone.length != 10) {
            alert("Phone Number must be 10 digits")
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ 
            name: "", 
            email: "", 
            phone: "", 
            address: "",
            city: "",
            state: "",
            zip: ""
        })
        console.log(this.state)
    };

    // render() {
    //     return (
    //         <div class="container">
    //             <h2>Add Contact</h2>
    //             <form onSubmit={this.add}>
    //                 <div>
    //                     <label>Full Name: </label>
    //                     <input 
    //                         type="text" 
    //                         name="FullName" 
    //                         placeholder="Full Name"
    //                         value={this.state.name}
    //                         onChange={(e) => this.setState({name: e.target.value})}
    //                     />
    //                 </div>
    //                 <div>
    //                     <label>Email: </label>
    //                     <input
    //                         type="text"
    //                         name="email"
    //                         placeholder="Email"
    //                         value={this.state.email}
    //                         onChange={(e) => this.setState({ email: e.target.value })}
    //                     />
    //                 </div>
    //                 <div>
    //                     <label>Phone Number: </label>
    //                     <input
    //                         type="number"
    //                         name="phoneNumber"
    //                         placeholder="Phone Number"
    //                         value={this.state.phone}
    //                         onChange={(e) => this.setState({ phone: e.target.value })}
    //                     />
    //                 </div>
    //                 <div>
    //                     <label>Street Address: </label>
    //                     <input
    //                         type="text"
    //                         name="address"
    //                         placeholder="address"
    //                         value={this.state.address}
    //                         onChange={(e) => this.setState({ address: e.target.value })}
    //                     />
    //                 </div>
    //                 <div>
    //                     <label>State </label>
    //                 </div>
    //                 <button>Add</button>
    //             </form>
    //         </div>

    //     );
    // }

    render() {
        return (
            <div class="container">
                <form onSubmit={this.add}>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label name="inputName">Name</label>
                            <input
                            type="text"
                            class="form-control"
                            name="FullName"
                            placeholder="Full Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}
                        />
                        </div>
                        <div class="form-group col-md-6">
                            <label name="inputEmail4">Email</label>
                            <input
                            type="text"
                            class="form-control"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label name="inputAddress">Address</label>
                            <input
                            type="text"
                            class="form-control"
                            name="address"
                            placeholder="address"
                            value={this.state.address}
                            onChange={(e) => this.setState({ address: e.target.value })}
                        />
                        </div>
                        <div class="form-group col-md-6">
                            <label name="inputPhone">Phone</label>
                            <input
                            type="number"
                            class="form-control"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={this.state.phone}
                            onChange={(e) => this.setState({ phone: e.target.value })}
                        />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input
                                type="text"
                                class="form-control"
                                name="city"
                                placeholder="City"
                                value={this.state.city}
                                onChange={(e) => this.setState({ city: e.target.value })}
                            />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control" onChange={(e) => this.setState({ state: e.target.value })}>
                                <option selected>Choose...</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                                
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input
                                type="text"
                                class="form-control"
                                name="zip"
                                placeholder="Zip Code"
                                value={this.state.zip}
                                onChange={(e) => this.setState({ zip: e.target.value })}
                            />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;