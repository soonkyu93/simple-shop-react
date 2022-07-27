import { addCount, removeCount } from "../../store/store";
import styled from "styled-components";
import Button from "../../components/Button";

const Table = styled.table`
    width: 100%;
    font-size: 25px;
    border-collapse: collapse;
`;

const TableHead = styled.thead`
    height: 50px;
    color: #fff;
    background-color: #000;
`;

const TableRow = styled.tr`
    height: 50px;
    border-bottom: 1px solid #CCC;
`;

function CartTable(props) {
    return (
        <Table>
        <TableHead>
            <TableRow>
                <th scope="col" width="15%">상품코드</th>
                <th scope="col">상품명</th>
                <th scope="col" width="15%">수량</th>
                <th scope="col" width="15%">수량증가</th>
                <th scope="col" width="15%">상품삭제</th>
            </TableRow>
        </TableHead>
        <tbody>
        {
            props.cartItem.map((element, i) => {
                return (
                    <TableRow key={i}>
                        <td scope="row">{element.id}</td>
                        <td>{element.title}</td>
                        <td>{element.count}</td>
                        <td>
                            <Button onClick={() => {props.dispatch(addCount(element.id))}}>+</Button>
                        </td>
                        <td>
                            <Button onClick={() => {props.dispatch(removeCount(element.id))}}>삭제</Button>
                        </td>
                    </TableRow>
                );
            })
        }
        </tbody>
    </Table>
    );
}

export default CartTable;