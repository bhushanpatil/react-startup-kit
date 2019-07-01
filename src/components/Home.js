import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { connect} from 'react-redux';
import Form from './Form';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  
  
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items : [
            {
              title: "test"
            },
            {
              title: "test3"
            }
          ]
        }
    }

   
    render() {
        return (
            <Container>Home
                      <CssBaseline />

                      <List component="nav" aria-label="Main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>

      <Form />

      <List component="nav" aria-label="Secondary mailbox folders">
          {this.props.items.map(item=> {
            return  <ListItem button>
            <ListItemText primary={item.title} />
          </ListItem>
          })}

        
      </List>
        </Container>
        );
    }
}

const mapsStateToProps = state => {
  return {
    items : state.items
  };
};



export default connect(mapsStateToProps)(Home);