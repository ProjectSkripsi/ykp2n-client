import React from 'react';
import {
  CustomInput,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from 'reactstrap';
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
} from 'availity-reactstrap-validation';
import Select from 'react-select';
import CustomSelectInput from '../../../components/common/CustomSelectInput';
import IntlMessages from '../../../helpers/IntlMessages';

const AddNewModal = ({
  modalOpen,
  toggleModal,
  data,
  onChange,
  onSubmit,
  isUpdate,
}) => {
  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>Tambah Gejala</ModalHeader>
      <ModalBody>
        <AvForm
          className="av-tooltip tooltip-label-right"
          onSubmit={(event, errors, values) => onSubmit(event, errors, values)}
        >
          <AvGroup>
            <Label>Kode Gejala</Label>
            <AvInput
              required
              name="code"
              value={data.code}
              onChange={onChange}
            />
            <AvFeedback>Kode Gejala wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label>Nama Gejala</Label>
            <AvInput
              required
              name="name"
              value={data.name}
              onChange={onChange}
            />
            <AvFeedback>Name wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label>Bobot</Label>
            <AvInput
              required
              name="bobot"
              type="number"
              value={data.bobot}
              onChange={onChange}
            />
            <AvFeedback>Name wajib di isi!</AvFeedback>
          </AvGroup>
          <AvRadioGroup
            className="error-l-150 "
            name="diagnose"
            required
            value={data.diagnose}
          >
            <Label className="d-block mt-4">Diagnosa</Label>
            <AvRadio
              customInput
              onChange={onChange}
              label="Putaw"
              value="Putaw"
            />
            <AvRadio
              customInput
              onChange={onChange}
              label="Sabu"
              value="Sabu"
            />
            <AvRadio
              customInput
              onChange={onChange}
              label="Alkohol"
              value="Alkohol"
            />
            <AvRadio
              customInput
              onChange={onChange}
              label="Ganja"
              value="Ganja"
            />
          </AvRadioGroup>
          <AvGroup>
            <Label>Keterangan</Label>
            <AvInput
              required
              name="description"
              value={data.description}
              onChange={onChange}
              type="textarea"
            />
            <AvFeedback>Keterangan wajib di isi!</AvFeedback>
          </AvGroup>
          <Button
            color="secondary"
            outline
            onClick={toggleModal}
            className="mt-5 mr-5 ml-4"
          >
            <IntlMessages id="pages.cancel" />
          </Button>
          <Button color="primary" className="mt-5 ml-5">
            <IntlMessages id="pages.submit" />
          </Button>
        </AvForm>
      </ModalBody>
    </Modal>
  );
};

export default AddNewModal;
