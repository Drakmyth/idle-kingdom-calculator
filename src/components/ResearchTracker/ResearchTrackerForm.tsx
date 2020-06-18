import React from 'react';
import { Form, Field } from 'react-final-form';
import { Building } from './ResearchTracker';
import { access } from 'fs';

interface ResearchTrackerFormProps {
    buildings: Building[]
}

const ResearchTrackerForm = (props: ResearchTrackerFormProps) => {
    const onSubmit = () => {

    }

    const required = (value:any) => value ? undefined : 'Required';

    return (
        <div className="ResearchTrackerForm">
            <Form onSubmit={onSubmit}
                initialValues={props.buildings.reduce((acc, b) => { return { ...acc, [b.name]: 0 } }, {})}
                render={renderProps => (
                    <form onSubmit={renderProps.handleSubmit}>
                        {props.buildings.map(b => (
                            <div>
                                <label>{b.name}</label>
                                <Field name={b.name}
                                    component="input"
                                    type="number"
                                    validate={required}
                                />
                            </div>
                        ))}
                        <pre>
                            {JSON.stringify(renderProps.values, undefined, 1)}
                        </pre>
                    </form>
                )}></Form>
        </div>
    );
}

export default ResearchTrackerForm;
