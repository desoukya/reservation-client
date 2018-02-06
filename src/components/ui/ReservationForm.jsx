import React, { Component}  from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';

export default class ReservationForm extends Component {
    constructor(props) {
      super(props);
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.state = {name: '', hotelName: '', arrivalDate: '', departureDate: ''};
    }

    submit(e) {
      e.preventDefault();
      this.props.onNewReservation(this.state);
      this.setState({name: '', hotelName: '', arrivalDate: '', departureDate: ''});
    }

    handleChange(event) {
      const update = {};
      update[event.target.name] = event.target.value;
      this.setState(update);
    }

    handleDateChange(date, name) {
      if (typeof date === 'object') {
          date = date.format('YYYY/DD/MM');
      }
      const update = {};
      update[name] = date;
      this.setState(update);
    }


    render() {
        return (<form onSubmit={this.submit}>
                <div className="form-group">
                    <label htmlFor="resName">Name</label>
                    <input name="name" type="text" className="form-control" id="resName" placeholder="Enter Your Name" required value={this.state.name}
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="hotelName">Hotel Name</label>
                    <input name="hotelName" type="text" className="form-control" id="hotelName" placeholder="Enter Hotel Name" required value={this.state.hotelName}
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="arrivalDate">Arrival Date</label>
                    <Datetime value={this.state.arrivalDate}
                              onChange={(date) => this.handleDateChange(date, 'arrivalDate')}
                              closeOnSelect={true}
                              closeOnTab={true}
                              inputProps={{
                                required: true,
                                id: "arrivalDate",
                                name: "arrivalDate",
                            }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="departureDate">Departure Date</label>
                    <Datetime value={this.state.departureDate}
                              onChange={(date) => this.handleDateChange(date, 'departureDate')}
                              closeOnSelect={true}
                              closeOnTab={true}
                            inputProps={{
                                required: true,
                                id: "departureDate",
                                name: "departureDate",
                            }}/>
                </div>
                <button type="submit" className="btn btn-primary float-right">Add Reservation</button>
                </form>);
    }
}