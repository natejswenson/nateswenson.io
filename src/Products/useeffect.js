

function myFunction() {

       
      
  var script = document.createElement('script');
  script.charset = 'utf-8';
  script.type = 'text/javascript';
  script.src = 'https://app.ecwid.com/script.js?22623134&data_platform=code&data_date=2020-01-13'

  document.getElementById('my-store-22623134').appendChild(script);

  window._xnext_initialization_scripts = [
      // Storefront widget
      { 
        widgetType: 'ProductBrowser', id: 'my-store-22623134', arg: [
          'id=my-store-22623134'
        ] 
      }
  ];

    }
export default myFunction;