import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    
    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length > 3 && this.state.salary) {
            this.props.onAdd(this.state.name, this.state.salary)
            this.setState({
                name: '',
                salary: ''
            })
        }
    }

    render() {
        const { name, salary } = this.state;

        let className = "btn btn-outline-light";
        if (!(this.state.name.length > 3 && this.state.salary > 500)) {
            className += ' err'
        }
        
        return (
        <div className="app-add-form">
            <h3>Добавити нового співробітника</h3>
            <form className="add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Прізвище та ім'я"
                    name='name'
                    value={name}
                    onChange={this.onValueChange}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name='salary'
                    value={salary}
                    onChange={this.onValueChange} />

                <button type="submit"
                        className={className}>Добавити</button>
            </form>
        </div>
        )
    }
}

export default EmployeesAddForm;