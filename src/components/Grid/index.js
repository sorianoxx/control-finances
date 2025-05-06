import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = ({ itens, setItens }) => {
    const onDelete = (ID) => {
        const newArray =  itens.filter((transaction) => transaction.id !==ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };



  return (
    <C.table>
      <C.thead>
        <C.tr>
          <C.th width={40}>Descrição</C.th>
          <C.th width={40}>Valor</C.th>
          <C.th width={10} alignCenter>
            Tipo
          </C.th>
          <C.th width={10}></C.th>
        </C.tr>
      </C.thead>
      <C.tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.tbody>
    </C.table>
  );
};

export default Grid;
