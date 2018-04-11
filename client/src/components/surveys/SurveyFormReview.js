import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash'


const SurveyFormReview = ({ onCancel, formValues }) => {

    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        )
    })

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
                className="btn-flat darken-3 yellow"
                onClick={onCancel}
            >
                Cancel
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps)(SurveyFormReview);