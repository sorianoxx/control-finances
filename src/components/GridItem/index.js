import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.td>{item.desc}</C.td>
      <C.td>{item.amount}</C.td>
      <C.td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.td>
      <C.td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.td>
    </C.Tr>
  );
};

export default GridItem;
