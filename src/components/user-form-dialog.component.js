//React imports
import React from "react";
//Lodash imports
import _ from "lodash/fp";
//Form imports
import { useForm } from "react-hook-form";
//Material UI imports
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const FormDialog = props => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    props.handleSubmit(data);
  };

  return (
    <Dialog
      fullWidth={true}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add/Edit user </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            inputRef={register({ required: true })}
            name="id"
            autoFocus
            id="id"
            label="Id"
            type="text"
            fullWidth
            defaultValue={props.selected.id}
            disabled={!!props.selected.id}
          />
          {_.get("id.type", errors) === "required" && (
            <p className="error">This field is required</p>
          )}
          <TextField
            inputRef={register({ required: true })}
            name="firstName"
            id="firstName"
            label="FirstName"
            type="text"
            fullWidth
            defaultValue={props.selected.firstName}
          />
          {_.get("firstName.type", errors) === "required" && (
            <p className="error">This field is required</p>
          )}
          <TextField
            inputRef={register({ required: true })}
            name="lastName"
            id="lastName"
            label="LastName"
            type="text"
            fullWidth
            defaultValue={props.selected.lastName}
          />
          {_.get("id.type", errors) === "required" && (
            <p className="error">This field is required</p>
          )}
          <TextField
            inputRef={register({ required: true })}
            name="mobile"
            id="mobile"
            label="Mobile"
            type="number"
            fullWidth
            defaultValue={props.selected.mobile}
          />
          {_.get("id.type", errors) === "required" && (
            <p className="error">This field is required</p>
          )}
          <TextField
            inputRef={register({ required: true })}
            name="email"
            id="email"
            label="Email"
            type="email"
            fullWidth
            defaultValue={props.selected.email}
          />
          {_.get("id.type", errors) === "required" && (
            <p className="error">This field is required</p>
          )}
          <TextField
            inputRef={register({ required: true })}
            name="password"
            id="password"
            label="Password"
            type="password"
            fullWidth
            defaultValue={props.selected.password}
          />
          {_.get("password.type", errors) === "required" && (
            <p>This field is required</p>
          )}
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
