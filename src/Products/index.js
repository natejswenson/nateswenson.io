import React from 'react';
import { Grid,Divider,Button,Transition} from 'semantic-ui-react';

class store extends React.Component {  


componentDidMount(){
 const script = document.createElement('script');
  script.charset = 'utf-8';
  script.type = 'text/javascript';
  script.src = 'https://app.ecwid.com/script.js?22623134&data_platform=code&data_date=2020-01-13'
  document.getElementById('my-store-22623134').appendChild(script);
  window._xnext_initialization_scripts = [{ 
    widgetType: 'ProductBrowser', id: 'my-store-22623134', arg: [
      'id=my-store-22623134'
    ] 
  }];
}

  render() {
    
    return(
      <div>
        <Divider horizontal><h1>Fine Leather Goods</h1></Divider>
      <Grid stackable >
        <Grid.Row attached='true'  style={{ minHeight: 600, padding: '5em 0em' }}>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={14}>
            <div id="my-store-22623134"></div>
          </Grid.Column> 
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid.Row>
    </Grid>
    </div>
    )
  } 
}
export default(store);
