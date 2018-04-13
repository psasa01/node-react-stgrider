import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';


const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

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
                className="btn-flat darken-3 yellow white-text"
                onClick={onCancel}
            >
                Cancel
                <i className="material-icons right">cancel</i>
            </button>
            <button 
                className="btn-flat green white-text right"
                onClick={() => submitSurvey(formValues, history)}
            >
                Submit Survey 
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));