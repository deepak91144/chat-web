import { useState } from "react";
import CommonDialog from "../common-dialog/CommonDialog";

const SearchDialog = ({ openDialog }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <CommonDialog
        open={isOpen}
        handleClose={handleClose}
        dialogTitle="Search Here"
        dialogContent={<h1>this is search dialog</h1>}
        firstButtonText="Add"
        secondButtonText="Cancel"
        firstButtonBgColor="success"
        secondButtonBgColor="danger"
      />
    </>
  );
};

export default SearchDialog;
