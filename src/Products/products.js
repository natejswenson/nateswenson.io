import React, {Component} from 'react';
import { Grid,Card,Button,Image } from 'semantic-ui-react';

    const store = () =>
      <div>
      <div id="my-store-22623134"></div>
      <div>
      <script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?22623134&data_platform=code&data_date=2020-01-12" charset="utf-8"></script><script type="text/javascript"> xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-22623134");</script>
      </div>
      </div>
      /*<Grid stackable columns={3}>{
        this.state.products.slice().map((wallet,i)=>
        <Grid.Column>
            <Card fluid>
                <Card.Content>
                {
                        this.state.products[i].img.slice().map((imgs,i)=>
                            <Image src={imgs.img} size='small'/> 
                                )}
                   
                           
                    
                    <Card.Header>{wallet.name}</Card.Header>
                    <Card.Meta>{wallet.cost}</Card.Meta>
                    <Card.Description>{wallet.description}</Card.Description>
                </Card.Content>
                <a href={wallet.btn}>
                  <Button attached='bottom' animated='fade' fluid >
                    <Button.Content visible>Register</Button.Content>
                    <Button.Content hidden>{wallet.cost}</Button.Content>
                  </Button>
                </a>
            </Card>
        </Grid.Column>
      )}
      </Grid>*/
   

export default (store);