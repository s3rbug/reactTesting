import React from "react";
import classes from "./FormsControls.module.css";
import Tooltip from "react-power-tooltip";

const FormControl = ({ input, meta: { touched, error }, children }) => {
    const hasError = touched && error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {children}
                <Tooltip show={hasError} static position={directionChooser(input.name)}>
                    <span className={classes.tooltipText}>{error}</span>
                </Tooltip>
            </div>
        </div>
    )
}

const directionChooser = (name) => {
    if (name === "email")
        return "top left";
    else
        return "left center";
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
}