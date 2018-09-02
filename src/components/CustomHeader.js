import React from "react";
import { Header, Left, Button, Icon, Body, Title } from "native-base";

const CustomHeader = props => (
  <Header>
    <Left>
      <Button
        transparent
        onPress={() => {
          props.toggleDrawer();
        }}
      >
        <Icon name="menu" />
      </Button>
    </Left>
    <Body>
      <Title>{props.title}</Title>
    </Body>
  </Header>
);

export  { CustomHeader };
