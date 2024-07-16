import React from "react";

export default function NoteForm(props) {
  const {
    modalId,
    modalTitle,
    handleOnSubmit,
    handleOnChange,
    submitBtnName,
    noteTitle,
    noteTag,
    noteDescription,
  } = props;
  return (
    <div className="note-form">
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby={modalId + "Label"}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={modalId + "Label"}>
                {modalTitle}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={(e) => {
                  e.target.reset();
                  e.preventDefault();
                }}
              >
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={noteTitle}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    value={noteTag}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={noteDescription}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="d-flex align-item-center justify-content-end mt-3">
                  <button
                    type="button"
                    className="btn btn-secondary me-3"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleOnSubmit}
                  >
                    {submitBtnName}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
