import React from 'react';
import { Button, Checkbox } from 'antd';

const Page1 = ({ selectedItems = [], setSelectedItems }) => {
    const toggleSelectAll = (e) => {
        const newStatus = e.target.checked;
        setSelectedItems(new Array(selectedItems.length).fill(newStatus));
    };

    return (
        <div>
            <h1>Сторінка кнопок</h1>
            <Checkbox onChange={toggleSelectAll}>Обрати всіх</Checkbox>
            {selectedItems.map((selected, index) => (
                <Checkbox key={index} checked={selected}>Елемент {index + 1}</Checkbox>
            ))}
            <Button type="primary">Кнопка 1</Button>
            <Button type="default">Кнопка 2</Button>
            
          <Button color="primary" variant="outlined">
            Outlined
          </Button>
          <Button style={{ backgroundColor: 'black', color: 'white' }} variant="solid">
             Solid
            </Button>

          <Button color="danger" variant="outlined">
            Outlined
          </Button>
        </div>
    );
};

export default Page1;
