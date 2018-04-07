import React, { Component } from 'react';
import SurveyField from './SurveyField';
import _ from 'lodash';

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
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm)
