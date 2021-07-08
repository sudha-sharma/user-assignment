//React imports
import React, { useEffect, useState } from "react";
//Material UI imports
import Button from "@material-ui/core/Button";
//Local imports
import {
  createuser,
  getAllUsers,
  removeuser,
  updateuser
} from "../services/user-http.service";
import FormDialog from "./user-form-dialog.component";
import { NameTable } from "./user-table.component";
import { AlertBar } from "./alert-bar.component";

const List = () => {
  const [rows, setRows] = useState([]);
  const [alertMeta, setAlertMeta] = useState({ severity: "", message: "" });
  const [isuserListManipulated, setuserListManipulated] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [selected, setSelected] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: ""
  });

  useEffect(() => {
    getAllUsers().then(res => setRows(res.data));
  }, []);

  useEffect(() => {
    if (isuserListManipulated) {
      getAllUsers().then(res => setRows(res.data));
    }
    setuserListManipulated(false);
  }, [isuserListManipulated]);

  const add = data => {
    createuser(data)
      .then(() => {
        showAlert("success", "Create success");
        closeDialog();
      })
      .catch(() => showAlert("error", "Create failed"));
  };

  const showAlert = (severity, message) => {
    setuserListManipulated(true);
    setAlertMeta({ severity, message });
    setAlertOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSelected({ id: "", name: "", capital: "" });
  };

  const edit = data => {
    data.id = selected.id;
    updateuser(data.id, data)
      .then(() => {
        showAlert("success", "Update success");
        closeDialog();
      })
      .catch(() => showAlert("error", "Update failed"));
  };

  const remove = row => {
    removeuser(row.id)
      .then(() => showAlert("success", "Delete success"))
      .catch(() => showAlert("error", "Delete failed"));
  };

  const openCreateDialog = () => {
    openuserFormDialog({
      id: "",
      firstName: "",
      email: "",
      lastName: "",
      mobile: "",
      password: ""
    });
  };

  const openEditDialog = row => {
    openuserFormDialog(row);
  };

  const openuserFormDialog = row => {
    setDialogOpen(true);
    setSelected(row);
  };

  const handleSubmit = user => {
    if (selected.id) {
      edit(user);
    } else {
      add(user);
    }
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <div>
      <AlertBar
        open={isAlertOpen}
        onClose={handleAlertClose}
        alertMeta={alertMeta}
      />
      <Button variant="outlined" color="primary" onClick={openCreateDialog}>
        Add new
      </Button>
      <FormDialog
        open={isDialogOpen}
        handleClose={closeDialog}
        handleSubmit={handleSubmit}
        selected={selected}
      />
      <NameTable rows={rows} onDelete={remove} openEditModal={openEditDialog} />
    </div>
  );
};

export default List;
