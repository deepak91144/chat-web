import { useState } from "react";
import CommonDialog from "../common-dialog/CommonDialog";
import SearchDialogContent from "./SearchDialogContent";

const SearchDialog = ({ isSearch, setIsSearch }: any) => {
  const handleSearch = () => {
    setIsSearch(false);
  };
  const handleCancel = () => {
    setIsSearch(false);
  };
  const handleClose = () => {
    setIsSearch(false);
  };
  return (
    <>
      <CommonDialog
        open={isSearch}
        handleClose={handleClose}
        submitAction={handleSearch}
        cancelAction={handleCancel}
        dialogTitle="Find People"
        dialogContent={<SearchDialogContent />}
        firstButtonText="Add"
        secondButtonText="Cancel"
        firstButtonBgColor="success"
        secondButtonBgColor="danger"
      />
    </>
  );
};

export default SearchDialog;
