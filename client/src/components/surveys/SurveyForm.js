import React, { Component } from 'react';
import SurveyField from './SurveyField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails'

// reduxForm is helper that allows us to comunicate with store
// it is nearly identical to the connect helper!!
// field is helper to render any tipe of html element ( SwissArmyKnife :) )
import { reduxForm, Field } from 'redux-form';

const FIELDS = [
    {
        label: 'Survey Title',
        name: 'title'
    },
    {
        label: 'Subject Line',
        name: 'subject'
    },
    {
        label: 'Email Body',
        name: 'body'
    },
    {
        label: 'Recipient List',
        name: 'emails'
    }
]

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return <Field component={SurveyField} key={name} type="text" label={label} name={name} />} 
        )
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))} action="">
                    {this.renderFields()}
                    <button className="btn btn-flat right white-text teal" type="submit">
                    Next
                        <i className="material-icons right">done</i>
                    </button>

                    <Link to="/surveys" className="btn btn-flat left white-text red">
                    Cancel
                        <i className="material-icons right">cancel</i>
                    </Link>
                </form>
            </div>
        )
    }
}

function validate(values) {
const errors = {}

    errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({ name }) => {
        if(!values[name]) {
            errors[name] = 'You must provide a value!'
        }
    });

 


    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm)
