import React, { Component } from 'react';
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import { Link } from "react-router-dom"

import { postEvent } from "../actions"

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push("/")
  }

  render() {
<<<<<<< HEAD
    const { handleSubmit, pristine, submitting } = this.props
=======
    const { handleSubmit } = this.props
>>>>>>> b8e8c4e52b201fb2753623956fb720850e6f6bcf

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField}/></div>

        <div>
<<<<<<< HEAD
          <input type="submit" value="Submit" disabled={pristine || submitting} />
=======
          <input type="submit" value="Submit" disabled={false} />
>>>>>>> b8e8c4e52b201fb2753623956fb720850e6f6bcf
          <Link to="/">Cancel</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."
  return errors
}
const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: "eventNewForm" })(EventsNew)
)
