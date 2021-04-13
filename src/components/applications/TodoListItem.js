import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Badge,
  CustomInput,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  CardFooter,
  CardHeader,
  List,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { Colxx } from '../common/CustomBootstrap';

import { get } from 'lodash';

const TodoListItem = ({
  item,
  imgSource,
  handleCheckChange,
  isSelected,
  deleteData,
  assignMining,
  onUpdateProgress,
  className,
  onProccess,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [dropdownBasicOpen, setDropdownBasicOpen] = useState(false);

  const renderItem = (data) => {
    return (
      <List type="unstyled">
        <ul>
          {data.map((i, index) => (
            <li key={index}>{i.name}</li>
          ))}
        </ul>
      </List>
    );
  };

  return (
    <Colxx xxs="12" className="mb-3">
      <Card className={className}>
        <CardBody>
          <div className="d-flex flex-row mb-3 justify-content-between">
            <div className="flex-grow-1">
              <p className="font-weight-medium mb-0 ">
                <b>{item.name} </b> - {item.age} Tahun | {item.contact}
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Badge color={item.resultCode === 4 ? 'info' : 'danger'}>
                  {item.criteriaStatus}
                </Badge>
              </p>
            </div>

            <div className="comment-likes">
              <ButtonDropdown
                direction="left"
                isOpen={dropdownBasicOpen}
                toggle={() => setDropdownBasicOpen(!dropdownBasicOpen)}
              >
                <DropdownToggle caret size="xs" color="secondary" outline>
                  Actions
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => onUpdateProgress(item, 'criteria')}
                  >
                    Lihat detail
                  </DropdownItem>
                  {item.analyse && (
                    <DropdownItem onClick={() => onProccess(item, 'criteria')}>
                      Lihat Proses
                    </DropdownItem>
                  )}
                  <hr />
                  <DropdownItem onClick={() => deleteData(item._id)}>
                    Hapus
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          </div>
          <div className="mt-4">{renderItem(item.symptomsId)}</div>
        </CardBody>
        <CardFooter className="text-muted">
          Diperiksa oleh {get(item, 'inputBy.name', '-')} -{' '}
          {moment(item.createdAt).startOf('second').fromNow()}
        </CardFooter>
      </Card>
    </Colxx>
  );
};

export default React.memo(TodoListItem);
