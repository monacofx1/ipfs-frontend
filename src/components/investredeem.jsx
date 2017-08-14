import React from "react";
import {
  Table,
  List,
  Input,
  Button,
  Card,
  Icon,
  Divider,
} from "semantic-ui-react";

const InvestRedeem = props =>
  (<div>
    <Card centered>
      <Card.Content>
        <Card.Header>Invest / Redeem</Card.Header>
        <br />
        <List>
          <List.Item as="a">
            <List.Content>
              <Input placeholder="Amount" />
            </List.Content>
          </List.Item>
          <List.Item as="a">
            <List.Content>
              <Input placeholder="Price per share" />
            </List.Content>
          </List.Item>
          <List.Item as="a">
            <List.Content>
              <Input placeholder="Total" />
            </List.Content>
          </List.Item>
        </List>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="black">
            Invest / Redeem
          </Button>
        </div>
      </Card.Content>
    </Card>
  </div>);

export default InvestRedeem;