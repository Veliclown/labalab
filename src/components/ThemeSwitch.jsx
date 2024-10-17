import React from 'react';
import { Switch } from 'antd';

const ThemeSwitch = ({ onChange }) => {
    return (
        <Switch
            checkedChildren="Темна"
            unCheckedChildren="Світла"
            onChange={onChange}
        />
    );
};

export default ThemeSwitch;
