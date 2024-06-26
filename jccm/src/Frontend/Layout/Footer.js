import React from 'react';

import { Label, tokens } from '@fluentui/react-components';

import useStore from '../Common/StateStore';

export default () => {
    const { inventory, deviceFacts, cloudDevices } = useStore();
    const countOfDeviceFacts = Object.keys(deviceFacts).length;
    const countOfAdoptedDevices = Object.values(deviceFacts).filter(
        (facts) => cloudDevices[facts?.serialNumber]
    ).length;

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', paddingLeft: '20px' }}>
            <Label
                size='small'
                style={{ color: tokens.colorNeutralForeground4 }}
            >
                Total Local Inventory Devices: {inventory.length}
            </Label>
            <Label
                size='small'
                style={{ color: tokens.colorNeutralForeground4 }}
            >
                Local Devices with Facts: {countOfDeviceFacts}
            </Label>
            <Label
                size='small'
                style={{ color: tokens.colorNeutralForeground4 }}
            >
                Adopted Devices: {countOfAdoptedDevices}
            </Label>
        </div>
    );
};
