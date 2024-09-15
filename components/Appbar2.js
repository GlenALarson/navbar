import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Appbar2 = () => {
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Title" />
            <Appbar.Action icon="calendar" onPress={() => {}} />
            <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
    );
};

export default Appbar2;
